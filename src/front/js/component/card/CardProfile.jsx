import React from "react";
import { useState, useContext } from "react";
import { Context } from "../../store/appContext.js";
import { Link, useParams, Navigate, useNavigate } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Button from "@mui/material/Button";
import { Box, Divider, Typography, useTheme } from "@mui/material";
import Follows from "./aux/Follows.jsx";
import FlexEvenly from "../styledcomponents/FlexEvenly.jsx";
import { followUser, unfollowUser } from "../../api calls/follows.js";
import FollowButtons from "./aux/FollowButtons.jsx";
import DefaultBody from "./aux/DefaultBody.jsx";
import { profileCardViews, componentToRender } from "./ProfileCardData.js";

export const CardProfile = ({
  first_name,
  last_name,
  description,
  profilePicture,
  reRender,
}) => {
  const params = useParams();
  const { store, actions } = useContext(Context);
  const username = params.username;
  const [trigger, setTrigger] = useState();
  const theme = useTheme();
  const view = store.profileCardView;

  const follow = async (username) => {
    await followUser(username);
    await window.location.reload;
  }; 

  const unFollow = async (username) => {
    await unfollowUser(username);
    window.location.reload;
  };

  const [open, setOpen] =useState()
  return (
    <Box
      className="card m-2 shadow"
      sx={{
        color: theme.palette.text.card,
        backgroundColor: theme.palette.background.card,
      }}
    >
      <Box sx={{ display: "none" }}>{trigger}</Box>
      <img src={profilePicture} className="card-img-top" alt="..." />
      <Box className="card-body">
        <Typography variant="h3" className="card-title text-center">
          <strong>{first_name} {last_name}</strong>
        </Typography>
        <Follows />
        <Typography variant="h5" className="mb-3">{description}</Typography>
        {componentToRender(view)}
      </Box>
    </Box>
  );
};
