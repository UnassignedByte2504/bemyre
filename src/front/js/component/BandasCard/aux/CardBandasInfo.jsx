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
  integrante1,
  integrante2,
  integrante3,
  integrante4,
  integrante5,
  integrante6,
  integranteNuevo1,
  integranteNuevo2,
}) => {
  return (
    <CardContent>
      <Box sx={{ display: "inline" }}>
        <Typography variant="h4">
          <strong>
            {nombreArtistico} | {municipioDeResidencia}
          </strong>
        </Typography>

        <Typography variant="span">
          <strong>
            Somos: {integrante1}
            {integrante2}
            {integrante3}
            {integrante4}
            {integrante5}
            {integrante6}
          </strong>
        </Typography>
        <Typography variant="span">
          <strong>
            Estamos buscando un bajista y un soprano para lorem.....
          </strong>
        </Typography>
      </Box>
      <Divider></Divider>
      <FlexBetween>
        <Typography variant="h5">{integranteNuevo1}</Typography>
        <Button variant="contained">Aplicar</Button>
      </FlexBetween>
      <Divider></Divider>
      <FlexBetween>
        <Typography variant="h5">{integranteNuevo2}</Typography>
        <Button variant="contained">Aplicar</Button>
      </FlexBetween>
    </CardContent>
  );
};
