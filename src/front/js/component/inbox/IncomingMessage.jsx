import React from "react";
import { Box, Typography, Avatar } from "@mui/material";

const IncomingMessage = ({ message, profileImg, userName }) => {
  return (
    <Box
      className="IncomingMessage-wrapper"
    >
      <Box className="IncomingMessage-paper">
        <Box className="MessageContainer">
          <Typography variant="h5">{message}</Typography>
        </Box>
      </Box>
      <Avatar src={profileImg} alt={userName} className="IncomingAvatar"/>
    </Box>
  );
};

export default IncomingMessage;