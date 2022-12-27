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

import FlexBetween from "../styledcomponents/FlexBetween.jsx";
import logo from "../../../img/Bemyre_logo.png";
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
import { useDispatch } from "react-redux"; // Sends color mode to state reducer
import { setMode } from "../../state"; //changes color mode
import FlexCentered from "../styledcomponents/FlexCentered.jsx";
function Navbar() {
  const dispatch = useDispatch();
  const theme = useTheme();
  return (
    <AppBar
      className="sticky-top grad-red-light mb-3"
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
          <FlexCentered>
            <Link className="Link" to="/">
              <IconButton>
                <img src={logo} alt="logo" height="50px" width="50px" />
              </IconButton>
            </Link>
          </FlexCentered>
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
              <DarkModeOutlined sx={{ fontSize: "25px" }} />
            ) : (
              <LightModeOutlined sx={{ fontSize: "25px" }} />
            )}
          </IconButton>
          <Link to="/sandbox" className="Link">
            <IconButton>
              <Typography variant="h4" color="red">
                SandBox
              </Typography>
            </IconButton>
          </Link>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
