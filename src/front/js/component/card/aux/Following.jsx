import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Typography, Divider, IconButton, Avatar } from "@mui/material";
import { useContext, useState, useEffect } from "react";
import { Context } from "../../../store/appContext";
import FlexEvenly from "../../styledcomponents/FlexEvenly.jsx";
import FlexBetween from "../../styledcomponents/FlexBetween.jsx";
import { fetchFollowing } from "../../../api calls/follows";
import { useParams, Link, Navigate, useNavigate } from "react-router-dom";

const Following = () => {
  const { store, actions } = useContext(Context);
  const [data, setData] = useState();
  const params = useParams();
  const userName = params.username;
  const Navigate = useNavigate();
  const FollowingItem = ({ userName, index }) => {
    const imgsrc = store.following.profile_img[index];
    const userLink = `/user/${userName}`;
    return (
      <Box
        key={index}
        className="FollowBox"
        onClick={() => (window.location.href = userLink)}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar
          alt={userName}
          src={imgsrc}
          sx={{
            height: "60px",
            width: "60px",
            marginBottom: "0.5rem",
            outline: "2px solid red",
          }}
        />
        <Typography variant="h5">{userName}</Typography>
      </Box>
    );
  };
  useEffect(() => {
    setData(store.following);
  }, []);
  return (
    data && (
      <Box>
        <FlexBetween>
          <IconButton onClick={() => actions.setProfileCardView("default")}>
            <ArrowBackIcon />
          </IconButton>
          <Divider
            sx={{
              width: "90%",
            }}
          />
        </FlexBetween>
        <Box className="FollowBox-Container">
          {store?.following?.following.map((e, index) => (
            <FollowingItem userName={e} index={index} />
          ))}
        </Box>
      </Box>
    )
  );
};

export default Following;
