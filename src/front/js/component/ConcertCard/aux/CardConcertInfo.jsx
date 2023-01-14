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
  date,
  hour,
  ubicacion_event,
  name,
  city,
  description, 
}) => {
  return (
    <CardContent>
      <Typography variant="h5">
        <strong>{name} | {city}</strong>
      </Typography>

      <List>
        <FlexBetween>
          <ListItemText>
            {date} | {hour}
          </ListItemText>
        </FlexBetween>
        <ListItemText>{ubicacion_event}</ListItemText>
      </List>
    </CardContent>
  );
};
