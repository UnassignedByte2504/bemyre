import * as React from "react";
import { useState, useEffect, useMemo, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux"; // Sends color mode to state reducer
import { Context } from "../../store/appContext.js";
import {
  AppBar,
  Button,
  Typography,
  IconButton,
  InputBase,
  Toolbar,
  useMediaQuery,
  useTheme,
  Box,
  ButtonGroup,
} from "@mui/material";
import {
  LightModeOutlined,
  DarkModeOutlined,
  Search,
} from "@mui/icons-material";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import DrawerComp from "./aux/DrawerComp.js";
import FlexBetween from "../styledcomponents/FlexBetween.jsx";
import FlexCentered from "../styledcomponents/FlexCentered.jsx";
import FlexEvenly from "../styledcomponents/FlexEvenly.jsx";
import NavItem from "./aux/navbarcomps/NavItem.jsx";
import logo from "../../../img/Bemyre_logo.png";
import { setMode } from "../../state"; //changes color mode
import { globalPages, filterIcon } from "./aux/NavbarData.js";
import UserBar from "../userbar/UserBar.js";
import Inbox from "../../pages/Inbox.js";

function Navbar() {
  const { actions, store } = useContext(Context);
  const currentPath = store?.currentPath;
  const loginPath = "/login";
  const signupPath = "/signup";
  const dispatch = useDispatch();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [activePage, setActivePage] = useState();

  const getPath = (value) => {
    const rawPath = value;
    const path = rawPath?.toLowerCase().replace(/\s+/g, "");
    return path;
  };

  const rockFm = () => {
    return (
      <div>
        <div className="ng-app-embedded">
          <div
            ui-view="true"
            className="microsite embedded-radio-player"
            data-playerwidth="340px"
            data-playertype="web_embedded"
            data-playstation="rockfmes"
            data-autoplay="true"
            data-apikey="df04ff67dd3339a6fc19c9b8be164d5b5245ae93"
          />
        </div>
        <noscript>
          &lt;a href="https://www.radio.es/s/rockfmes" target="_blank"&gt;Rock
          FM en radio.es&lt;/a&gt;
        </noscript>
      </div>
    );
  };
  useEffect(() => {
    const currentPath = window.location.pathname;
    setActivePage(currentPath);
    actions.setLocation(currentPath);
  }, [store.currentPath]);
  return (
    <AppBar className="sticky-top grad-redv2 mb-3">
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
              <ButtonGroup
                className="NavButtonGroup"
                variant="contained"
                aria-label="text button group"
                sx={{
                  background: "none",
                  boxShadow: "none",
                }}
              >
                {globalPages.map((value, index) => (
                  <Button
                    key={index}
                    variant="contained"
                    sx={{
                      background: "none",
                      boxShadow: "none",
                    }}
                  >
                    <Link className="LinkNav" to={getPath(value)}>
                      {filterIcon(value)}
                      {value}
                    </Link>
                  </Button>
                ))}
              </ButtonGroup>
              {store?.current_user ? (
                <UserBar />
              ) : currentPath === loginPath ? null : (
                <Link className="Link" to={"/login"}>
                  <Button
                    variant="contained"
                    sx={{
                      fontWeight: "600",
                      textTransform: "none",
                    }}
                  >
                    <PersonOutlinedIcon className="me-2" /> Login
                  </Button>
                </Link>
              )}
              {/* 
              <IconButton onClick={() => dispatch(setMode())}>
                {theme.palette.mode === "dark" ? (
                  <DarkModeOutlined sx={{ fontSize: "25px" }} />
                ) : (
                  <LightModeOutlined sx={{ fontSize: "25px" }} />
                )}
              </IconButton> */}
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
