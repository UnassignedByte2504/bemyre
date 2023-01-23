import React from "react";
import { Context } from "../store/appContext.js";
import { useContext, useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
//COMPONENTS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
import IncomingMessage from "../component/inbox/IncomingMessage.js";
import OutgoingMessage from "../component/inbox/OutgoingMessage.js";
import SocketContext from "../state/socketContext";
import EmojiPicker from "emoji-picker-react";
import FlexBetween from "../component/styledcomponents/FlexBetween.jsx";
// import imgUrl1 from "../../img/bemyre-faq.jpg";
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<COMPONENTS
import {
  Box,
  Typography,
  IconButton,
  Avatar,
  Badge,
  TextField,
  Autocomplete,
  FormControl,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
//ICONS>>>>>>>>>>>>>>>>>>>>>>
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
//<<<<<<<<<<<<<<<<<<<<<<ICONS

const Inbox = () => {
  const imgUrl1 =
    "https://imgix.bustle.com/uploads/shutterstock/2020/3/30/93162198-95d5-42f2-820a-63528240a45a-shutterstock-1487038826.jpg?w=2000&h=640&fit=crop&crop=faces&auto=format%2Ccompress&blend=000000&blendAlpha=45&blendMode=normal";
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const theme = useTheme();
  const Socket = useContext(SocketContext);
  const lastMsg = useRef();
  const msgInput = useRef();
  const newRecipientInput = useRef()
  const currentUser = sessionStorage.getItem("current_user");
  const loggedUsers = store?.loggedUsers;
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
  const [contacts, setContacts] = useState();
  //<<<<<<<<<<<<<<<<<<<<<<
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
    await   newRecipientInput.current?.focus({ behavior: "smooth"});
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
  const isVisible = (username) => {
    if (loggedUsers.includes(username)) {
      return false;
    } else {
      return true;
    }
  };
  const startConversation = (name, img) => {
    setRecipient({
      name: name,
      profile_img: img,
    });
    setIsOpen(false);
    msgInput.current.focus();
  };
  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<FUNCTIONS

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
    actions.fetchFollowers(currentUser);
    actions.fetchFollowing(currentUser);
  }, []);
  useEffect(() => {
    const followers = store.followers ? store.followers.followers : [];
    const following = store.following ? store.following.following : [];
    if (followers) {
      let contacts = [];
      followers.forEach((follower) => {
        if (follower.username !== currentUser) {
          contacts.push(follower);
        }
      });
      following.forEach((following) => {
        if (following.username !== currentUser) {
          contacts.push(following);
        }
      });
      setContacts(contacts);
      console.log("con", contacts);
    }
  }, [store.followers, store.following]);

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
                    <FormControl
                      sx={{ backgroundColor: "black", paddingLeft: ".25rem" }}
                    >
                      <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={contacts}
                        sx={{ width: 300, backgroundColor: "black !important" }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            autoFocus={true}
                            inputRef={newRecipientInput}
                            autoComplete="on"
                            label="Nuevo chat"
                            variant="standard"
                            placeholder="Nombre de usuario"
                            value={newRecipient}
                            onChange={(e) => setNewRecipient(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                startConversation(newRecipient, null);
                              }
                            }}
                          />
                        )}
                      />
                    </FormControl>
                  </Box>
                ) : null}
              </Box>
            </Box>
            <Box className="RecipientsBody">
              {recipients &&
                recipients.name.map((recipient, index) => {
                  return (
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
                          invisible={isVisible(recipients.name[index])}
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
                  );
                })}
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
                    <Badge
                      color="success"
                      overlap="circular"
                      badgeContent=" "
                      invisible={isVisible(recipient.name)}
                    >
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
                  inputRef={msgInput}
                  autoFocus={true}
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
