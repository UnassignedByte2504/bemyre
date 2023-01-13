import React from "react";
import { useState } from "react";
import { Box, Divider, Typography, useTheme } from "@mui/material";
import FlexEvenly from "../component/styledcomponents/FlexEvenly.jsx";

export const fetchFollowersCount = async (username) => {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await fetch(
    `${process.env.BACKEND_URL}/api/followerscount/${username}`,
    options
  );
  const json = await response.json();
  sessionStorage.setItem("followers_count", json);

  return json;
};

export const fetchFollowingCount = async (username) => {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const followingCount = await fetch(
    `${process.env.BACKEND_URL}/api/followingcount/${username}`,
    options
  );
  const json = await followingCount.json();
  sessionStorage.setItem("following_count", json);

  return json;
};
export const fetchFollowing = async (username) => {
  let data = undefined;
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

 await fetch(`${process.env.BACKEND_URL}/api/following/${username}`, options)
 .then((res) => res.json())
 .then((json) => {
   sessionStorage.setItem("following_list", json.following);
   data=json
 })

 return data
 
};

export const fetchFollowers = async (username) =>{
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await fetch(
    `${process.env.BACKEND_URL}/api/followers/${username}`,
    options
  );
  const json = await response.json();
  sessionStorage.setItem('followers_list', json.followers)
   const data = {
    followers: json.followers,
    profile_img: json.profile_img
  }
  return data
}

export const followUser = async (userToFollow) => {
  const token = sessionStorage.getItem("access_token");
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await fetch(
    `${process.env.BACKEND_URL}/api/follow/${userToFollow}`,
    options
  );
  const json = await response.json();
  return json;
};

export const unfollowUser = async (userToUnfollow) => {
  const token = sessionStorage.getItem("access_token");
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await fetch(
    `${process.env.BACKEND_URL}/api/unfollow/${userToUnfollow}`,
    options
  );
  const json = await response.json();
  return json;
};
