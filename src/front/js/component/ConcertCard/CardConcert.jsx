import { Box } from "@mui/material";
import React from "react";
import "../../../styles/cardconcert.css";
import { CardConcertFooter } from "./aux/CardConcertFooter.jsx";
import { CardConcertImg } from "./aux/CardConcertImg.jsx";
import { CardConcertInfo } from "./aux/CardConcertInfo.jsx";
import { Card } from "@mui/material";
import { useTheme } from "@mui/material";

export const CardConcert = () => {
  const theme = useTheme();
  let generosMusica = {
    generoMusica1: "Techno",
  };
  return (
    <>
      <Card
        className="card-concert"
        sx={{ backgroundColor: theme.palette.background.card }}
      >
        <CardConcertImg urlImg="https://images.unsplash.com/photo-1619961602105-16fa2a5465c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bXVzaWNpYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
        <CardConcertInfo
          fechaConcierto="31/12/2022"
          horaConcierto="22h"
          ubicacionConcierto="C/Capuchinos,72 (Málaga)"
          nombreArtistaConcierto="Black Bone Tango"
        />
        <CardConcertFooter
          generoMusica1={generosMusica.generoMusica1}
          generoMusica2={generosMusica.generoMusica2}
          generoMusica3={generosMusica.generoMusica3}
          generoMusica4={generosMusica.generoMusica4}
          generoMusica5={generosMusica.generoMusica5}
          generoMusica6={generosMusica.generoMusica6}
        />
      </Card>
    </>
  );
};
