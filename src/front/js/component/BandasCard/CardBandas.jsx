import React from "react";
import "../../../styles/cardbandas.css";
import { CardBandasFooter } from "./aux/CardBandasFooter.jsx";
import { CardBandasImg } from "./aux/CardBandasImg.jsx";
import { CardBandasInfo } from "./aux/CardBandasInfo.jsx";
import { Card } from "@mui/material";
import { useTheme, Box } from "@mui/material";
import CardContent from "@mui/material/CardContent";

export const CardBandas = ({
  banda_img,
  name,
  generosMusica,
  city,
  ubicacion_local,
  description,
  integrantes,
  integrantes_nuevos,
}) => {
  const theme = useTheme();

  // let generosMusica = {
  //   generoMusica1: "Rock",
  //   generoMusica2: "Pop",
  //   generoMusica3: "Blues",
  // };
  // let integrantes = {
  //   integrante1: {
  //     nombreArtisticointegrante1: "Omar",
  //     instrumento1: "Guitarra",
  //   },
  //   integrante2: {
  //     nombreArtisticointegrante2: "Eduardo",
  //     instrumento2: "Batería",
  //   },
  // };
  // let integrantesNuevos = {
  //   integranteNuevo1: "Bajo",
  //   integranteNuevo2: "Soprano",
  // };

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
        <CardBandasImg banda_img={banda_img} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <CardBandasInfo
            name={name}
            city={city}
            // {integrantes.map((element) => )}

            // integrante_name={integrantes.integrante_name}
            // integrante_instrument={integrantes.integrante_instrument}
            ubicacion_local={ubicacion_local}
            integrantes={integrantes}
            integrantes_nuevos={integrantes_nuevos}
            description={description}
            // ------------
            // instrumento1={integrantes.integrante1?.instrumento1}
            // nombreArtisticointegrante2={
            //   integrantes.integrante2?.nombreArtisticointegrante2
            // }
            // instrumento2={integrantes.integrante2?.instrumento2}
            // nombreArtisticointegrante3={
            //   integrantes.integrante3?.nombreArtisticointegrante3
            // }
            // instrumento3={integrantes.integrante3?.instrumento3}
            // nombreArtisticointegrante4={
            //   integrantes.integrante4?.nombreArtisticointegrante4
            // }
            // instrumento4={integrantes.integrante4?.instrumento4}
            // nombreArtisticointegrante5={
            //   integrantes.integrante5?.nombreArtisticointegrante5
            // }
            // instrumento5={integrantes.integrante5?.instrumento5}
            // nombreArtisticointegrante6={
            //   integrantes.integrante6?.nombreArtisticointegrante6
            // }
            // instrumento6={integrantes.integrante6?.instrumento6}
            // integranteNuevo1={integrantesNuevos.integranteNuevo1}
            // integranteNuevo2={integrantesNuevos.integranteNuevo2}
          />
          <CardBandasFooter
            generosMusica={generosMusica}
            // generoMusica1={generosMusica.generoMusica1}
            // generoMusica2={generosMusica.generoMusica2}
            // generoMusica3={generosMusica.generoMusica3}
            // generoMusica4={generosMusica.generoMusica4}
            // generoMusica5={generosMusica.generoMusica5}
            // generoMusica6={generosMusica.generoMusica6}
          />
        </Box>
      </Card>
    </Box>
  );
};
