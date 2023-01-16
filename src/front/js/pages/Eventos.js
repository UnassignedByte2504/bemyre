import React, { useEffect, useState } from "react";
import { CardConcert } from "../component/ConcertCard/CardConcert.jsx";
import { Container } from "@mui/system";
import { CallToAction2 } from "../component/CallToAction/CallToAction2.jsx";
import { Grid } from "@mui/material";
import { eventos } from "../mockingData";

export const Eventos = () => {


  return (
    <>
      <CallToAction2 text1="¿Eres músico?" text2="Contacta con locales para tocar en vivo" title="Locales cerca de mí" to="/locales" />
      <Container className="mb-5">
        <Grid container spacing={2} >
          {eventos?.map((element, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <CardConcert
                event_img={element.event_img}
                name={element.name}
                city={element.city}
                ubicacion_event={element.ubicacion_event}
                description={element.description}
                date={element.date}
                hour={element.hour}
                generosMusica={element.generosMusica}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
  
    </>
  );
};

