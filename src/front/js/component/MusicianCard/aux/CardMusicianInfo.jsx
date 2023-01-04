import {
  Box,
  CardContent,
  List,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

export const CardMusicianInfo = ({
  nombreArtistico,
  municipioDeResidencia,
  instrumentoPrincipal1,
  instrumentoPrincipal2,
  instrumentoPrincipal3,
}) => {
  let instrumentosPrincipales = {
    instrumentoPrincipal1: "Flauta",
    instrumentoPrincipal2: "Piano",
  };
  return (
    <CardContent>
      <Box sx={{ display: "inline" }}>
        <Typography variant="h5">
          <strong>
            {nombreArtistico} | {municipioDeResidencia}
          </strong>
        </Typography>
      </Box>
      <Typography variant="body1" gutterBottom sx={{ "margin-top": "5px" }}>
        <span
          className={
            instrumentosPrincipales.instrumentoPrincipal1 ? null : "d-none"
          }
        >{`${instrumentosPrincipales.instrumentoPrincipal1}`}</span>
        <span
          className={
            instrumentosPrincipales.instrumentoPrincipal2 ? null : "d-none"
          }
        >{`, ${instrumentosPrincipales.instrumentoPrincipal2}`}</span>
        <span
          className={
            instrumentosPrincipales.instrumentoPrincipal3 ? null : "d-none"
          }
        >{`, ${instrumentosPrincipales.instrumentoPrincipal3}`}</span>
      </Typography>
    </CardContent>
  );
};
