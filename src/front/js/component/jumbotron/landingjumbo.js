//Import react
import React from "react";
import { Link } from "react-router-dom";

//Import styles
import "../../../styles/home.css";

//Import materials
import { Box, useTheme } from "@mui/material";
import Button from "@mui/material/Button";
import AnimatedButton from "../buttons/AnimatedButton.jsx";

//Function

export const LandingJumbo = () => {
  const theme = useTheme();
  return (
    <Box
      className=" d-flex w-100 fullheight justify-content-center align-items-center text-center"
      style={{
        backgroundImage: `url(https://wallpaperaccess.com/full/1569753.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        maxwidth: "100vw",
        height: "100%",
      }}
    >
      <Box className="row">
        <Box className="col"></Box>
        <Box className="col-8">
          <h2 className="mb-5 titleJumbotron">
            Conoce la música en vivo de tu localidad y conecta con músicos
          </h2>

          <AnimatedButton title="Unete hoy!" to="/signup" />
        </Box>
        <Box className="col"></Box>
      </Box>
    </Box>
  );
};
