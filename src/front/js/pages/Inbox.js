import React from "react";
import IncomingMessage from "../component/inbox/IncomingMessage.jsx";
import OutgoingMessage from "../component/inbox/OutgoingMessage.jsx";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Button,
  TextField,
  InputAdornment,
  IconButton,
  InputLabel,
} from "@mui/material";

const Inbox = () => {
  return <Box className="container" sx={{
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    width:"50vw",
    height:"50vh"
  }}>
    <Box width="100%">
        <IncomingMessage/>
        <OutgoingMessage/>
    </Box>
    
  </Box>;
};

export default Inbox;
