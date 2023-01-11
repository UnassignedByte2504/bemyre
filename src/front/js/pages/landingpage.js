import React from "react";
import { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { locales } from "../mockingData";

//Import materials
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import { Container } from "@mui/material";

// Import components
import { LandingJumbo } from "../component/jumbotron/landingjumbo";
import { CallToAction2 } from "../component/CallToAction/CallToAction2.jsx";
import { CardLocal } from "../component/LocalesCard/CardLocal.jsx";

export const LandingPage = () => {
  const { actions, store } = useContext(Context);
  const [activePage, setActivePage] = useState();
  const date = new Date();

  const day = date.getDate();
  const month = date.getMonth() + 1;

  useEffect(() => {
    const currentPath = window.location.pathname;
    setActivePage(currentPath);
    actions.setLocation(currentPath);
  }, [store.currentPath]);

  return (
    <Box>
      <LandingJumbo />
      <Container maxWidth="xl" className="text-center">
        <Typography variant="h3" className=" mt-5 mb-5">
          Conciertos en Sevilla esta semana{" "}
          <i className="far fa-calendar-alt"></i>
          {day}/{month} - <i className="far fa-calendar-alt"></i>
          {day + 7}/{month}
        </Typography>
      </Container>
      <Box className="mx-4">
        <Typography sx={{ marginTop: "2rem", marginX: "0.5rem" }} variant="h2">
          Locales
        </Typography>
        <Box
          className="rowCards"
          sx={{
            display: "flex",
            gap: "1.5rem",
            paddingY: "1.5rem",
            paddingX: "0.5rem",
          }}
        >
          {locales?.map((element) => (
            <CardLocal
              // generoMusica1={element.generosMusica.generoMusica1}
              // generoMusica2={element.generosMusica.generoMusica2}
              // las imagenes van en el csv y en models?
              local_img={element.local_img}
              name={element.name}
              city={element.city}
              ubicacion_local={element.ubicacion_local}
              description={element.description}
            />
          ))}
        </Box>
      </Box>
      <CallToAction2
        text1="¿Eres músico?"
        text2="Conecta con melómanos como tú y forma tu propia banda"
        to="user/:username"
        title="Crear perfil"
      />
    </Box>
  );
};
