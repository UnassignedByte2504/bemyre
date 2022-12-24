import React from "react";
import "../../styles/home.css";

// Import components
import { LandingJumbo } from "../component/jumbotron/landingjumbo";
import { AsideLandingPgRegister } from "../component/asides/AsideLandingPgRegister";
import { Musicians } from "../component/Musicians";

export const LandingPage = () => {
  const date = new Date();

  const day = date.getDate();
  const month = date.getMonth() + 1;

  return (
    <div>
      <LandingJumbo />
      <h2 className="text-white container mt-5">
        Conciertos en Sevilla esta semana{" "}
        <i className="far fa-calendar-alt"></i>
        {day}/{month} - <i className="far fa-calendar-alt"></i>
        {day + 7}/{month}
      </h2>
      <div className="d-flex container changetoflexwrap flex-nowrap justify-content-center">
        <Musicians />
        <AsideLandingPgRegister />
      </div>
    </div>
  );
};
