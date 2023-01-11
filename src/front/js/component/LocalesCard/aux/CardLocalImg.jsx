import { Box } from "@mui/material";
import React from "react";

import "../../../../styles/cardlocal.css";

export const CardLocalImg = ({ local_img }) => {
  return (
    <>
      <Box className="contendorImg">
        <img className="cardlocalimg" src={local_img} />
      </Box>
    </>
  );
};
