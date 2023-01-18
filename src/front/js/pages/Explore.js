import { Box, Typography } from "@mui/material";
import React from "react";

import { Spain } from "../component/spain/Spain.js"
const Explore = () => {
  return (
    <Box className="container ExploreWrapper" sx={{
      minHeight:"100vh"
    }}>
      <Spain />
    </Box>
  );
};

export default Explore;
