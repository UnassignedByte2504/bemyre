import React from "react";
import { useContext } from "react";
import IncomingMessage from "../component/inbox/IncomingMessage.jsx";
import OutgoingMessage from "../component/inbox/OutgoingMessage.jsx";
import  Context  from "../state/socketContext";
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
  const  Socket  = useContext(Context);
  const [message, setMessage] = React.useState("");
  const [messages, setMessages] = React.useState([]);
  const [status, setStatus] = React.useState(false);
  console.log(Socket, "desde inbox");
function sendMessage (message) {
  Socket.emit('message', message);
  setMessage("");
}

const userName = "Marcos";
function setConnected (username) {
  Socket.emit('is_connected', username)
}
  React.useEffect(() => {
    Socket.on('message', (data) => {
      setMessages([...messages, data]);
    });
  }, [messages]);

  Socket.on('is_connected', (data) => {
    setStatus(data)})
    console.log(status)
  return (
    <Box className="container mt-5 " height="100vh" width="50vw">
      <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
      <Button onClick={() => sendMessage(message)}>Send</Button>
      <Box><ul>{messages?.map((msg) => <li>{msg}</li>)}</ul></Box>
      <Button onClick={() => setConnected(userName)}>Connect</Button>

    </Box>
  );
};


export default Inbox
