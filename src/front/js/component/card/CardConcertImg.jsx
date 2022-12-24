import { Button, Typography, useTheme } from "@mui/material";
import React from "react";
import { Box } from "@mui/material";
import "../../../styles/cardconcertimg.css";

export const CardConcertImg = ({ urlImg }) => {
  const theme = useTheme()
  return (
    <>
      <img className="cardconcertimg" src={urlImg} />
      <Button variant="contained" className="button-img-card-concert" sx={{
        backgroundColor: theme.palette.secondary.main
      }}><Typography>More info</Typography></Button>
    </>
  );
};
