import * as React from "react";
import { useState, useEffect, useMemo } from "react";
import {
  AppBar,
  Button,
  Box,
  Tab,
  Tabs,
  Typography,
  IconButton,
  InputBase,
  Toolbar,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import DrawerComp from "./aux/DrawerComp.js";
import FlexBetween from "../styledcomponents/FlexBetween.jsx";
import logo from "../../../img/Bemyre_logo.png";
import {
  LightModeOutlined,
  DarkModeOutlined,
  Search,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux"; // Sends color mode to state reducer
import { setMode } from "../../state"; //changes color mode
import FlexCentered from "../styledcomponents/FlexCentered.jsx";
function Navbar() {
  const dispatch = useDispatch();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <AppBar className="sticky-top grad-red-light mb-3">
      <Toolbar
        sx={{
          justifyContent: "space-between",
        }}
      >
        {/* start */}
        {isMobile ? (
          <>
            <FlexBetween>
              <FlexCentered>
                <Link className="Link" to="/home">
                  <IconButton>
                    <img
                      className="shadow BeLogo"
                      src={logo}
                      alt="logo"
                      height="50px"
                      width="50px"
                    />
                  </IconButton>
                </Link>
              </FlexCentered>
              <Typography variant="h4"></Typography>
            </FlexBetween>
            <DrawerComp />
          </>
        ) : (
          <>
            {" "}
            <FlexBetween>
              <FlexCentered>
                <Link className="Link" to="/home">
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
            </FlexBetween>
          </>
        )}
        {/* Left side  >>> */}

        {/* end */}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
