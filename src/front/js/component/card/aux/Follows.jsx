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
        marginTop: "2rem",
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
          <Typography variant="h4">
            {sessionStorage.getItem("followers_count")} Seguidores
          </Typography>
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
        <Typography variant="h4">
          {sessionStorage.getItem("following_count")} Siguiendo
        </Typography>
      </Box>
    </FlexEvenly>
  );
};

export default Follows;
