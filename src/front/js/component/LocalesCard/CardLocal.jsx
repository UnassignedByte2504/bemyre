import React from "react";
import "../../../styles/cardlocal.css";
import { CardLocalFooter } from "./aux/CardLocalFooter.jsx";
import { CardLocalImg } from "./aux/CardLocalImg.jsx";
import { CardLocalInfo } from "./aux/CardLocalInfo.jsx";
import { Card } from "@mui/material";
import { useTheme, Box } from "@mui/material";

export const CardLocal = () => {
  const theme = useTheme();
  let generosMusica = {
    generoMusica1: "Jazz",
    generoMusica2: "Clasica",
  };
  return (
    <Box>
      <Card
        className="card-local style-card"
        sx={{
          backgroundColor: theme.palette.background.card,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <CardLocalImg urlImg="https://images.unsplash.com/photo-1609234700463-60e479775df0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bG9jYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
        <CardLocalInfo
          nombreLocal="Nombre"
          ubicacion="c/ Calle, Numero (Localidad)"
        />
        <CardLocalFooter
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
