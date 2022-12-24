import React from "react";
import { AspectRatio } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { Context } from "../store/appContext";

import { CardConcert } from "../component/card/CardConcert.jsx";

const BrainStorm = () => {
  const { actions, store } = useContext(Context);
  return (
    <Box className="container brainstormWrapper">
      <Box className="Marcos">
        <h1>Marcos</h1>
      </Box>
      <Box className="Pablo">
        <h1>Pablo</h1>
        <hr />
      </Box>
      <Box className="Carmen">
        <h1 className="mb-5">Carmen</h1>
        <CardConcert />
        <hr className="mt-5" />
      </Box>
    </Box>
  );
};

export default BrainStorm;
