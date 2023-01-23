import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { CardLocal } from "../component/LocalesCard/CardLocal.jsx";
import { CardLocalProfile } from "../component/card/CardLocalProfile.jsx";
import Grid from "@mui/material/Grid"; // Grid version 1
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2
import { Divider, Typography, useTheme } from "@mui/material";
import { locales } from "../mockingData";
import { useParams } from "react-router-dom";

export const LocalProfile = () => {

  const [aLocal, setALocal] = useState({})
  const params = useParams();

  useEffect(() => {
    console.log("hola");
    const fetchLocales = async () => {
      await fetch(`${process.env.BACKEND_URL}/api/localprofile/${params.id}`, {
        method: "GET",
        // headers: {
        //   Authorization: `Bearer ${store.token_local}`,
        // },
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((result) => {
          setALocal(result);
        });
    };
    fetchLocales();
  }, []);



  const theme = useTheme();
  return (
    <>
      <Box className="container-fluid profile-header">
        <img
          className="image-header"
          src={aLocal.local_img}
        />
      </Box>

      <Box className="container ">
        {/* <Grid container spacing={2}>
          <Grid xs={12} sm={3} className="container-card">
            <CardLocalProfile />
          </Grid>
          <Grid xs={12} sm={6} className="container-contenido" sx={{backgroundColor: theme.palette.background.card, margin:"2rem", padding:"1rem", marginTop:"3rem"}}>
            <Box>
              
            </Box>
          </Grid>
        </Grid> */}
        <div className="row">
          <div className="col-lg-4 container-card">
            <CardLocalProfile
              local_img={aLocal.local_img}
              name={aLocal.name}
              ubicacion_local={aLocal.ubicacion_local}
              city={aLocal.city}
              description={aLocal.description}
              // generosMusica={aLocal.generosMusica}
            />
          </div>
          <div className="col-lg-8 container-contenido">
            <Box
              className="contenido-localprofile"
              sx={{ backgroundColor: theme.palette.background.card }}
            >
              <Typography variant="h3">Nuestro estilo</Typography>
              <Divider />

              <Typography className="mt-3" variant="body1">
                Lorem Ipsum es simplemente el texto de relleno de las imprentas
                y archivos de texto. Lorem Ipsum ha sido el texto de relleno
                estándar de las industrias desde el año 1500, cuando un impresor
                N. del T. persona que se dedica a la imprenta desconocido usó
                una galería de textos y los mezcló de tal manera que logró hacer
                un libro de textos especimen. No sólo sobrevivió 500 años, sino
                que tambien ingresó como texto de relleno en documentos
                electrónicos, quedando esencialmente igual al original.
              </Typography>

              <Typography className="mt-5" variant="h3">
                Galería
              </Typography>
              <Divider />

              <Grid container spacing={2}>
                {locales[0].galeria?.map((element, index) => (
                  <Grid xs={12} sm={4} >
                      <img className="imagen-galeria" src={element} />
                  </Grid>
                ))}
              </Grid>

              {/* <div className="row">
                {locales[0].galeria?.map((element, index) => (
                  <div className="col-xs-12 col-md-4">
                    <img className="imagen-galeria" src={element} />
                  </div>
                ))}
              </div> */}
            </Box>
          </div>
        </div>
      </Box>
    </>
  );
};
