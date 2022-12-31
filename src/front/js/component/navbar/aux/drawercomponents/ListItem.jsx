import { useTheme, Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

import { iconsArray } from "../NavbarData";
import { filterIcon } from "../NavbarData";

export const ListItem = ({ value, to}) => {
  const theme = useTheme();

  const rawPath = to;
  const path = rawPath?.toLowerCase().replace(/\s+/g, "");
  return (
    <Box
      className="ListItemWrapper"
      sx={{
        backgroundColor: theme.palette.background.listItem,
      }}
    >
      <Link
        className={theme.palette.mode === "dark" ? "LinkDark" : "LinkLight"}
        to={path}
      >
        <Box className="ListItem">
          <Box className="ItemIcon">{filterIcon(value)}</Box>
          <Box className="ItemName">
            <Typography
              variant="h5"
              className={
                theme.palette.mode === "dark" ? "ListTextDark" : "ListTextLight"
              }
            >
              {value}
            </Typography>
          </Box>
        </Box>
      </Link>
    </Box>
  );
};
