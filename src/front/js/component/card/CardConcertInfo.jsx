import { Box, Typography } from "@mui/material";
import React from "react";

export const CardConcertInfo = ({
  fechaConcierto,
  horaConcierto,
  ubicacionConcierto,
  nombreArtistaConcierto,
}) => {
  return (
    <Box className="card-body">
      <Typography variant="h5" className="card-title text-secondary">
        <strong>{nombreArtistaConcierto}</strong>
      </Typography>

      <ul className="list-group list-group-flush">
        <li className="list-group-item">{fechaConcierto}</li>
        <li className="list-group-item">{horaConcierto}</li>
        <li className="list-group-item">{ubicacionConcierto}</li>
      </ul>
    </Box>
  );
};
