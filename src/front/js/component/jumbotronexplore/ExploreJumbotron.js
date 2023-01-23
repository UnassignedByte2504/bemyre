import React, { useContext, useRef, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { imgTorender } from "../Provinces.js";
import { Context } from "../../store/appContext.js";

const ExploreJumbotron = () => {
  const { store } = useContext(Context);
  const params = useParams();
  const province = params.provincename;
  console.log(province);
  const topref = useRef();
  useEffect(() => {
    topref.current.scrollIntoView({ behavior: "smooth" });
  }, []);
  return (
    <Box className="ExplorerJumboContainer">
      <div ref={topref} />
      <Box className="JumboBackground">
        <img className="JumboExpImg" src={imgTorender(province)} />
      </Box>
      <Box className="JumboOverlay">
        <Box>
          <Typography variant="h1">
            Estos son los resultados para {store?.exploreCategory} en {province}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ExploreJumbotron;
