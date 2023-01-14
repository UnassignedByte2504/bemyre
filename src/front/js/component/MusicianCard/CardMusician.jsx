import React from "react";
import "../../../styles/cardmusician.css";
import { CardMusicianFooter } from "./aux/CardMusicianFooter.jsx";
import { CardMusicianImg } from "./aux/CardMusicianImg.jsx";
import { CardMusicianInfo } from "./aux/CardMusicianInfo.jsx";
import { Card } from "@mui/material";
import { useTheme, Box } from "@mui/material";

export const CardMusician = ({
  musico_img,
  user_name,
  city,
  artistic_name,
  description,
  instruments,  
  generosMusica,
  Key
}) => {
  const theme = useTheme();

  return (
    <Box>
      <Card
        className="card-musician style-card"
        sx={{
          backgroundColor: theme.palette.background.card,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }} 
      >
        <CardMusicianImg musico_img={musico_img} />
        <CardMusicianInfo
          artistic_name={artistic_name}
          instruments={instruments}
          user_name={user_name}
          description={description}
          city={city}
          
        />
        <CardMusicianFooter
          generosMusica={generosMusica}
          Key={Key}
        />
      </Card>
    </Box>
  );
};
