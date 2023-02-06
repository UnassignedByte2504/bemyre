import React, { useEffect, useRef, useState, useContext } from "react";
import { CardBandas } from "../component/BandasCard/CardBandas.jsx";
import { Container, Box } from "@mui/system";
import { CallToAction2 } from "../component/CallToAction/CallToAction2.jsx";
import { Grid, Typography } from "@mui/material";
// import { bandas } from "../mockingData";
import { Context } from "../store/appContext";

export const Bandas = () => {
  const { actions, store } = useContext(Context);

  const scrolltop = useRef();
  useEffect(() => {
    scrolltop.current?.scrollIntoView({ behavior: "smooth" });
    actions.fetchBands();
    // actions.fetchBandsMusicGenre()
  }, []);
  return (
    <Box
      sx={{
        minHeight: "100vh",
      }}
    >
      <div ref={scrolltop} />
      <CallToAction2
        text1="¿Te gustaría formar tu propia banda?"
        text2="Crea tu propio anuncio para que otros músicos se unan a tu banda"
        title="Crear banda"
        to="/home"
      />
      <Container className="mb-5">
        <Typography className="mb-5 text-center" variant="h2">
          Bandas de música cerca de ti
        </Typography>
        <Grid container spacing={2}>
          {console.log("????????", store.bandas)}
          {store.bandas?.map((element, index) => (
            <Grid item xs={12} sm={12} md={12} lg={6} key={element.id}>
              <CardBandas
                banda_img={element.band_img}
                name={element.name}
                // generosMusica={element.band_music_genres}
                city={element.city}
                description={element.description}
                // integrantes={element.band_members}
                // integrantes_nuevos={element.band_musical_intrument}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
