import React from "react";
import { Box, useTheme, Button, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import { Link } from "react-router-dom";

export const CardsButton = ({ title, minWidth, to }) => {
  const theme = useTheme();
  return (
    <>
      <CardActions>
      <Link to={to} className="Link">
        <Button
          sx={{ 
            display: "flex",
            flexDirection: "column",
            alignSelf: "flex-end",
          }}
          variant="contained"
        >
          <Typography
            sx={{
              color: theme.palette.buttons.card,
              fontWeight: "500",
              textAlign: "center",
              // fontFamily: "Inter, sans serif",
              minWidth: { minWidth },
            }}
          >
            {title}
          </Typography>
        </Button>
        </Link>
      </CardActions>
    </>
  );
};
