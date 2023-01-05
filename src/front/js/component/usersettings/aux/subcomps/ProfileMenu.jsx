import React, { useState, useEffect, useContext, useMemo } from "react";
import { Context } from "../../../../store/appContext.js";
//MUI imports >>>
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
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ConnectWithoutContactOutlinedIcon from "@mui/icons-material/ConnectWithoutContactOutlined";
//MUI imports <<<
//Logic imports >>>
import { UserSettingsMenuItems } from "../../UserSettingsData.js";
//Logic imports <<<
const ProfileMenu = () => {
  const { actions, store } = useContext(Context);
  const [open, setOpen] = useState(true);

  const selectSetting = (settings) => {
    actions.setSelectedSettings(settings);
  };
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <React.Fragment>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <ManageAccountsIcon />
        </ListItemIcon>
        <ListItemText primary="Perfil de Usuario" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton
            className={
              UserSettingsMenuItems[0] === store.selected_settings
                ? "SelectedSetting"
                : null
            }
            sx={{ pl: 4 }}
            onClick={() => selectSetting(UserSettingsMenuItems[0])}
          >
            <ListItemIcon>
              <ModeEditIcon />
            </ListItemIcon>
            <ListItemText primary={UserSettingsMenuItems[0]} />
          </ListItemButton>
          <ListItemButton
            className={
              UserSettingsMenuItems[1] === store.selected_settings
                ? "SelectedSetting"
                : null
            }
            sx={{ pl: 4 }}
            onClick={() => selectSetting(UserSettingsMenuItems[1])}
          >
            <ListItemIcon>
              <AccountBoxIcon />
            </ListItemIcon>
            <ListItemText primary={UserSettingsMenuItems[1]} />
          </ListItemButton>
          <ListItemButton
            className={
              UserSettingsMenuItems[2] === store.selected_settings
                ? "SelectedSetting"
                : null
            }
            sx={{ pl: 4 }}
            onClick={() => selectSetting(UserSettingsMenuItems[2])}
          >
            <ListItemIcon>
              <ConnectWithoutContactOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Redes Sociales" />
          </ListItemButton>
          <ListItemButton
            className={
              UserSettingsMenuItems[3] === store.selected_settings
                ? "SelectedSetting"
                : null
            }
            sx={{ pl: 4 }}
            onClick={() => selectSetting(UserSettingsMenuItems[3])}
          >
            <ListItemIcon>
              <LibraryMusicOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Perfil de Artista" />
          </ListItemButton>
        </List>
      </Collapse>
    </React.Fragment>
  );
};

export default ProfileMenu;
