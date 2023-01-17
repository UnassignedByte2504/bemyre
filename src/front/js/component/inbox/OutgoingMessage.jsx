import React from "react";
import { Box, Typography, Avatar } from "@mui/material";

const OutgoingMessage = ({ message, profileImg, userName }) => {
  return (
    <Box
      className="OutGoingMessage-wrapper"
    >
      <Box className="OutGoingMessage-paper">
        <Box className="MessageContainer">
          <Typography variant="h5">{message}</Typography>
        </Box>
      </Box>
      <Avatar src={profileImg} alt={userName} className="OutGoingAvatar"/>
    </Box>
  );
};

export default OutgoingMessage;
