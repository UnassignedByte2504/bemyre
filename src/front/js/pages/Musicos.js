import React, { useEffect, useState } from "react";
import { CardMusician } from "../component/MusicianCard/CardMusician.jsx";
import { Container } from "@mui/system";
import { CallToAction2 } from "../component/CallToAction/CallToAction2.jsx";
import { Grid } from "@mui/material";
import { musicos } from "../mockingData";

export const Musicos = () => {


  return (
    <>
      <CallToAction2 text1="¿Te gustaría tocar en un local?" text2="Contacta con locales que ofrecen música en vivo" title="Locales cerca de mí" to="/locales" />
      <Container className="mb-5">
        <Grid container spacing={2} >
          {musicos?.map((element, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
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