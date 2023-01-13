import React, { useState, useEffect, useContext, useMemo } from "react";
import { Context } from "../../../../store/appContext.js";
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
import PasswordOutlinedIcon from "@mui/icons-material/PasswordOutlined";
import MicExternalOnIcon from "@mui/icons-material/MicExternalOn";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import PrivacyTipOutlinedIcon from "@mui/icons-material/PrivacyTipOutlined";

//Logic imports >>>
import { UserSettingsMenuItems } from "../../UserSettingsData.js";
//Logic imports <<<

const BandsMenu = () => {
  const { actions, store } = useContext(Context);
  const [open, setOpen] = useState(false);
  const [isSelected, setIsSelected] = useState("");

  const selectSetting = (settings) => {
    console.log(settings, "desde comp");
    actions.setSelectedSettings(settings);
  };
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <React.Fragment>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <MicExternalOnIcon />
        </ListItemIcon>
        <ListItemText primary="Creación de Banda" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {/* empieza componente del submenu creacion de bandas */}
          <ListItemButton
            className={
              UserSettingsMenuItems[9] === store.selected_settings
                ? "SelectedSetting"
                : null
            }
            sx={{ pl: 4 }}
            onClick={() => selectSetting(UserSettingsMenuItems[9])}
          >
            <ListItemIcon>
              <PasswordOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={UserSettingsMenuItems[9]} />
          </ListItemButton>
          {/* empieza componente del submenu creacion de casting */}
          <ListItemButton
            className={
              UserSettingsMenuItems[10] === store.selected_settings
                ? "SelectedSetting"
                : null
            }
            sx={{ pl: 4 }}
            onClick={() => selectSetting(UserSettingsMenuItems[10])}
          >
            <ListItemIcon>
              <PrivacyTipOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={UserSettingsMenuItems[10]} />
          </ListItemButton>
        </List>
      </Collapse>
    </React.Fragment>
  );
};

export default BandsMenu;
