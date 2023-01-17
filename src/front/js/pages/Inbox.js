import React from "react";

import { useContext, useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
//COMPONENTS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
import IncomingMessage from "../component/inbox/IncomingMessage.js";
import OutgoingMessage from "../component/inbox/OutgoingMessage.js";
import SocketContext from "../state/socketContext";
import ChatDate from "../component/inbox/ChatDate.js";
import EmojiPicker from "emoji-picker-react";
import FlexBetween from "../component/styledcomponents/FlexBetween.jsx";
import imgUrl1 from "../../img/bemyre-faq.jpg";
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<COMPONENTS
import {
  Box,
  Typography,
  IconButton,
  Avatar,
  InputBase,
  Badge,
  TextField,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
//ICONS>>>>>>>>>>>>>>>>>>>>>>
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
//<<<<<<<<<<<<<<<<<<<<<<ICONS

const Inbox = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const Socket = useContext(SocketContext);
  const lastMsg = useRef();
  const currentUser = sessionStorage.getItem("current_user");

  // STATES >>>>>>>>>>>>>>>>>>>>>>>>>>>>
  const [isOpen, setIsOpen] = useState(false);
  const [emojiOpen, setEmojiOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [recipients, setRecipients] = useState({
    name: [],
    profile_img: [],
  });
  const [recipient, setRecipient] = useState({
    name: "",
    profile_img: "",
  });
  const [newRecipient, setNewRecipient] = useState("");
  const [recipientsOptions, setRecipientOptions] = useState([]);
  const [conversation, setConvsersation] = useState([]);

  // <<<<<<<<<<<<<<<<<<<<<<<< STATES

  // FUNCTIONS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  function sendMessage(message_body, sender_user_name, receiver_username) {
    console.log(message_body, sender_user_name, receiver_username);

    Socket.emit(
      "direct_message",
      message_body,
      sender_user_name,
      receiver_username
    );
    setMessage("");
  }

  Socket.on("direct_message", (data) => {
    setConvsersation([...conversation, data]);
  });

  const getRecipientsList = async () => {
    setIsOpen(!isOpen);
    await fetch(`${process.env.BACKEND_URL}/api/${currentUser}/usernames`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setRecipientOptions(data);
      });
  };
  const messageToRender = (
    index,
    messageBody,
    Sender,
    Recipient,
    timeStamp
  ) => {
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
          timeStamp={timeStamp}
        />
      );
    } else {
      return (
        <IncomingMessage
          message={msg}
          profileImg={profileImg}
          userName={recipient}
          timeStamp={timeStamp}
        />
      );
    }
  };
  const fetchConversation = async (recipientName, recipientImage) => {
    setRecipient({
      name: recipientName,
      profile_img: recipientImage,
    });
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(
      `${process.env.BACKEND_URL}/api/${currentUser}/conversation/${recipientName}`,
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
  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<FUNCTIONS
  const NewRecipientForm = () => {
    return (
      <Box className="NewRecipientForm-Wrapper">
        <TextField
          variant="standard"
          placeholder="Nombre de usuario"
          value={newRecipient}
          onChange={(e) => setNewRecipient(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setRecipient({
                name: [newRecipient],
                profile_img: [null],
              });
            }
          }}
        />
      </Box>
    );
  };

  //EFFECTS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  useEffect(() => {
    lastMsg.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  }, [conversation]);

  useEffect(() => {
    if (Socket) {
      Socket.emit("read_messages", currentUser);
    }
  }, [recipients]);
  useEffect(() => {
    fetchrecipients(currentUser);
    // Socket.on("recipients", (data) => setRecipients(data));
  }, []);

  //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<EFFECTS

  return (
    <Box
      className="InboxParent"
      sx={{
        minHeight: "100vh",
        backgroundImage: `url(${imgUrl1})`,
      }}
    >
      <Box className="InboxWrapper container-lg my-5">
        <Box className="InboxBody">
          <Box className="RecipientsWrapper">
            <Box className="RecepientsHeader">
              <Typography variant="h3" className="RecipientsHeaderText">
                Chats
              </Typography>
              <Box className="NewRecipient">
                <IconButton
                  className="NewRecipientBtn"
                  onClick={() => getRecipientsList()}
                >
                  {isOpen ? <CloseIcon /> : <AddIcon />}
                </IconButton>
                {isOpen ? (
                  <Box className="NewRecipientForm-Wrapper">
                    <TextField
                    options={["hola", "hola2"]}
                      variant="standard"
                      placeholder="Nombre de usuario"
                      value={newRecipient}
                      onChange={(e) => setNewRecipient(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          setRecipient({
                            name: [newRecipient],
                            profile_img: [null],
                          });
                        }
                      }}
                    />
                  </Box>
                ) : null}
              </Box>
            </Box>
            <Box className="RecipientsBody">
              {recipients &&
                recipients.name.map((recipient, index) => (
                  <Box
                    className="RecipientRoot"
                    key={index}
                    onClick={() =>
                      fetchConversation(
                        recipients.name[index],
                        recipients.profile_img[index]
                      )
                    }
                  >
                    <Box>
                      <Badge
                        color="success"
                        overlap="circular"
                        badgeContent=" "
                      >
                        <Avatar
                          src={recipients.profile_img[index]}
                          alt={recipients.name[index]}
                        />
                      </Badge>
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
              {recipient.name !== "" && (
                <>
                  <Box
                    className="HeaderUserName"
                    onClick={() => navigate(`/user/${recipient.name}`)}
                  >
                    <Typography variant="h4">{recipient.name}</Typography>
                  </Box>
                  <Box>
                    <Badge color="success" overlap="circular" badgeContent=" ">
                      <Avatar
                        src={recipient.profile_img}
                        alt={recipient.name}
                        sx={{
                          width: "3.5rem",
                          height: "3.5rem",
                        }}
                      />
                    </Badge>
                  </Box>
                </>
              )}
            </Box>
            {conversation && recipient && (
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

                  return (
                    <Box key={index}>
                      {messageToRender(
                        index,
                        message.message_body,
                        message.sender,
                        message.recipient,
                        message.timestamp
                      )}
                    </Box>
                  );
                })}
                <div ref={lastMsg} />
              </Box>
            )}

            {recipient.name && (
              <FlexBetween
                backgroundColor={theme.palette.background.alt}
                borderRadius="9px"
                gap="3rem"
                p="0.1rem 1.5rem"
                width="100%"
                position="relative"
              >
                <TextField
                  fullWidth={true}
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Nuevo mensaje"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      sendMessage(message, currentUser, recipient.name);
                    }
                  }}
                  variant="standard"
                />
                <FlexBetween>
                  <IconButton onClick={() => setEmojiOpen(!emojiOpen)}>
                    <EmojiEmotionsOutlinedIcon />
                  </IconButton>
                  <IconButton>
                    <AddIcon />
                  </IconButton>
                </FlexBetween>
                {emojiOpen ? (
                  <Box
                    sx={{
                      position: "absolute",
                      height: "max-content",
                      width: "max-content",
                      left: "500px",
                      top: "-440px",
                      zIndex: "4",
                    }}
                  >
                    <EmojiPicker
                      theme="dark"
                      width={400}
                      onEmojiClick={(e) => setMessage(message + e.emoji)}
                    />
                  </Box>
                ) : null}
              </FlexBetween>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Inbox;
