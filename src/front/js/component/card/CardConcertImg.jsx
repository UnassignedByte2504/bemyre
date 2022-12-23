import { Button } from "@mui/material";
import React from "react";
import { Box } from "@mui/material";
import "../../../styles/cardconcertimg.css";

export const CardConcertImg = ({ urlImg }) => {
  return (
    <>
      <img className="cardconcertimg" src={urlImg} />
      <Button className="button-img-card-concert">More info</Button>
    </>
  );
};
