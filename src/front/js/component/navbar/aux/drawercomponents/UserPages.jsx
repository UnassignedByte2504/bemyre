import React, { useEffect } from "react";
import { Button, List, useTheme } from "@mui/material";
import { userPages } from "../NavbarData";
import { ListItem } from "./ListItem.jsx";
import { filterIcon } from "../NavbarData";
import LogoutIcon from "@mui/icons-material/Logout";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { useContext } from "react";
import { Context } from "../../../../store/appContext";
import { useNavigate, Navigate } from "react-router-dom";

const UserPages = () => {
  const { store, actions } = useContext(Context);
  const theme = useTheme();
  const navigate = useNavigate();

  const tok = sessionStorage.getItem("access_token");
  const logOut = async () => {
    await actions.logOut(sessionStorage.getItem("access_token"));
    window.location.href = "/home"
  };

  return (
    <>
      <List
        className="SidebarMs"
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: theme.palette.sidebar.main,
        }}
      >
        <ListItem value="Settings" key="0" to="Settings" />
        <Button
          variant="contained"
          onClick={() => logOut()}
          className="LogOutBtn"
        >
          Log out
        </Button>
      </List>
    </>
  );
};

export default UserPages;
