import React from "react";
import "../../styles/home.css";

// Import components
import { LandingJumbo } from "../component/jumbotron/landingjumbo";
import { AsideLandingPgRegister } from "../component/asides/AsideLandingPgRegister";


export const LandingPage = () =>{


    return(
        <div>
            <LandingJumbo />
            <AsideLandingPgRegister />
        </div>
        )
}