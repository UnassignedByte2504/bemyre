import {
  Box,
  CardContent,
  List,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

export const CardConcertInfo = ({
  fechaConcierto,
  horaConcierto,
  ubicacionConcierto,
  nombreArtistaConcierto,
}) => {
  return (
    <CardContent>
      <Typography variant="h5">
        <strong>{nombreArtistaConcierto}</strong>
      </Typography>

      <List>
        <ListItemText>{fechaConcierto}</ListItemText>
        <ListItemText>{horaConcierto}</ListItemText>
        <ListItemText>{ubicacionConcierto}</ListItemText>
      </List>
    </CardContent>
  );
};
