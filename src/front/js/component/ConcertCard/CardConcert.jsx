import React from "react";
import "../../../styles/cardconcert.css";
import { CardConcertFooter } from "./aux/CardConcertFooter.jsx";
import { CardConcertImg } from "./aux/CardConcertImg.jsx";
import { CardConcertInfo } from "./aux/CardConcertInfo.jsx";
import { Card } from "@mui/material";
import { useTheme, Box } from "@mui/material";

export const CardConcert = () => {
  const theme = useTheme();
  let generosMusica = {
    generoMusica1: "Techno",
  };
  return (
    <Box>
      <Card
        className="card-concert style-card"
        sx={{
          backgroundColor: theme.palette.background.card,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <CardConcertImg urlImg="https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29uY2VydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
        <CardConcertInfo
          fechaConcierto="Sábado 18 de febrero"
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
    </Box>
  );
};
