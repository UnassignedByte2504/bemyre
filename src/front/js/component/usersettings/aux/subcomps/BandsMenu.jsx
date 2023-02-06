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
import GroupsIcon from '@mui/icons-material/Groups';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';

//Logic imports >>>
import { UserSettingsMenuItems } from "../../UserSettingsData.js";
//Logic imports <<<

const BandsMenu = () => {
  const { actions, store } = useContext(Context);
  const [open, setOpen] = useState(false);
  const [isSelected, setIsSelected] = useState("");

  const selectSetting = (settings) => {
    // console.log(settings, "desde comp");
    actions.setSelectedSettings(settings);
  };
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <React.Fragment>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <GroupsIcon />
        </ListItemIcon>
        <ListItemText primary="Creación de Banda" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {/* empieza componente del submenu creacion de bandas */}
          <ListItemButton
            className={
              UserSettingsMenuItems[8] === store.selected_settings
                ? "SelectedSetting"
                : null
            }
            sx={{ pl: 4 }}
            onClick={() => selectSetting(UserSettingsMenuItems[8])}
          >
            <ListItemIcon>
              <GroupAddIcon />
            </ListItemIcon>
            <ListItemText primary={UserSettingsMenuItems[8]} />
          </ListItemButton>
          {/* empieza componente del submenu creacion de casting */}
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
              <ManageSearchIcon />
            </ListItemIcon>
            <ListItemText primary={UserSettingsMenuItems[9]} />
          </ListItemButton>
        </List>
      </Collapse>
    </React.Fragment>
  );
};

export default BandsMenu;
