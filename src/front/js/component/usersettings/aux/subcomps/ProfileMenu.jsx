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
import ContactMailIcon from "@mui/icons-material/ContactMail";
//MUI imports <<<
//Logic imports >>>
import { UserSettingsMenuItems } from "../../UserSettingsData.js";
//Logic imports <<<
const ProfileMenu = () => {
  const { actions, store } = useContext(Context);
  const [open, setOpen] = useState(false);

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
              <ContactMailIcon />
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
              <AccountBoxIcon />
            </ListItemIcon>
            <ListItemText primary={UserSettingsMenuItems[2]} />
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
              <ConnectWithoutContactOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={UserSettingsMenuItems[3]} />
          </ListItemButton>
          <ListItemButton
            className={
              UserSettingsMenuItems[4] === store.selected_settings
                ? "SelectedSetting"
                : null
            }
            sx={{ pl: 4 }}
            onClick={() => selectSetting(UserSettingsMenuItems[4])}
          >
            <ListItemIcon>
              <LibraryMusicOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={UserSettingsMenuItems[4]} />
          </ListItemButton>
        </List>
      </Collapse>
    </React.Fragment>
  );
};

export default ProfileMenu;
