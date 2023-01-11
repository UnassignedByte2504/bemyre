import React from "react";
import { useState, useContext } from "react";
import { Context } from "../../../store/appContext.js";
import { Link, useParams, Navigate, useNavigate } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Button from "@mui/material/Button";
import { Box, Divider, Typography, useTheme } from "@mui/material";
import Follows from "./Follows.jsx";
import FollowButtons from "./FollowButtons.jsx";

const DefaultBody = ({description}) => {
  const currentUser = sessionStorage.getItem('current_user')
  return (
    <>
      <Typography className="card-text">{description}</Typography>
      <Typography>
        <strong>Leer más</strong> <ArrowForwardIcon />
      </Typography>
      <Divider className="mb-3"></Divider>
      <Typography>
        <strong>Instrumentos: </strong>Guitarra y piano
      </Typography>
      <Typography>
        <strong>Influencias:</strong> Nirvana, Guns&Roses, Def Leppard and
        Metallica
      </Typography>
      {currentUser ? <FollowButtons /> : null}
    </>
  );
};

export default DefaultBody;
