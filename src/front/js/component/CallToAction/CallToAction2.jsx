import React from "react";
import { Box, useTheme } from "@mui/system";
import { Typography } from "@mui/material";
import "../../../styles/calltoaction.css";
import RoundedButton from "../buttons/RoundedButton.jsx";

export const CallToAction2 = ({ text1, text2, to, title, onClick }) => {
  const theme = useTheme();
  return (
    <>
      <Box className="header-cta">
        <Box className="container">
          <Typography variant="h1">{text1} </Typography>
          <Typography className="mt-3 mb-5" variant="h4">
            {text2}
          </Typography>
          <RoundedButton
            to={to}
            title={title}
            // onClick={onClick}
          />
        </Box>
      </Box>
    </>
  );
};
