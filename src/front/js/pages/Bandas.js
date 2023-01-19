import React, { useEffect, useRef, useState } from "react";
import { CardBandas } from "../component/BandasCard/CardBandas.jsx";
import { Container, Box } from "@mui/system";
import { CallToAction2 } from "../component/CallToAction/CallToAction2.jsx";
import { Grid } from "@mui/material";
import { bandas } from "../mockingData";

export const Bandas = () => {
  const scrolltop = useRef()
  useEffect(()=>{
    scrolltop.current?.scrollIntoView({behavior: 'smooth'})
  },[])
  return (
    <Box sx={{
      minHeight:"100vh"
    }}>
      <div ref={scrolltop}/>
      <CallToAction2
        text1="¿Te gustaría formar tu propia banda?"
        text2="Crea tu propio anuncio para que otros músicos se unan a tu banda"
        title="Crear banda"
        to="/home"
      />
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
