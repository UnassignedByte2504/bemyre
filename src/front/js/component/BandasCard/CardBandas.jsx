import React from "react";
import "../../../styles/cardbandas.css";
import { CardBandasFooter } from "./aux/CardBandasFooter.jsx";
import { CardBandasImg } from "./aux/CardBandasImg.jsx";
import { CardBandasInfo } from "./aux/CardBandasInfo.jsx";
import { Card } from "@mui/material";
import { useTheme } from "@mui/material";

export const CardBandas = () => {
  const theme = useTheme();

  let generosMusica = {
    generoMusica1: "Rock",
    generoMusica2: "Pop",
    generoMusica3: "Blues",
  };
  let integrantes = { integrante1: "Omar", integrante2: "Eduardo" };
  let integrantesNuevos = {
    integranteNuevo1: "Bajo",
    integranteNuevo2: "Soprano",
  };
  return (
    <>
      <Card
        className="card-bandas"
        sx={{ backgroundColor: theme.palette.background.card }}
      >
        <CardBandasImg urlImg="https://images.unsplash.com/photo-1618673747378-7e0d3561371a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80" />
        <CardBandasInfo
          nombreArtistico="Nombre Artístico"
          municipioDeResidencia="Málaga"
          //   integrante1={integrantes.integrante1 ? integrantes.integrante1 : null}
          //   integrante2={integrantes.integrante2 ? integrantes.integrante2 : null}
          //   integrante3={integrantes.integrante3 ? integrantes.integrante3 : null}
          //   integrante4={integrantes.integrante4 ? integrantes.integrante4 : null}
          //   integrante5={integrantes.integrante5 ? integrantes.integrante5 : null}
          //   integrante6={integrantes.integrante6 ? integrantes.integrante6 : null}
          //   integranteNuevo1={
          //     integrantesNuevos.integranteNuevo1
          //       ? integrantesNuevos.integranteNuevo1
          //       : null
          //   }
          //   integranteNuevo2={
          //     integrantesNuevos.integranteNuevo2
          //       ? integrantesNuevos.integranteNuevo2
          //       : null
          //   }
          integrante1={integrantes.integrante1}
          integrante2={integrantes.integrante2}
          integrante3={integrantes.integrante3}
          integrante4={integrantes.integrante4}
          integrante5={integrantes.integrante5}
          integrante6={integrantes.integrante6}
          integranteNuevo1={integrantesNuevos.integranteNuevo1}
          integranteNuevo2={integrantesNuevos.integranteNuevo2}
        />
        <CardBandasFooter
          //   generoMusica1={
          //     generosMusica.generoMusica1 ? generosMusica.generoMusica1 : null
          //   }
          //   generoMusica2={
          //     generosMusica.generoMusica2 ? generosMusica.generoMusica2 : null
          //   }
          //   generoMusica3={
          //     generosMusica.generoMusica3 ? generosMusica.generoMusica3 : null
          //   }
          //   generoMusica4={
          //     generosMusica.generoMusica4 ? generosMusica.generoMusica4 : null
          //   }
          //   generoMusica5={
          //     generosMusica.generoMusica5 ? generosMusica.generoMusica5 : null
          //   }
          //   generoMusica6={
          //     generosMusica.generoMusica6 ? generosMusica.generoMusica6 : null
          //   }
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
