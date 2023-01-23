import React, { useEffect, useState } from "react";
import { CardConcert } from "../../component/ConcertCard/CardConcert.jsx";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";
import { eventos } from "../../mockingData";
import ExploreJumbotron from "../../component/jumbotronexplore/ExploreJumbotron.js";

export const EventsExplorer = () => {
  return (
    <>
      <ExploreJumbotron />
      <Container className="mb-5">
        <Grid container spacing={2}>
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
