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
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import StorefrontIcon from '@mui/icons-material/Storefront';
import MicExternalOnIcon from '@mui/icons-material/MicExternalOn';
import EventIcon from '@mui/icons-material/Event';


//Logic imports >>>
import { UserSettingsMenuItems } from "../../UserSettingsData.js";
//Logic imports <<<

const LocalsMenu = () => {
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
          <StorefrontIcon />
        </ListItemIcon>
        <ListItemText primary="Publicar sobre mi local" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
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
              <AddBusinessIcon />
            </ListItemIcon>
            <ListItemText primary={UserSettingsMenuItems[10]} />
          </ListItemButton>
          <ListItemButton
            className={
              UserSettingsMenuItems[11] === store.selected_settings
                ? "SelectedSetting"
                : null
            }
            sx={{ pl: 4 }}
            onClick={() => selectSetting(UserSettingsMenuItems[11])}
          >
            <ListItemIcon>
              <EventIcon />
            </ListItemIcon>
            <ListItemText primary={UserSettingsMenuItems[11]} />
          </ListItemButton>
          <ListItemButton
            className={
              UserSettingsMenuItems[12] === store.selected_settings
                ? "SelectedSetting"
                : null
            }
            sx={{ pl: 4 }}
            onClick={() => selectSetting(UserSettingsMenuItems[12])}
          >
            <ListItemIcon>
              <MicExternalOnIcon />
            </ListItemIcon>
            <ListItemText primary={UserSettingsMenuItems[12]} />
          </ListItemButton>
          
        </List>
      </Collapse>
    </React.Fragment>
  );
};

export default LocalsMenu;
