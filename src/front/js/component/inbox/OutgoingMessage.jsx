import React from "react";
import ChatBubble from "react-chat-bubble";
import { Box, Typography, Paper, Avatar } from "@mui/material";

const OutgoingMessage = ({ message, profileImg, userName, Rf }) => {
  return (
    <Box
      ref={Rf}
      className="OutGoingMessage-wrapper"
      sx={{
        width: "100%",
        height: "max-content",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
      }}
    >
      <Paper
        className="OutGoingMessage-paper"
        sx={{
          display: "flex",
          flexDirection: "row-reverse",
          color: "black",
          width: "50%",
        }}
      >
        <Typography variant="h5">{message}</Typography>
      </Paper>
      <Avatar src={profileImg} alt={userName} />
    </Box>
  );
};

export default OutgoingMessage;
