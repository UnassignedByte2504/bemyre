import React, { useEffect, useState } from "react";
import "../../styles/locales.css";
import { CardLocal } from "../component/LocalesCard/CardLocal.jsx";
import { Box, Container } from "@mui/system";
import { CallToAction } from "../component/CallToAction/CallToAction.jsx";
import { Grid, Item } from "@mui/material";

export const Locales = () => {
  let locales = [
    {
      generosMusica: {
        generoMusica1: "Jazz",
        generoMusica2: "Clasica",
      },
      urlImg:
        "https://images.unsplash.com/photo-1609234700463-60e479775df0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bG9jYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      nombreLocal: "Nombre local",
      ubicacion: "c/ Calle, Numero (Localidad)",
    },
    {
      generosMusica: {
        generoMusica1: "Pop",
        generoMusica2: "Rock",
      },
      urlImg:
        "https://images.unsplash.com/photo-1546622891-02c72c1537b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      nombreLocal: "Nombre local2",
      ubicacion: "c/ Calle2, Numero2 (Localidad2)",
    },
  ];

  // const [locales, setLocales] = useState("");

  // useEffect(() => {
  //   const options = {
  //     methods: "GET",
  //   };
  //   fetch(`${process.env.BACKEND_URL}/api/locales`, options)
  //     .then((response) => response.json())
  //     .then((result) => setLocales(result));
  // }, []);

  return (
    <>
      <CallToAction />
      <Container className="mb-5">
        <Grid container spacing={3}>
          {locales?.map((element) => (
            <Grid item xs={4}>
              <CardLocal
                generoMusica1={element.generosMusica.generoMusica1}
                generoMusica2={element.generosMusica.generoMusica2}
                urlImg={element.urlImg}
                nombreLocal={element.nombreLocal}
                ubicacion={element.elementubicacion}
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
