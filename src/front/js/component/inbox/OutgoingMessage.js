import React from "react";
import { Box, Typography, Avatar } from "@mui/material";

const OutgoingMessage = ({ message, profileImg, userName, timeStamp }) => {
  const timeElapsed = () => {
    const date = new Date(timeStamp);
    const currentDate = new Date();
    const diff = currentDate - date;
    const diffInMinutes = Math.round(diff / 60000);
    if (diffInMinutes < 1) {
      return "Just now";
    } else if (diffInMinutes < 60) {
      return diffInMinutes + " minutes ago";
    } else if (diffInMinutes < 1440) {
      return (
        Math.round(diffInMinutes / 60) +
        (diffInMinutes > 120 ? " hours ago" : " hour ago")
      );
    } else {
      return Math.round(diffInMinutes / 1440) + " days ago";
    }
  };

  return (
    <>
      <Box className="OutGoingMessage-wrapper">
        <Box className="OutGoingMessage-paper">
          <Box className="MessageContainer">
            <Typography variant="h5">{message}</Typography>
          </Box>
        </Box>
        <Avatar src={profileImg} alt={userName} className="OutGoingAvatar" />
        <Box className="OutgoingMessage-timestamp">
        <Typography variant="caption" >
          {timeElapsed()}
        </Typography>
      </Box>
      </Box>

    </>
  );
};

export default OutgoingMessage;
