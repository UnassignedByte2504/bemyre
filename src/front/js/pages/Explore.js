import { Box, Typography } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { useState, useEffect, useContext } from "react";
import SearchForm from "../component/spain/aux/SearchForms";
import { Spain } from "../component/spain/Spain.js";
import { Context } from "../store/appContext.js";
import { imgTorender } from "../component/Provinces.js";
import altBack from "../../img/Music/grande/2.jpg";

const Explore = () => {
  const scrolltop = useRef()
  useEffect(()=>{
    scrolltop.current?.scrollIntoView({behavior:'smooth'})
  },[])

  const imgUrl1 =
    "https://imgix.bustle.com/uploads/shutterstock/2020/3/30/93162198-95d5-42f2-820a-63528240a45a-shutterstock-1487038826.jpg?w=2000&h=640&fit=crop&crop=faces&auto=format%2Ccompress&blend=000000&blendAlpha=45&blendMode=normal";
  const { actions, store } = useContext(Context);
  return (
    <Box
      className="container ExploreWrapper"
    >
    <div ref={scrolltop}/>
      <Box
        className="ExploreFormHeader"
        sx={{
          backgroundImage: store.provincia
            ? `url(${imgTorender(store.provincia)})`
            : `url(${altBack})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box className="ExploreTitle">
          <Box>
            <Typography className="text-center RockTitle" variant="h2">
              ¿Dónde nos vamos a rockear?
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box className="ExploreBody">
        <SearchForm provincia={store.provincia} />
        <Spain />
        <Box className="UnderLay">
          <img className="BackGroundUnderla" src={imgUrl1} />
        </Box>
      </Box>
    </Box>
  );
};

export default Explore;
