import React from "react";

import { useContext, useEffect, useState, useRef, createRef } from "react";
import IncomingMessage from "../component/inbox/IncomingMessage.jsx";
import OutgoingMessage from "../component/inbox/OutgoingMessage.jsx";
import SocketContext from "../state/socketContext";
import ChatDate from "../component/inbox/ChatDate.js";
import EmojiPicker from 'emoji-picker-react';
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
  Avatar,
  Autocomplete,
  FormControl,
  InputBase
} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';import FlexBetween from "../component/styledcomponents/FlexBetween.jsx";

const Inbox = () => {
  const theme = useTheme()
  const [isOpen, setIsOpen] = useState(false);
  const Socket = useContext(SocketContext);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(false);
  const [recipients, setRecipients] = useState({
    name: [],
    profile_img: [],
  });
  const [recipient, setRecipient] = useState("");
  const [newRecipient, setNewRecipient] = useState("");
  const [recipientsOptions, setRecipientOptions] = useState([]);
  const [conversation, setConvsersation] = useState([]);
  const currentUser = sessionStorage.getItem("current_user");
  const lastMsg = useRef();
  function sendMessage(message_body, sender_user_name, receiver_username) {
    console.log(message_body, sender_user_name, receiver_username);

    Socket.emit(
      "direct_message",
      message_body,
      sender_user_name,
      receiver_username
    );
    setMessage("");
    Socket.on("direct_message", (data) => {
      console.log(data);
      setConvsersation([...conversation, data]);
    });
  }

  const NewRecipientForm = () => {
    return (
      <Box className="NewRecipientForm-Wrapper">
        <FormControl fullWidth>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={recipientsOptions}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="Busca un usuario"
                label="Nuevo chat"
                onChange={(e) => setNewRecipient(e.target.value)}
                value={newRecipient}
                autoComplete="on"
              />
            )}
          />
        </FormControl>
      </Box>
    );
  };

  const getRecipientsList = async () => {
    setIsOpen(true);
  };
  const messageToRender = (index, messageBody, Sender, Recipient) => {
    const recipient = Recipient;
    const sender = Sender;
    const msg = messageBody;
    const profileIndex =
      Recipient !== currentUser
        ? recipients.name.indexOf(Recipient)
        : recipients.name.indexOf(Sender);
    const profileImg = recipients.profile_img[profileIndex];
    const myProfileImg = sessionStorage.getItem("profile_img");

    if (sender === currentUser) {
      return (
        <OutgoingMessage
          message={msg}
          profileImg={myProfileImg}
          userName={sender}
          Rf={lastMsg}
        />
      );
    } else {
      return (
        <IncomingMessage
          message={msg}
          profileImg={profileImg}
          userName={recipient}
          Rf={lastMsg}
        />
      );
    }
  };

  useEffect(() => {
    lastMsg.current?.scrollIntoView({ behavior: "smooth" });
  }, [conversation]);

  // useEffect(() =>{
  //   scrollToBottom(lastMsg?.current)
  // }, [conversation])

  const fetchConversation = async (recipient) => {
    setRecipient(recipient);
    // await Socket.emit('get_last_msg_between', currentUser, recipient)
    console.log(recipient);
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(
      `${process.env.BACKEND_URL}/api/${currentUser}/conversation/${recipient}`,
      options
    );
    const data = await response.json();
    console.log(data);
    setConvsersation(data);
  };

  const fetchrecipients = async () => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(
      `${process.env.BACKEND_URL}/api/${currentUser}/recipients`,
      options
    );
    const data = await response.json();
    setRecipients({
      name: data.names,
      profile_img: data.profile_img,
    });
  };

  function setConnected(username) {
    Socket.emit("is_connected", username);
  }
  // useEffect(() => {
  //   Socket.on("direct_message", (data) => {
  //     console.log(data, "desde inbox");
  //   });
  // }),
  //   [messages];

  useEffect(() => {
    fetchConversation(recipient);
  }, [recipient]);
  useEffect(() => {
    console.log(recipients);
  }, [recipients]);
  useEffect(() => {
    fetchrecipients(currentUser);
    // Socket.on("recipients", (data) => setRecipients(data));
  }, []);
  // room to connect is the user name

  return (
    <Box className="InboxWrapper container-lg my-5">
      {/* 
      <Button onClick={() => sendMessage(message, currentUser, recipient)}>
        Send
      </Button>
      <Button onClick={() => setConnected(userName)}>Connect</Button>
      <input
        placeholder="recipient"
        type="text"
        value={newRecipient}
        onChange={(e) => setNewRecipient(e.target.value)}
      />
      <Button onClick={() => setRecipient(newRecipient)}>Add</Button> */}
      <Box className="InboxHeader"></Box>
      <Box className="InboxBody">
        <Box className="RecipientsWrapper">
          <Box className="RecepientsHeader">
            <Typography variant="h2">Recipients</Typography>
          </Box>
          <Box className="RecipientsBody">
            <Box className="NewRecipient">
              <IconButton
                className="NewRecipientBtn"
                onClick={() => getRecipientsList()}
              >
                <AddIcon />
              </IconButton>
              {isOpen ? <NewRecipientForm /> : null}
            </Box>
            {recipients &&
              recipients.name.map((recipient, index) => (
                <Box
                  className="RecipientRoot"
                  key={index}
                  onClick={() => fetchConversation(recipients.name[index])}
                >
                  <Box>
                    <Avatar
                      src={recipients.profile_img[index]}
                      alt={recipients.name[index]}
                    />
                  </Box>
                  <Box>
                    <Typography variant="h4">
                      {recipients.name[index]}
                    </Typography>
                  </Box>
                </Box>
              ))}
          </Box>
        </Box>
        <Box className="MessagesWrapper">
          <Box className="MessagesHeader">
            <Typography variant="h2">{recipient}</Typography>
          </Box>
          {conversation && (
            <Box className="MessagesBody">
              {conversation.map((message, index) => {
                const prevMessage = conversation[index - 1];
                const dateSended = new Date(message.timestamp);
                const showDate =
                  !prevMessage ||
                  message?.timestamp?.seconds -
                    prevMessage?.timestamp?.seconds >
                    60;
                const dateNow = new Date();
                const showFullDate =
                  dateSended.getDate() !== dateNow.getDate() ||
                  dateSended.getMonth() !== dateNow.getMonth() ||
                  dateSended.getFullYear() !== dateNow.getFullYear();

                console.log(dateSended);

                return (
                  <>
                    {showDate && (
                      <ChatDate date={dateSended} showFullDate={showFullDate} />
                    )}

                    {messageToRender(
                      index,
                      message.message_body,
                      message.sender,
                      message.recipient
                    )}
                  </>
                );
              })}
              <div ref={lastMsg} />
            </Box>
          )}
          
          <FlexBetween
          backgroundColor={theme.palette.background.alt}
          borderRadius="9px"
          gap="3rem"
          p="0.1rem 1.5rem"
          width="100%"
        >
            <InputBase
              className="MessageInput"
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Nuevo mensaje"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage(message, currentUser, recipient);
                }
              }}
            />
            <FlexBetween>
            <IconButton>
              <EmojiEmotionsOutlinedIcon />
            </IconButton>
            <IconButton>
              <AddIcon/>
            </IconButton>
            </FlexBetween>
          </FlexBetween>
        </Box>
      </Box>
    </Box>
  );
};

export default Inbox;
