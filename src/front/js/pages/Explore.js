import { Box, Typography, useForkRef } from "@mui/material";
import React, { useEffect, useRef } from "react";

import { Spain } from "../component/spain/Spain.js"
const Explore = () => {
  const scrolltop = useRef()
  useEffect(()=>{
    scrolltop.current?.scrollIntoView({behavior:'smooth'})
  },[])
  return (
    <>
    <div ref={scrolltop}/>
    <Box className="container ExploreWrapper" sx={{
      minHeight:"100vh"
    }}>
      <Spain />
    </Box>
    </>
  );
};

export default Explore;
