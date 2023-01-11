import React, { useEffect, useState } from "react";
import { CardBandas } from "../component/BandasCard/CardBandas.jsx";
import { Container, Box } from "@mui/system";
import { CallToAction2 } from "../component/CallToAction/CallToAction2.jsx";
import { Grid } from "@mui/material";
import { bandas } from "../mockingData";

export const Bandas = () => {
  return (
    <>
      <CallToAction2
        text1="¿Te gustaría formar tu propia banda?"
        text2="Crea tu propio anuncio para que otros músicos se unan a tu banda"
        title="Crear banda"
        to="/home"
      />
      <Box className="mb-5" sx={{ marginX: "16rem" }}>
        <Grid
          spacing={2}
          // container
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "2rem",
            // justifyContent: "center",
          }}
        >
          {bandas.map((element, index) => (
            <Grid item xs={6} key={index}>
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
      </Box>
    </>
  );
};
