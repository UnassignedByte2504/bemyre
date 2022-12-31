import React, { useState, useContext } from "react";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Button,
  useTheme,
  Avatar,
  Divider,
  InputBase,
} from "@mui/material";
import { Context } from "../../../store/appContext.js";
import {
  LightModeOutlined,
  DarkModeOutlined,
  Search,
  SettingsOutlined,
  ArrowDropDownOutlined,
} from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
// >>> components imports
import { AvatarUser } from "./drawercomponents/AvatarUser.jsx";
import { ListItem } from "./drawercomponents/ListItem.jsx";
import UserPages from "./drawercomponents/UserPages.jsx";
import DrawerFooter from "./drawercomponents/DrawerFooter.jsx";
import { globalPages } from "./NavbarData.js";
import FlexBetween from "../../styledcomponents/FlexBetween.jsx";
// <<< components imports

const DrawerComp = () => {
  const { store, actions } = useContext(Context);
  const [openDrawer, setOpenDrawer] = useState(false);
  const theme = useTheme();
  return (
    <>
      <Drawer
        className="SideBarMaster"
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: "200px",
            backgroundColor: theme.palette.background.drawer,
          },
        }}
      >
        <Box className="SideBarWrapper">
          <AvatarUser />
          <Divider className="DividerMain" />
          <FlexBetween
            backgroundColor={theme.palette.background.alt}
            borderRadius="9px"
            gap="3rem"
            p="0.1rem 1.5rem"
          >
            <InputBase placeholder="Search..." />
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween>
          <List
            className="SidebarMs"
            sx={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: theme.palette.sidebar.main,
            }}
          >
            {globalPages.map((value, index) => (
              <ListItem value={value} key={index} to={value} />
            ))}
          </List>
        </Box>
        <Divider className="DividerMain mb-3" />
        {store?.current_user ? (
          <>
            <UserPages /> <Divider className="DividerMain my-3" />
          </>
        ) : null}

        <DrawerFooter />
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon color="white" />
      </IconButton>
    </>
  );
};

export default DrawerComp;
