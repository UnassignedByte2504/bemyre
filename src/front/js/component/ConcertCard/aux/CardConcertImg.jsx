import { Button, Typography, useTheme, Box } from "@mui/material";
import React from "react";

import "../../../../styles/cardconcert.css";

export const CardConcertImg = ({ urlImg }) => {
  const theme = useTheme();
  return (
    <>
      <Box className="contendorImg">
        <img className="cardconcertimg" src={urlImg} />
      </Box>
    </>
  );
};
