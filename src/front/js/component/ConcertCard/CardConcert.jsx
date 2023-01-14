import React from "react";
import { CardConcertFooter } from "./aux/CardConcertFooter.jsx";
import { CardConcertImg } from "./aux/CardConcertImg.jsx";
import { CardConcertInfo } from "./aux/CardConcertInfo.jsx";
import { Card } from "@mui/material";
import { useTheme, Box } from "@mui/material";

export const CardConcert = ({
  event_img,
  name,
  city,
  ubicacion_event,
  description,
  date,
  hour,
  generosMusica,
  Key
}) => {
  const theme = useTheme();

  return (
    <Box>
      <Card
        className="card-concert style-card"
        sx={{
          backgroundColor: theme.palette.background.card,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <CardConcertImg event_img={event_img} />
        <CardConcertInfo
          date={date}
          hour={hour}
          ubicacion_event={ubicacion_event}
          name={name}
          city={city}
          description={description}
        />
        <CardConcertFooter
          generosMusica={generosMusica}
          Key={Key}
  
        />
      </Card>
    </Box>
  );
};
