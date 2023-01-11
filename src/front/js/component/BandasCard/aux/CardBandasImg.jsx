import { Box } from "@mui/material";
import React from "react";

import "../../../../styles/cardbandas.css";

export const CardBandasImg = ({ banda_img }) => {
  return (
    <>
      <Box className="contendorImg">
        <img className="cardbandasimg" src={banda_img} />
      </Box>
    </>
  );
};
