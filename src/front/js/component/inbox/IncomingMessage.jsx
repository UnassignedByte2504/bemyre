import React from "react";
import ChatBubble from "react-chat-bubble";
import { Box, Typography, Paper, Avatar } from "@mui/material";
import FlexCentered from "../styledcomponents/FlexCentered.jsx";

const IncomingMessage = ({ message, profileImg, userName, Rf }) => {
  return (
    <Box
      ref={Rf}
      sx={{
        width: "100%",
        height: "max-content",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
      }}
    >
      <Paper
        sx={{
          backgroundColor: "#f9f9f9",
          color: "black",
          width: "50%",
        }}
      >
        <Avatar src={profileImg} alt={userName} />
        <Typography variant="h5">{message}</Typography>
      </Paper>
    </Box>
  );
};

export default IncomingMessage;
