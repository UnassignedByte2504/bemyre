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
  // nombreArtistico,
  // municipioDeResidencia,
  // nombreArtisticointegrante1,
  // nombreArtisticointegrante2,
  // nombreArtisticointegrante3,
  // nombreArtisticointegrante4,
  // nombreArtisticointegrante5,
  // nombreArtisticointegrante6,
  // instrumento1,
  // instrumento2,
  // instrumento3,
  // instrumento4,
  // instrumento5,
  // instrumento6,
  // integranteNuevo1,
  // integranteNuevo2,
  name,
  city,
  integrantes,
  integrantes_nuevos,
  description,
}) => {
  console.log(integrantes);
  return (
    <CardContent>
      <Box sx={{ display: "inline" }}>
        <Typography variant="h5">
          <strong>
            {name} | {city}
          </strong>
        </Typography>

        <Typography variant="body1">
          Somos
          {integrantes?.map((element) => (
            <span>{`, ${element.integrante_name}, (${element.integrante_instrument})`}</span>
          ))}
          {/* Somos:
          {integrantes?.map((element, i) => (
            <span>{` ${element.integrante_name[i]}, ${element.integrante_instrument[i]}`}</span>
          ))} */}
          {/* -------------------- */}
          {/* {integrantes?.map((element) => (
            <span>{`Somos: ${element.integrante_name[1]} (${element.integrante_instrument[1]})`}</span>
          ))} */}
          {/* element.integrante_name.map????????? */}
        </Typography>
        <Typography variant="body1">
          <span>{description}</span>
        </Typography>
      </Box>
      {integrantes_nuevos.map((element) => (
        <>
          <Divider className="mb-2 mt-3"></Divider>
          <FlexBetween className="mx-5">
            <span sx={{ marginLeft: 0 }} variant="body1">
              {element.integrante_instrument}
            </span>
            <Button variant="contained">Aplicar</Button>
          </FlexBetween>
        </>
      ))}
      {/* <Divider className="mb-2 mt-3"></Divider>
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
      </FlexBetween> */}
    </CardContent>
  );
};
