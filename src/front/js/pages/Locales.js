
import React, { useEffect, useState, useRef, useContext } from "react";

// import "../../styles/locales.css";
import { CardLocal } from "../component/LocalesCard/CardLocal.jsx";
import { Container } from "@mui/system";
import { CallToAction2 } from "../component/CallToAction/CallToAction2.jsx";
import { Grid, Typography } from "@mui/material";
import {Context} from '../store/appContext'


export const Locales = () => {
  const [locales, setLocales] = useState();
  const [genres, setGenres] = useState()
  const { store} = useContext(Context)

  useEffect(() => {
    const options = {
      methods: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    fetch(`${process.env.BACKEND_URL}/api/locales`, options)
      .then((response) => response.json())
      .then((result) => {setLocales(result)});
  }, []);

// c
  useEffect(() => {
    console.log('holaaa!!')
    const options = {
      methods: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      headers: {
        Authorization: `Bearer ${store.token_local}`,
      },
    };
    fetch(`${process.env.BACKEND_URL}/api/local_musicgenre`, options)
      .then((response) => response.json())
      .then((result) => setGenres(result));
      
  }, []);

  const scrolltop = useRef()
  useEffect(()=>{
    scrolltop.current?.scrollIntoView({behavior: 'smooth'})
  },[])
  return (
    <>
    <div ref={scrolltop}/>
      <CallToAction2 text1="¿Te gustaría ofrecer música en vivo en tu local?" text2="Contacta con músicos cerca de tí" title="Músicos cerca de mi" to="/musicos" />
      {/* <div>{genres?.map((element, index) =>element)}</div> */}
      <Container className="mb-5">
        <Typography className="mb-5 text-center" variant="h2">Locales con música en vivo cerca de ti</Typography>
        <Grid container spacing={2} >
          {locales?.map((element, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <CardLocal
                local_img={element.local_img}
                name={element.name}
                city={element.city}
                ubicacion_local={element.ubicacion_local}
                description={element.description}
                local_music_genres={element.local_music_genres}
                to={`/localprofile/${element.id}`}
              />
              
            </Grid>
          ))}
        </Grid>
      </Container>
  
    </>
  );
};
