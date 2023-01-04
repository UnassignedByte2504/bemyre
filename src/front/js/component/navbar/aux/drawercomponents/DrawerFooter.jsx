import React from "react";
import { useDispatch } from "react-redux"; // Sends color mode to state reducer
import { setMode } from "../../../../state"; //changes color mode
import { LightModeOutlined, DarkModeOutlined } from "@mui/icons-material";

import { Box, IconButton, Typography, useTheme } from "@mui/material";
import FlexBetween from "../../../styledcomponents/FlexBetween.jsx";
import FlexCentered from "../../../styledcomponents/FlexCentered.jsx";
const DrawerFooter = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  return (
    <FlexCentered className="mx-2">
      {/* <IconButton onClick={() => dispatch(setMode())}>
        {theme.palette.mode === "dark" ? (
          <DarkModeOutlined sx={{ fontSize: "25px" }} />
        ) : (
          <LightModeOutlined sx={{ fontSize: "25px" }} />
        )}
      </IconButton> */}
    </FlexCentered>
  );
};

export default DrawerFooter;
