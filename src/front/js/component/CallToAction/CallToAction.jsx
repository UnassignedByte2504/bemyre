import React from "react";
import { Container, Box } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material";
import { Card, Typography } from "@mui/material";
import "../../../styles/calltoaction.css";

export const CallToAction = () => {
  const theme = useTheme();
  return (
    <>
      <Box className="header-cta">
        <Typography variant="h2">
          ¿Te gustaría ofrecer tu música en vivo a un local?
        </Typography>
      </Box>
    </>
  );
};
