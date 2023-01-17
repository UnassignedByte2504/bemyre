import * as React from "react";
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../store/appContext.js";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import EmailIcon from "@mui/icons-material/Email";
import LogoutIcon from "@mui/icons-material/Logout";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import FlexBetween from "../styledcomponents/FlexBetween.jsx";
import { ButtonGroup, Divider, useTheme, Badge } from "@mui/material";
import SocketContext from "../../state/socketContext";

const settings = ["Mi perfil", "Ajustes", "Dashboard", "Logout"];

const UserBar = () => {
  const Socket = useContext(SocketContext);
  const [isSocket, setIsSocket] = useState(false);
  const theme = useTheme();
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const [anchorElUser, setAnchorElUser] = useState(null);
  const currentUser = sessionStorage.getItem("current_user");
  const [unreadMessages, setUnreadMessages] = useState(0);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  useEffect(() => {
    setIsSocket(true);
  }, [Socket]);

  useEffect(() => {
    if (isSocket) {
      Socket.emit("unread_messages", currentUser);
      Socket.on("unread_messages", (data) => {
        setUnreadMessages(data);
      });
    }
  }, [isSocket]);
  const menuItemClick = ({ to, logout }) => {
    navigate(to);
    handleCloseUserMenu();

    if (logout) {
      actions.logOut();
    }
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box
      sx={{
        flexGrow: 0,
        width: "10rem",
        background: "none",
        padding: ".25rem",
      }}
    >
      <FlexBetween>
        <Box>
          <ButtonGroup
            variant="contained"
            aria-label="text button group"
            sx={{
              background: "none",
              boxShadow: "none",
            }}
          >
            <Button
              sx={{
                background: "none",
                boxShadow: "none",
              }}
              onClick={() => navigate(`/user/${currentUser}/inbox`)}
            >
              <Badge badgeContent={unreadMessages} color="secondary">
                <EmailIcon />
              </Badge>
            </Button>
            <Button
              sx={{
                background: "none",
                boxShadow: "none",
              }}
            >
              <NotificationsIcon />
            </Button>
          </ButtonGroup>
        </Box>
        <Box>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar
                alt={currentUser}
                src={sessionStorage.getItem("profile_img")}
              />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{
              "& .MuiMenu-paper": {
                backgroundColor: theme.palette.background.drawer,
              },
              mt: "45px",
            }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            <MenuItem
              variant="contained"
              onClick={() => menuItemClick({ to: `/user/${currentUser}` })}
              sx={{
                gap: ".20rem !important",
                display: "flex !important",
                flexDirection: "row !important",
                justifyContent: "space-between !important",
                alignItems: "center",
              }}
            >
              <Box>
                <Typography>Mi perfil</Typography>
              </Box>
              <Box>
                <AccountCircleOutlinedIcon className="my-1" />
              </Box>
            </MenuItem>
            <MenuItem
              variant="contained"
              onClick={() =>
                menuItemClick({ to: `/user/${currentUser}/ajustes` })
              }
              sx={{
                gap: ".20rem !important",
                display: "flex !important",
                flexDirection: "row !important",
                justifyContent: "space-between !important",
                alignItems: "center",
              }}
            >
              <Box>
                <Typography>Settings</Typography>
              </Box>
              <Box>
                <ManageAccountsIcon className="my-1" />
              </Box>
            </MenuItem>
            <Divider />
            <MenuItem
              variant="contained"
              onClick={() => menuItemClick({ logout: true })}
              sx={{
                gap: ".20rem !important",
                display: "flex !important",
                flexDirection: "row !important",
                justifyContent: "space-between !important",
                alignItems: "center",
                color: "red !important",
              }}
            >
              <Box>
                <Typography>Log out</Typography>
              </Box>
              <Box>
                <LogoutIcon className="my-1" />
              </Box>
            </MenuItem>
          </Menu>
        </Box>
      </FlexBetween>
    </Box>
  );
};

export default UserBar;
