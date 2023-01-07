import React from "react";
import "../../../styles/cardbandas.css";
import { CardBandasFooter } from "./aux/CardBandasFooter.jsx";
import { CardBandasImg } from "./aux/CardBandasImg.jsx";
import { CardBandasInfo } from "./aux/CardBandasInfo.jsx";
import { Card } from "@mui/material";
import { useTheme, Box } from "@mui/material";
import CardContent from "@mui/material/CardContent";

export const CardBandas = () => {
  const theme = useTheme();

  let generosMusica = {
    generoMusica1: "Rock",
    generoMusica2: "Pop",
    generoMusica3: "Blues",
  };
  let integrantes = {
    integrante1: {
      nombreArtisticointegrante1: "Omar",
      instrumento1: "Guitarra",
    },
    integrante2: {
      nombreArtisticointegrante2: "Eduardo",
      instrumento2: "Batería",
    },
  };
  let integrantesNuevos = {
    integranteNuevo1: "Bajo",
    integranteNuevo2: "Soprano",
  };
  return (
    <Box>
      <Card
        className="card-bandas style-card"
        sx={{
          backgroundColor: theme.palette.background.card,
          display: "flex",
          boxSizing: "content-box",
        }}
      >
        <CardBandasImg urlImg="https://images.unsplash.com/photo-1567361672830-f7aa558ec4e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <CardBandasInfo
            nombreArtistico="Nombre del grupo"
            municipioDeResidencia="Málaga"
            nombreArtisticointegrante1={
              integrantes.integrante1?.nombreArtisticointegrante1
            }
            instrumento1={integrantes.integrante1?.instrumento1}
            nombreArtisticointegrante2={
              integrantes.integrante2?.nombreArtisticointegrante2
            }
            instrumento2={integrantes.integrante2?.instrumento2}
            nombreArtisticointegrante3={
              integrantes.integrante3?.nombreArtisticointegrante3
            }
            instrumento3={integrantes.integrante3?.instrumento3}
            nombreArtisticointegrante4={
              integrantes.integrante4?.nombreArtisticointegrante4
            }
            instrumento4={integrantes.integrante4?.instrumento4}
            nombreArtisticointegrante5={
              integrantes.integrante5?.nombreArtisticointegrante5
            }
            instrumento5={integrantes.integrante5?.instrumento5}
            nombreArtisticointegrante6={
              integrantes.integrante6?.nombreArtisticointegrante6
            }
            instrumento6={integrantes.integrante6?.instrumento6}
            integranteNuevo1={integrantesNuevos.integranteNuevo1}
            integranteNuevo2={integrantesNuevos.integranteNuevo2}
          />
          <CardBandasFooter
            generoMusica1={generosMusica.generoMusica1}
            generoMusica2={generosMusica.generoMusica2}
            generoMusica3={generosMusica.generoMusica3}
            generoMusica4={generosMusica.generoMusica4}
            generoMusica5={generosMusica.generoMusica5}
            generoMusica6={generosMusica.generoMusica6}
          />
        </Box>
      </Card>
    </Box>
  );
};
