import React from "react";
import ChatBubble from "react-chat-bubble";
import { Box, Typography, Paper } from "@mui/material";


const OutgoingMessage = () => {
  return (
    <Box
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
      <Typography variant="h5">I am an Incoming Msg</Typography>
    </Paper>
  </Box>
  )
}

export default OutgoingMessage