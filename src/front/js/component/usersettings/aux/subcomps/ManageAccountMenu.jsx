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
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import PrivacyTipOutlinedIcon from "@mui/icons-material/PrivacyTipOutlined";

//Logic imports >>>
import { UserSettingsMenuItems } from "../../UserSettingsData.js";
//Logic imports <<<

const ManageAccountMenu = () => {
  const { actions, store } = useContext(Context);
  const [open, setOpen] = useState(false);
  const [isSelected, setIsSelected] = useState("");

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
          <AdminPanelSettingsOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Cuenta y Privacidad" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton
            className={
              UserSettingsMenuItems[5] === store.selected_settings
                ? "SelectedSetting"
                : null
            }
            sx={{ pl: 4 }}
            onClick={() => selectSetting(UserSettingsMenuItems[5])}
          >
            <ListItemIcon>
              <PasswordOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Modificar Contraseña" />
          </ListItemButton>
          <ListItemButton
            className={
              UserSettingsMenuItems[6] === store.selected_settings
                ? "SelectedSetting"
                : null
            }
            sx={{ pl: 4 }}
            onClick={() => selectSetting(UserSettingsMenuItems[6])}
          >
            <ListItemIcon>
              <PrivacyTipOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Ajustes de Privacidad" />
          </ListItemButton>
          <ListItemButton
            className={
              UserSettingsMenuItems[7] === store.selected_settings
                ? "SelectedSetting"
                : null
            }
            sx={{ pl: 4, color: "red !important" }}
            onClick={() => selectSetting(UserSettingsMenuItems[7])}
          >
            <ListItemIcon>
              <DeleteForeverOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Eliminar Cuenta" />
          </ListItemButton>
        </List>
      </Collapse>
    </React.Fragment>
  );
};

export default ManageAccountMenu;
