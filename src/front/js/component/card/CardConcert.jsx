import { Box } from "@mui/material";
import React from "react";
import "../../../styles/cardconcert.css";
import { CardConcertFooter } from "./CardConcertFooter.jsx";
import { CardConcertImg } from "./CardConcertImg.jsx";
import { CardConcertInfo } from "./CardConcertInfo.jsx";


export const CardConcert = () => {
  return (
    <>
      <Box className="card card-concert mx-5">
        <CardConcertImg urlImg="https://images.unsplash.com/photo-1619961602105-16fa2a5465c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bXVzaWNpYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
        <CardConcertInfo
          fechaConcierto="31/12/2022"
          horaConcierto="22h"
          ubicacionConcierto="C/Capuchinos,72 (Málaga)"
          nombreArtistaConcierto="Black Bone Tango"
        />
        <CardConcertFooter
          generoMusica1="Rock"
          generoMusica2="Pop"
          generoMusica3="Jazz"
        />
      </Box>
    </>
  );
};
