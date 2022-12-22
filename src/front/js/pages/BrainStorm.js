import React from "react";
import { AspectRatio } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { Context } from "../store/appContext";
import TestCard from "../component/testcard/TestCard";

const BrainStorm = () => {
  const { actions, store } = useContext(Context);
  return (
    <Box className="container brainstormWrapper">
      <Box className="Marcos">
        <h1>Marcos</h1>
        <TestCard
          artistname="Marcos"
          artistlocation="madrid"
          fecha="05/05/1985"
          ubicacion="madrid"
          hora="22:00"
        />
      </Box>
      <Box className="Pablo">
        <h1>Pablo</h1>
        <hr />
      </Box>
      <Box className="Carmen">
        <h1>Carmen</h1>
        <hr />
      </Box>
    </Box>
  );
};

export default BrainStorm;
