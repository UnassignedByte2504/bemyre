import React from "react";
import { Box, useTheme, Button, Typography } from "@mui/material";
import { Link } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";

export const CardsButton = ({ title, minWidth }) => {
  const theme = useTheme();
  return (
    <>
      <CardActions>
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
              fontFamily: "Roboto",
              minWidth: { minWidth },
            }}
          >
            {title}
          </Typography>
        </Button>
      </CardActions>
    </>
  );
};
