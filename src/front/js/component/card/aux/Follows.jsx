import { Box, Typography } from "@mui/material";
import React from "react";
import { useState, useEffect, useContext } from "react";
import { Context } from "../../../store/appContext.js";
import { useParams } from "react-router-dom";
import FlexEvenly from "../../styledcomponents/FlexEvenly.jsx";
import {
  fetchFollowingCount,
  fetchFollowersCount,
  fetchFollowing,
  fetchFollowers,
} from "../../../api calls/follows.js";
import { profileCardViews } from "../ProfileCardData.js";

const Follows = () => {
  const { actions, store } = useContext(Context);
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState();
  const params = useParams();
  const userName = params.username;

  useEffect(() => {
    fetchFollowersCount(userName);
    fetchFollowingCount(userName);
    actions.fetchFollowers(userName);
    actions.fetchFollowing(userName);
  }, []);

  useEffect(() => {
    fetchFollowersCount(userName);
    fetchFollowingCount(userName);
    actions.fetchFollowers(userName);
    actions.fetchFollowing(userName);
  }, [store.reRender]);

  return (
    <FlexEvenly
      sx={{
        marginTop: "1.3rem",
        marginBottom: "2rem",
      }}
    >
      <Box
        className={
          store.profileCardView === profileCardViews[1]
            ? "Follows-active"
            : "Follows"
        }
        onClick={() => actions.setProfileCardView(profileCardViews[1])}
      >
        {followers && (
          <Box className="d-flex flex-column align-items-center">
          <Typography variant="h3" sx={{color: ""}}>
          <strong>{sessionStorage.getItem("followers_count")}</strong>
          </Typography>
          <Typography variant="h5">Seguidores</Typography>
          </Box>
        )}
      </Box>
      <Box
        className={
          store.profileCardView === profileCardViews[2]
            ? "Follows-active"
            : "Follows"
        }
        onClick={() => actions.setProfileCardView(profileCardViews[2])}
      >
      <Box className="d-flex flex-column align-items-center">
        <Typography variant="h3">
        <strong>{sessionStorage.getItem("following_count")}</strong>
        </Typography>
        <Typography variant="h5">Siguiendo</Typography>
      </Box>

      </Box>
    </FlexEvenly>
  );
};

export default Follows;
