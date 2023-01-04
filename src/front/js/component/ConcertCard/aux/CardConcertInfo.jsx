import {
  Box,
  CardContent,
  List,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import FlexBetween from "../../styledcomponents/FlexBetween.jsx";

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
        <FlexBetween>
          <ListItemText>
            {fechaConcierto} | {horaConcierto}
          </ListItemText>
        </FlexBetween>
        <ListItemText>{ubicacionConcierto}</ListItemText>
      </List>
    </CardContent>
  );
};
