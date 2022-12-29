import React from "react";
import "../../../styles/cardlocal.css";
import { CardLocalFooter } from "./aux/CardLocalFooter.jsx";
import { CardLocalImg } from "./aux/CardLocalImg.jsx";
import { CardLocalInfo } from "./aux/CardLocalInfo.jsx";
import { Card } from "@mui/material";
import { useTheme } from "@mui/material";

export const CardLocal = () => {
  const theme = useTheme();
  let generosMusica = {
    generoMusica1: "Jazz",
    generoMusica2: "Clasica",
  };
  return (
    <>
      <Card
        className="card-local"
        sx={{ backgroundColor: theme.palette.background.card }}
      >
        <CardLocalImg urlImg="https://images.unsplash.com/photo-1618673747378-7e0d3561371a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80" />
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
    </>
  );
};
