import {
  Box,
  CardContent,
  List,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

export const CardMusicianInfo = ({

  user_name,
  city,
  artistic_name,
  description,
  instruments,  
  
}) => {

  return (
    <>
    <CardContent>
      
      <Box sx={{ display: "inline" }}>
        <Typography variant="h5">
          <strong>
            {artistic_name} | {city}
          </strong>
        </Typography>
      </Box>
      <Typography variant="body1">Mis instrumentos {instruments?.map((element, index) => (
          <span>{` ,${element}`}</span>
        ))}

      
      </Typography>
      
    </CardContent>
    </>
  );
};
