import {
  Box,
  CardContent,
  Divider,
  List,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import FlexBetween from "../../../component/styledcomponents/FlexBetween.jsx";
import LinkButton from "../../buttons/LinkButton.jsx";
import { Button } from "@mui/material";

export const CardBandasInfo = ({
  nombreArtistico,
  municipioDeResidencia,
  nombreArtisticointegrante1,
  nombreArtisticointegrante2,
  nombreArtisticointegrante3,
  nombreArtisticointegrante4,
  nombreArtisticointegrante5,
  nombreArtisticointegrante6,
  instrumento1,
  instrumento2,
  instrumento3,
  instrumento4,
  instrumento5,
  instrumento6,
  integranteNuevo1,
  integranteNuevo2,
}) => {
  return (
    <CardContent>
      <Box sx={{ display: "inline" }}>
        <Typography variant="h5">
          <strong>
            {nombreArtistico} | {municipioDeResidencia}
          </strong>
        </Typography>

        <Typography variant="body1">
          <span
            className={nombreArtisticointegrante1 ? null : "d-none"}
          >{`Somos: ${nombreArtisticointegrante1} (${instrumento1})`}</span>

          <span
            className={nombreArtisticointegrante2 ? null : "d-none"}
          >{`, ${nombreArtisticointegrante2} (${instrumento2})`}</span>
          <span
            className={nombreArtisticointegrante3 ? null : "d-none"}
          >{`, ${nombreArtisticointegrante3} (${instrumento3})`}</span>
          <span
            className={nombreArtisticointegrante4 ? null : "d-none"}
          >{`, ${nombreArtisticointegrante4} (${instrumento4})`}</span>
          <span
            className={nombreArtisticointegrante5 ? null : "d-none"}
          >{`, ${nombreArtisticointegrante5} (${instrumento5})`}</span>
          <span
            className={nombreArtisticointegrante6 ? null : "d-none"}
          >{`, ${nombreArtisticointegrante6} (${instrumento6})`}</span>
        </Typography>
        <Typography variant="body1">
          <span>
            Estamos buscando un bajista y un soprano Lorem Ipsum ha sido el
            texto de relleno estándar de las industrias desde el año...
          </span>
        </Typography>
      </Box>
      <Divider className="mb-2 mt-3"></Divider>
      <FlexBetween className="mx-5">
        <span sx={{ marginLeft: 0 }} variant="body1">
          {integranteNuevo1}
        </span>
        <Button variant="contained">Aplicar</Button>
      </FlexBetween>
      <Divider className="mb-2 mt-3"></Divider>
      <FlexBetween className="mx-5">
        <span sx={{ marginLeft: 0 }} variant="body1">
          {integranteNuevo2}
        </span>
        <Button variant="contained">Aplicar</Button>
      </FlexBetween>
    </CardContent>
  );
};
