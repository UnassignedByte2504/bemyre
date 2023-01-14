import { Box } from "@mui/material";
import React from "react";

import "../../../../styles/cardmusician.css";

export const CardMusicianImg = ({ musico_img }) => {
  return (
    <>
      <Box className="contendorImg">
        <img className="cardmusicianimg" src={musico_img} />
      </Box>
    </>
  );
};
