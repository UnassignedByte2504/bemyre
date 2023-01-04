import React from "react";
import "../../../styles/cardmusician.css";
import { CardMusicianFooter } from "./aux/CardMusicianFooter.jsx";
import { CardMusicianImg } from "./aux/CardMusicianImg.jsx";
import { CardMusicianInfo } from "./aux/CardMusicianInfo.jsx";
import { Card } from "@mui/material";
import { useTheme, Box } from "@mui/material";

export const CardMusician = () => {
  const theme = useTheme();
  let generosMusica = {
    generoMusica1: "Jazz",
    generoMusica2: "Clasica",
  };
  return (
    <Box>
      <Card
        className="card-musician style-card"
        sx={{
          backgroundColor: theme.palette.background.card,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <CardMusicianImg urlImg="https://images.unsplash.com/photo-1618673747378-7e0d3561371a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80" />
        <CardMusicianInfo
          nombreArtistico="Nombre Artístico"
          instrumentosPrincipales="Guitarrista y compositor"
          municipioDeResidencia="Málaga"
        />
        <CardMusicianFooter
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
