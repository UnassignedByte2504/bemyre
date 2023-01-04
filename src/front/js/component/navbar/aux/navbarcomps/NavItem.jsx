import { useTheme, Box, Typography, Button, IconButton } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

import { iconsArray } from "../NavbarData";
import { filterIcon } from "../NavbarData";

const NavItem = ({value}) => {
  const theme = useTheme();

  const rawPath = value;
  const path = rawPath?.toLowerCase().replace(/\s+/g, "");
  return (
    <>
      <Link className="Link" to={path}>
        <Button><IconButton>{filterIcon(value)}</IconButton>{value}</Button>
      </Link>
    </>
  );
};

export default NavItem;
