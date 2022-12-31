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
        <Typography variant="h4">
          <strong>
            {nombreArtistico} | {municipioDeResidencia}
          </strong>
        </Typography>
      </Box>
      <Typography variant="h6">
        <strong>Mis instrumentos principales:</strong>
      </Typography>
      <Typography variant="p">
        {instrumentosPrincipales.instrumentoPrincipal1}
        {instrumentosPrincipales.instrumentoPrincipal2}
        {instrumentosPrincipales.instrumentoPrincipal3}
      </Typography>
    </CardContent>
  );
};
