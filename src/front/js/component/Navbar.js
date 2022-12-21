import * as React from "react";
import {
  AppBar,
  Button,
  Box,
  Typography,
  IconButton,
  InputBase,
  Toolbar,
  Menu,
  MenuItem,
} from "@mui/material";

import FlexBetween from "./FlexBetween.jsx";

import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  Search,
  SettingsOutlined,
  ArrowDropDownOutlined,
} from "@mui/icons-material";

import { Link } from "react-router-dom";

// Theme related imports
import { useTheme } from "@mui/material";
//Theme related imports
import { useDispatch } from "react-redux";// Sends color mode to state reducer
import { setMode } from "../state";//changes color mode
function Navbar() {
  const dispatch = useDispatch();
  const theme = useTheme();
  return (
    <AppBar
      sx={{
        position: "static",
        background: "none",
        boxShadow: "none",
      }}
      className="sticky-top"
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
        }}
      >
        {/* Left side  >>> */}
        <FlexBetween>
          <IconButton onClick={() => console.log("Open/Close Sidebar")}>
            <MenuIcon />
          </IconButton>
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
        </FlexBetween>
        {/* <<< Left side */}

        {/* Right side  >>> */}
        <FlexBetween gap="1.5rem">
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlined sx={{fontSize:"25px"}} />
            ) : <LightModeOutlined sx={{fontSize:"25px"}}/>}
          </IconButton>
          <Link to="/brainstorm"><IconButton>
            <Typography variant="h4" color="red">BRAIN STORM</Typography>
            </IconButton></Link>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
