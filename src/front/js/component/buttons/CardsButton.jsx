import React from "react";
import { Box, useTheme, Button, Typography } from "@mui/material";
import { Link } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";

export const CardsButton = ({ title }) => {
  const theme = useTheme();
  return (
    <>
      <CardActions className="d-flex justify-content-center">
        <Button size="large">
          <Typography
            sx={{
              color: theme.palette.buttons.card,
              fontWeight: "500",
              fontFamily: "Roboto",
            }}
          >
            {title}
          </Typography>
        </Button>
      </CardActions>
    </>
  );
};
