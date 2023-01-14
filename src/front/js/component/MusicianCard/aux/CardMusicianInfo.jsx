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
    <CardContent>
      {/* <Box sx={{ display: "inline" }}>
        <Typography variant="h5">
          <strong>
            {artistic_name} | {city}
          </strong>
        </Typography>
      </Box>
      <Typography variant="body1" gutterBottom sx={{ "margin-top": "5px" }}>
    
        {instruments?.map((element, index) => (
          <span
            Key={index}
            {instruments}
            
           
          ></span>
        ))}

      </Box>
      </Typography> */}
    </CardContent>
  );
};
