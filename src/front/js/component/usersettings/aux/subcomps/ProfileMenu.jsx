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
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ConnectWithoutContactOutlinedIcon from '@mui/icons-material/ConnectWithoutContactOutlined';

const ProfileMenu = () => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <React.Fragment>
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <ManageAccountsIcon/>
          </ListItemIcon>
          <ListItemText primary="Perfil de Usuario" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <ModeEditIcon />
              </ListItemIcon>
              <ListItemText primary="Editar Informacion" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <AccountBoxIcon />
              </ListItemIcon>
              <ListItemText primary="Imagen de Perfil y Portada" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <ConnectWithoutContactOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Redes Sociales" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
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