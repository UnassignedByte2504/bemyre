import React from "react";
import { Box, useTheme, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";


const LinkButton = ({ title, to, variant, }) => {
  const theme = useTheme();

  return (
    <>
      <Link to={to} className="Link">
        <Button
         
          variant={variant}
          sx={{
            textTransform: "none",
            backgroundColor: theme.palette.buttons.main,
          }}
          onClick={() => console.log(theme.palette.mode)}
        >
          <Typography
            sx={{
              color: theme.palette.text.main,
            }}
            
          >
            {title}
          </Typography>
        </Button>
      </Link>
    </>
  );
};

export default LinkButton;
