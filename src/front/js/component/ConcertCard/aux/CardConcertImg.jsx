import { Button, Typography, useTheme, Box } from "@mui/material";
import React from "react";

import "../../../../styles/cardconcert.css";

export const CardConcertImg = ({ event_img}) => {
  const theme = useTheme();
  return (
    <>
      <Box className="contendorImg">
        <img className="cardconcertimg" src={event_img} />
      </Box>
    </>
  );
};
