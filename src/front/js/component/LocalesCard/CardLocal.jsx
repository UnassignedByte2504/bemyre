import React from "react";
import "../../../styles/cardlocal.css";
import { CardLocalFooter } from "./aux/CardLocalFooter.jsx";
import { CardLocalImg } from "./aux/CardLocalImg.jsx";
import { CardLocalInfo } from "./aux/CardLocalInfo.jsx";
import { Card } from "@mui/material";
import { useTheme, Box } from "@mui/material";

export const CardLocal = ({
  generoMusica1,
  generoMusica2,
  generoMusica3,
  generoMusica4,
  generoMusica5,
  generoMusica6,
  urlImg,
  nombreLocal,
  ubicacion,
}) => {
  const theme = useTheme();

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
        <CardLocalImg urlImg={urlImg} />
        <CardLocalInfo nombreLocal={nombreLocal} ubicacion={ubicacion} />
        <CardLocalFooter
          generoMusica1={generoMusica1}
          generoMusica2={generoMusica2}
          generoMusica3={generoMusica3}
          generoMusica4={generoMusica4}
          generoMusica5={generoMusica5}
          generoMusica6={generoMusica6}
        />
      </Card>
    </Box>
  );
};
