import React from "react";
import "../../../styles/cardbandas.css";
import { CardBandasFooter } from "./aux/CardBandasFooter.jsx";
import { CardBandasImg } from "./aux/CardBandasImg.jsx";
import { CardBandasInfo } from "./aux/CardBandasInfo.jsx";
import { Card } from "@mui/material";
import { useTheme, Box } from "@mui/material";


export const CardBandas = ({
  banda_img,
  name,
  generosMusica,
  city,
  ubicacion_local,
  description,
  integrantes,
  integrantes_nuevos,
  Key
}) => {
  const theme = useTheme();

  return (
    <Box key={Key}>
      <Card
        className="card-bandas style-card"
        sx={{
          backgroundColor: theme.palette.background.card,
          display: "flex",
          boxSizing: "content-box",
        }}
      >
        <CardBandasImg banda_img={banda_img} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <CardBandasInfo
          Key={Key}
            name={name}
            city={city}
            ubicacion_local={ubicacion_local}
            integrantes={integrantes}
            integrantes_nuevos={integrantes_nuevos}
            description={description}


          />
          <CardBandasFooter
            generosMusica={generosMusica}
            Key={Key}
          />
        </Box>
      </Card>
    </Box>
  );
};
