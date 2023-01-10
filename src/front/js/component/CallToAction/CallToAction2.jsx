import React from "react";
import { Box, useTheme } from "@mui/system";
import { Typography } from "@mui/material";
import "../../../styles/calltoaction.css";
import RoundedButton from "../buttons/RoundedButton.jsx";

export const CallToAction2 = ({ text1, text2, to, tittle, onClick }) => {
  const theme = useTheme();
  return (
    <>
      <Box className="header-cta">
        <Typography variant="h2">{text1} </Typography>
        <Typography variant="h6">{text2} </Typography>
        <RoundedButton
          to={to}
          tittle={tittle}
          onClick={onClick}
          className="d-none"
        />
      </Box>
    </>
  );
};
