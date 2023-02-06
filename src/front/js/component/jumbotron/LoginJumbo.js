//Import react
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { imgTorender } from "../Provinces.js";
//Import materials
import { Box, Typography } from "@mui/material";
import { Context } from "../../store/appContext";

//Function

export const LoginJumbo = ({ currentCity, provincia }) => {
  // console.log("desde jumbo", provincia)
  const { actions, store } = useContext(Context);

  return (
    <Box
      className="d-flex justify-content-center align-items-center"
      sx={{
        backgroundImage: `url(${imgTorender(provincia)})`,
        height: "40vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {currentCity ? (
        <Typography
          className="text-center titleJumbotron"
          sx={{ fontSize: "4rem" }}
        >
          Eventos en {currentCity}
        </Typography>
      ) : (
        <Typography className="text-center" sx={{ fontSize: "4rem" }}>
          Eventos en tu ciudad
        </Typography>
      )}
    </Box>
  );
};
