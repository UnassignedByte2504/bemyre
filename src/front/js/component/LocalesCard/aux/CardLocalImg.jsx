import { Box } from "@mui/material";
import React from "react";

import "../../../../styles/cardlocal.css";

export const CardLocalImg = ({ urlImg }) => {
  return (
    <>
      <Box className="contendorImg">
        <img className="cardlocalimg" src={urlImg} />
      </Box>
    </>
  );
};
