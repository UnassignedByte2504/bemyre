import React from "react";
import { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

//Import materials
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import { Container } from "@mui/material";
import TodayIcon from "@mui/icons-material/Today";

// Import components
import { LandingJumbo } from "../component/jumbotron/landingjumbo";
import { AsideLandingPgRegister } from "../component/asides/AsideLandingPgRegister";
import { Musicians } from "../component/Musicians";
import { Spain } from "../component/Spain.jsx";
import { CallToAction } from "../component/CallToAction/CallToAction.jsx";

export const LandingPage = () => {
  const { actions, store } = useContext(Context);
  const [activePage, setActivePage] = useState()
  const date = new Date();

  const day = date.getDate();
  const month = date.getMonth() + 1;

  useEffect(() => {
    const currentPath = window.location.pathname;
    setActivePage(currentPath)
    actions.setLocation(currentPath)
  }, [store.currentPath])
  
  return (
    <Box>
      {sessionStorage.getItem('current_user') ? <CallToAction/> : <LandingJumbo /> }
      <Container maxWidth="xl">
        <Typography variant="h2" className=" mt-5 ms-5">
          Conciertos en Sevilla esta semana{" "}
          <i className="far fa-calendar-alt"></i>
          {day}/{month} - <i className="far fa-calendar-alt"></i>
          {day + 7}/{month}
        </Typography>
        <Box className="d-flex container changetoflexwrap flex-nowrap justify-content-center">
          <Musicians />
        </Box>
      </Container>
    </Box>
  );
};
