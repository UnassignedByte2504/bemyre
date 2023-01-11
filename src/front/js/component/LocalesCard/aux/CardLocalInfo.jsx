import {
  Box,
  CardContent,
  List,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

export const CardLocalInfo = ({ name, ubicacion_local, city, description }) => {
  return (
    <CardContent>
      <Box>
        <Typography variant="h5">
          <strong>
            {name} | {city}
          </strong>
        </Typography>
      </Box>
      <Box>
        <Typography variant="body1">
          <strong>{ubicacion_local}</strong>
        </Typography>
      </Box>
      <Typography variant="body1">{description}</Typography>
    </CardContent>
  );
};
