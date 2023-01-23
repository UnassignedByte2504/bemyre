import React, { useEffect, useState, useRef } from "react";
import { CardBandas } from "../../component/BandasCard/CardBandas.jsx";
import { Container, Box } from "@mui/system";
import { Grid } from "@mui/material";
import { bandas } from "../../mockingData";
import ExploreJumbotron from "../../component/jumbotronexplore/ExploreJumbotron.js";
import { useParams } from "react-router-dom";

export const BandsExplorer = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
      }}
    >
      <ExploreJumbotron />
      <Container className="mb-5">
        <Grid container spacing={2}>
          {bandas?.map((element, index) => (
            <Grid item xs={12} sm={12} md={12} lg={6} key={index}>
              <CardBandas
                banda_img={element.banda_img}
                name={element.name}
                generosMusica={element.generosMusica}
                city={element.city}
                ubicacion_local={element.ubicacion_local}
                description={element.description}
                integrantes={element.integrantes}
                integrantes_nuevos={element.integrantes_nuevos}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
