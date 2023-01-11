import React from "react";
import { Box, useTheme } from "@mui/system";
import { Typography } from "@mui/material";
import "../../../styles/calltoaction.css";

export const CallToAction1 = ({ text1 }) => {
  const theme = useTheme();
  return (
    <>
      <Box className="header-cta">
        <Typography variant="h2">{text1} </Typography>
      </Box>
    </>
  );
};
