import React, { useState, useEffect, useContext, useMemo } from "react";
import {
  Menu,
  MenuItem,
  Box,
  Typography,
  List,
  ListSubheader,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Divider,
} from "@mui/material";

//supcomps
import ProfileMenu from "./subcomps/ProfileMenu.jsx";
import ManageAccountMenu from "./subcomps/ManageAccountMenu.jsx";
import BandsMenu from "./subcomps/BandsMenu.jsx";
import LocalsMenu from "./subcomps/LocalsMenu.jsx";
//subcomps

const UserSettingsMenu = () => {
  return (
    <React.Fragment>
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Ajustes de perfil
          </ListSubheader>
        }
      >
        <Divider />
        <ProfileMenu />
        <Divider />
        <ManageAccountMenu />
        <Divider />
        <ListSubheader component="div" id="nested-list-subheader">
          Creación de Bandas y Locales
        </ListSubheader>
        <BandsMenu />
        <Divider />
        <LocalsMenu />
      </List>
    </React.Fragment>
  );
};

export default UserSettingsMenu;
