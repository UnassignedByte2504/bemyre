import React, { useEffect, useState } from "react";
// import "../../styles/locales.css";
import { CardLocal } from "../../component/LocalesCard/CardLocal.jsx";
import { Container } from "@mui/system";
import { CallToAction2 } from "../../component/CallToAction/CallToAction2.jsx";
import { Grid } from "@mui/material";
import { locales } from "../../mockingData.js";
import ExploreJumbotron from "../../component/jumbotronexplore/ExploreJumbotron.js";

export const LocalsExplorer = () => {
  return (
    <>
      <ExploreJumbotron />
      <Container className="mb-5">
        <Grid container spacing={2}>
          {locales?.map((element, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <CardLocal
                local_img={element.local_img}
                name={element.name}
                city={element.city}
                ubicacion_local={element.ubicacion_local}
                description={element.description}
                generosMusica={element.generosMusica}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};
