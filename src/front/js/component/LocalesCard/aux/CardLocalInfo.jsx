import {
  Box,
  CardContent,
  List,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

export const CardLocalInfo = ({ nombreLocal, ubicacion }) => {
  return (
    <CardContent>
      <Box>
        <Typography variant="h4">
          <strong>{nombreLocal}</strong>
        </Typography>
      </Box>
      <Box>
        <Typography variant="h5">
          <strong>{ubicacion}</strong>
        </Typography>
      </Box>
      <Typography variant="span">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur
      </Typography>
    </CardContent>
  );
};
