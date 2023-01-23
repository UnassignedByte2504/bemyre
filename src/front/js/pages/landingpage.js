import React, { useRef } from "react";
import { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { locales, bandas, eventos, musicos } from "../mockingData";
import { Link } from "react-router-dom";

//Import materials
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import { Container } from "@mui/material";

// Import components
import { LandingJumbo } from "../component/jumbotron/landingjumbo";
import { CallToAction2 } from "../component/CallToAction/CallToAction2.jsx";
import { CardLocal } from "../component/LocalesCard/CardLocal.jsx";
import { CardBandas } from "../component/BandasCard/CardBandas.jsx";
import { LoginJumbo } from "../component/jumbotron/LoginJumbo.js";
import { CardConcert } from "../component/ConcertCard/CardConcert.jsx";
import { CardMusician } from "../component/MusicianCard/CardMusician.jsx";

export const LandingPage = () => {
  const { actions, store } = useContext(Context);
  const [activePage, setActivePage] = useState();
  const [lattitude, setLattitude] = useState();
  const [longitude, setLongitude] = useState();
  const [currentCity, setCurrentCity] = useState();
  const [provincia, setProvincia] = useState();
  const date = new Date();

  const day = date.getDate();
  const month = date.getMonth() + 1;

  const fetchCityName = async () => {
    const apiKey = store.geo_api_key;
    const opts = {
      method: "GET",
    };
    const geoApiurl = `https://api.geoapify.com/v1/geocode/reverse?lat=${lattitude}&lon=${longitude}&apiKey=${apiKey}`;
    await fetch(geoApiurl, opts)
      .then((response) => response.json())
      .then((data) => {
        setCurrentCity(data.features[0].properties.city);
      });
  };

  useEffect(() => {
    const currentPath = window.location.pathname;
    setActivePage(currentPath);
    actions.setLocation(currentPath);
  }, [store.currentPath]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLattitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }, []);
  useEffect(() => {
    fetchCityName();
  }, [lattitude]);

  useEffect(() => {
    const opt = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    if (currentCity) {
      fetch(`${process.env.BACKEND_URL}/api/states/${currentCity}`, opt)
        .then((res) => res.json())
        .then((data) => {
          setProvincia(data);
        });
    }
  }, [currentCity]);

  useEffect(()=>{
    console.log(provincia)
  },[provincia])

  const scrolltop = useRef()
  useEffect(()=>{
    scrolltop.current?.scrollIntoView({behavour: 'smooth'})
  },[])
  
  return (
    <Box>
      <div ref={scrolltop}/>
      {sessionStorage.getItem("current_user") ? (
        <LoginJumbo currentCity={currentCity} provincia={provincia}/>
      ) : (
        <LandingJumbo />
      )}

      <Container maxWidth="xl" className="text-center">
        {currentCity && (
          <Typography variant="h3" className=" mt-5 mb-5">
            Conciertos en {currentCity} esta semana{" "}
            <i className="far fa-calendar-alt"></i>
            {day}/{month} - <i className="far fa-calendar-alt"></i>
            {day + 7}/{month}
          </Typography>
        )}
      </Container>

      {/* ------EVENTOS----------- */}
      <Box className="mx-4 mb-5">
      <Link to={'/conciertos'} className="Link  titles-link">
      <Typography  sx={{ marginTop: "2rem", marginX: "0.5rem" }} variant="h2">
          Conciertos en tu zona
        </Typography>
        </Link>
        <Box
          className="rowCards"
          sx={{
            display: "flex",
            gap: "1.5rem",
            paddingY: "1.5rem",
            paddingX: "0.5rem",
          }}
        >
          {eventos?.map((element, index) => (
            <Box key={index}>
              <CardConcert
                event_img={element.event_img}
                name={element.name}
                generosMusica={element.generosMusica}
                city={element.city}
                ubicacion_event={element.ubicacion_event}
                description={element.description}
                date={element.date}
                hour={element.hour}
                Key={index}
              />
            </Box>
          ))}
        </Box>
      </Box>

      {/* ------MÚSICOS----------- */}
      <Box className="mx-4 mb-5">
      <Link to={'/musicos'} className="Link  titles-link">
      <Typography  sx={{ marginTop: "2rem", marginX: "0.5rem" }} variant="h2">
          Contacta con músicos
        </Typography>
        </Link>
        <Box
          className="rowCards"
          sx={{
            display: "flex",
            gap: "1.5rem",
            paddingY: "1.5rem",
            paddingX: "0.5rem",
          }}
        >
          {musicos?.map((element, index) => (
            <Box key={index}>
              <CardMusician
                musico_img={element.musico_img}
                user_name={element.user_name}
                generosMusica={element.generosMusica}
                city={element.city}
                description={element.description}
                artistic_name={element.artistic_name}
                instruments={element.instruments}
                Key={index}
              />
            </Box>
          ))}
        </Box>
      </Box>

      {/* ------LOCALES----------- */}
      <Box className="mx-4">
      <Link to={'/locales'} className="Link  titles-link">
      <Typography  sx={{ marginTop: "2rem", marginX: "0.5rem" }} variant="h2">
          Locales con música en vivo
        </Typography>
        </Link>
        <Box
          className="rowCards"
          sx={{
            display: "flex",
            gap: "1.5rem",
            paddingY: "1.5rem",
            paddingX: "0.5rem",
          }}
        >
          {locales?.map((element, index) => (
            <Box key={index}>
              <CardLocal
                // generoMusica1={element.generosMusica.generoMusica1}
                // generoMusica2={element.generosMusica.generoMusica2}
                // las imagenes van en el csv y en models?
                local_img={element.local_img}
                name={element.name}
                city={element.city}
                ubicacion_local={element.ubicacion_local}
                description={element.description}
                generosMusica={element.generosMusica}
                Key={index}
              />
            </Box>
          ))}
        </Box>
      </Box>

      {/* ------BANDAS----------- */}
      <Box className="mx-4 mb-5">
      <Link to={'/bandas'} className="Link  titles-link">
      <Typography  sx={{ marginTop: "2rem", marginX: "0.5rem" }} variant="h2">
          Bandas de música
        </Typography>
        </Link>
        <Box
          className="rowCards"
          sx={{
            display: "flex",
            gap: "1.5rem",
            paddingY: "1.5rem",
            paddingX: "0.5rem",
            // prueba
            // marginY: "5rem"
          }}
        >
          {bandas?.map((element, index) => (
            <Box key={index}>
              <CardBandas
                banda_img={element.banda_img}
                name={element.name}
                generosMusica={element.generosMusica}
                city={element.city}
                ubicacion_local={element.ubicacion_local}
                description={element.description}
                integrantes={element.integrantes}
                integrantes_nuevos={element.integrantes_nuevos}
                Key={index}
              />
            </Box>
          ))}
        </Box>
      </Box>

      <CallToAction2
        text1="¿Eres músico?"
        text2="Conecta con melómanos como tú y forma tu propia banda"
        to="/signup"
        title="Crear perfil"
      />
    </Box>
  );
};
