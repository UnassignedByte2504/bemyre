import React from "react";
import "../../styles/home.css";

//Import materials
import { Typography } from "@mui/material";
import {Box} from "@mui/material";
import { Container } from "@mui/material";
import TodayIcon from '@mui/icons-material/Today';

// Import components
import { LandingJumbo } from "../component/jumbotron/landingjumbo";
import { AsideLandingPgRegister } from "../component/asides/AsideLandingPgRegister";
import { Musicians } from "../component/Musicians";

export const LandingPage = () => {
  const date = new Date();

  const day = date.getDate();
  const month = date.getMonth() + 1;

  return (
    <Box>
      <LandingJumbo />
      <Container  maxWidth="xl">
      <Typography variant="h2" className=" mt-5 ms-5">
        Conciertos en Sevilla esta semana{" "}
        <i className="far fa-calendar-alt"></i>
        {day}/{month} - <i className="far fa-calendar-alt"></i>
        {day + 7}/{month}
      </Typography>
      <Box className="d-flex container changetoflexwrap flex-nowrap justify-content-center">
        <Musicians />
        <AsideLandingPgRegister />
      </Box>
      </Container>
    </Box>
  );
};
