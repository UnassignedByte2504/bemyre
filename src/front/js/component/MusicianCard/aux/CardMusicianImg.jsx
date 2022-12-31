import { Box } from "@mui/material";
import React from "react";

import "../../../../styles/cardmusician.css";

export const CardMusicianImg = ({ urlImg }) => {
  return (
    <>
      <Box className="contendorImg">
        <img className="cardmusicianimg" src={urlImg} />
      </Box>
    </>
  );
};
