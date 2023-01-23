import React from "react";
import "../../../styles/cardlocal.css";
import { CardLocalFooter } from "./aux/CardLocalFooter.jsx";
import { CardLocalImg } from "./aux/CardLocalImg.jsx";
import { CardLocalInfo } from "./aux/CardLocalInfo.jsx";
import { Card } from "@mui/material";
import { useTheme, Box } from "@mui/material";

export const CardLocal = ({
  local_img,
  name,
  ubicacion_local,
  city,
  description,
  local_music_genres,
  to,
  Key,
}) => {
  const theme = useTheme();

  return (
    <Box key={Key}>
      <Card
        className="card-local style-card"
        sx={{
          backgroundColor: theme.palette.background.card,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <CardLocalImg local_img={local_img} />
        <CardLocalInfo
          name={name}
          ubicacion_local={ubicacion_local}
          city={city}
          description={description}
        />
        <CardLocalFooter local_music_genres={local_music_genres} to={to} Key={Key} />
      </Card>
    </Box>
  );
};
