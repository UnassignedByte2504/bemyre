import React, { useEffect, useState } from "react";
import "../../styles/locales.css";
import { CardLocal } from "../component/LocalesCard/CardLocal.jsx";
import { Box, Container } from "@mui/system";
import { CallToAction1 } from "../component/CallToAction/CallToAction1.jsx";
import { Grid, Item } from "@mui/material";
import { locales } from "../mockingData";

export const Locales = () => {
  // const [locales, setLocales] = useState();

  // useEffect(() => {
  //   const options = {
  //     methods: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   };
  //   fetch(`${process.env.BACKEND_URL}/api/locales`, options)
  //     .then((response) => response.json())
  //     .then((result) => setLocales(result));
  // }, []);

  return (
    <>
      <CallToAction1 text1="¿Te gustaría tocar en un local?" />
      <Container className="mb-5">
        <Grid container spacing={3}>
          {locales?.map((element) => (
            <Grid item xs={4}>
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
            </Grid>
          ))}

          {/* <Grid item xs={4}>
            <CardLocal
              generoMusica1={local1.generosMusica.generoMusica1}
              generoMusica2={local1.generosMusica.generoMusica2}
              urlImg={local1.urlImg}
              nombreLocal={local1.nombreLocal}
              ubicacion={local1.ubicacion}
            />
          </Grid> */}

          {/* <Grid item xs={4}>
            <CardLocal />
          </Grid>
          <Grid item xs={4}>
            <CardLocal />
          </Grid>
          <Grid item xs={4}>
            <CardLocal />
          </Grid>
          <Grid item xs={4}>
            <CardLocal />
          </Grid> */}
        </Grid>
      </Container>
    </>
  );
};
