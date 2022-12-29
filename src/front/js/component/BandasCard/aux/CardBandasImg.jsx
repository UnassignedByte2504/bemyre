import { Box } from "@mui/material";
import React from "react";

import "../../../../styles/cardbandas.css";

export const CardBandasImg = ({ urlImg }) => {
  return (
    <>
      <Box className="contendorImg">
        <img className="cardbandasimg" src={urlImg} />
      </Box>
    </>
  );
};
