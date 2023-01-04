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

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import PasswordOutlinedIcon from "@mui/icons-material/PasswordOutlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import PrivacyTipOutlinedIcon from "@mui/icons-material/PrivacyTipOutlined";

const ManageAccountMenu = () => {
  const [open, setOpen] = useState(true);

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
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <PasswordOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Modificar Contraseña" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <PrivacyTipOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Ajustes de Privacidad" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4, color: "red !important" }}>
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
