// Nota importante: Las imagenes son ejemplos, debemos vincularlas con la base de datos para que el usuario pueda añadir sus propias imagenes
//Imports React
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

//Imports material
import { Box } from "@mui/system";
import { CardProfile } from "../component/card/CardProfile.jsx";
import { Button, Typography, useTheme } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

//Import Components
import { AsideBands } from "../component/profile/AsideBands.jsx";
import { EditInfo } from "../component/profile/EditInfo.jsx";
import { SpotifyProfile } from "../component/profile/SpotifyProfile.jsx";
import { MyInstruments } from "../component/profile/MyInstruments.jsx";
import { StyleAndMusicalCareer } from "../component/profile/StyleAndMusicalCareer.jsx";
import { Influences } from "../component/profile/Influences.jsx";
import { Equipment } from "../component/profile/Equipment.jsx";
import { Singer } from "../component/typeofuser/Singer.jsx";
//Function
  
export const Profile = () => {
    const theme = useTheme()
    const { actions, store } = useContext(Context);
    const params = useParams();
    const username = params.username;
    const currentUser = localStorage.getItem("current_user");


    useEffect(() => {
      actions.fetchUser(username);
    }, []);


    return (
      <>
        <Box className="position-relative position-relative-example headerProfile">
          <Box className=" d-flex flex-column justify-content-center align-items-end container nameheader">
            <Box>
              <Typography variant="h1">
                {store.resultados.first_name} {store.resultados.last_name}
              </Typography>
            </Box>
            <Box>
              <Typography className="text-white">Localidad: Sevilla</Typography>
            </Box>
          </Box>
        </Box>

        {/* Contenedor de contenido */}
        <Box className="cardandreproductor container ">

          {/* Left side  */}

          <Box className="leftside">
            <Box className="cardprofile">
              {/* Import Card Profile */}
              <CardProfile
                first_name={store.resultados.first_name}
                last_name={store.resultados.last_name}
              />
            </Box>
            {/* Import aside Bands */}
            <AsideBands />
          </Box>

          {/* Right side */}

          <Box className="rightside mt-5 p-4" sx={{
              backgroundColor: theme.palette.background.card
          }}>

            {/* Condicional ? Spotify */}
            {1 + 1 === 2 ? <SpotifyProfile currentUser={currentUser} userName={username}/> : null}

            {/* Condicional Mis instrumentos */}
            {1 + 1 === 2 ? <MyInstruments currentUser={currentUser} userName={username}/> : null}
            
            {/* Condicional Carrera musical y estilo */}
            {1 + 1 === 2 ? <StyleAndMusicalCareer currentUser={currentUser} userName={username}/> : null}

            {/* Condicional Mis influencias */}
            {1 + 1 === 2 ? <Influences currentUser={currentUser} userName={username}/> : null}

            {/* Condicional Mi equipo */}
            {1 + 1 === 2 ? <Equipment currentUser={currentUser} userName={username}/> : null}
          </Box>

        </Box>
      </>
    );
  };
