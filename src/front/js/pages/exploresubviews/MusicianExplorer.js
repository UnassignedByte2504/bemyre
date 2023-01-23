import React, { useEffect, useState } from "react";
import { CardMusician } from "../../component/MusicianCard/CardMusician.jsx";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";
import { musicos } from "../../mockingData.js";
import ExploreJumbotron from "../../component/jumbotronexplore/ExploreJumbotron.js";
export const MusicianExplorer = () => {
  return (
    <>
      <ExploreJumbotron />
      <Container className="mb-5">
        <Grid container spacing={2}>
          {musicos?.map((element, index) => (
            <Grid item xs={12} sm={6} md={6} lg={3} key={index}>
              <CardMusician
                musico_img={element.musico_img}
                user_name={element.user_name}
                city={element.city}
                artistic_name={element.artistic_name}
                description={element.description}
                instruments={element.instruments}
                generosMusica={element.generosMusica}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};
