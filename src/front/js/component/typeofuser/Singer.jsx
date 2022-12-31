// Nota importante: Las imagenes son ejemplos, debemos vincularlas con la base de datos para que el usuario pueda añadir sus propias imagenes
//Imports React
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../../store/appContext";
//Imports material
import { Box } from "@mui/system";
import { Button, Typography, useTheme } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

//Import Components
import { AsideBands } from "../profile/AsideBands.jsx";
import { SpotifyProfile } from "../profile/SpotifyProfile.jsx";
import { MyInstruments } from "../profile/MyInstruments.jsx";
import { StyleAndMusicalCareer } from "../profile/StyleAndMusicalCareer.jsx";
import { Influences } from "../profile/Influences.jsx";
import { Equipment } from "../profile/Equipment.jsx";
import { CardProfile } from "../card/CardProfile.jsx";
import { EditInfo } from "../profile/EditInfo.jsx";


export const Singer = () =>{
    const theme = useTheme()
    const { actions, store } = useContext(Context);
    const params = useParams();

    return(
        <Box className="rightside mt-5 p-4" sx={{
            backgroundColor: theme.palette.background.card
        }}>

          {/* Condicional ? Spotify */}
          {1 + 1 === 2 ? <SpotifyProfile/> : null}

          {/* Condicional Mis instrumentos */}
          {1 + 1 === 2 ? <MyInstruments/> : null}
          
          {/* Condicional Carrera musical y estilo */}
          {1 + 1 === 2 ? <StyleAndMusicalCareer/> : null}

          {/* Condicional Mis influencias */}
          {1 + 1 === 2 ? <Influences/> : null}

          {/* Condicional Mi equipo */}
          {1 + 1 === 2 ? <Equipment/> : null}
        </Box>

    )
}