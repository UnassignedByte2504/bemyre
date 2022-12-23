import React from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import "../../../styles/home.css";

import { useTheme } from "@mui/material"
export const LandingJumbo = () => {
const theme = useTheme();
    return(
        <div className=" d-flex w-100 fullheight justify-content-center align-items-center text-center" style={{backgroundImage: `url(https://wallpaperaccess.com/full/1569753.jpg)`, backgroundSize:'cover', backgroundPosition: 'center', maxwidth: '100vw', height: '100%'}}>
            <div>
            <h2 className="mb-5 titleJumbotron container">Conoce la música en vivo de tu localidad y conecta con músicos</h2>
            <Link to='/signup' className="Link"><Button variant="contained" className="btn-std text-white" sx={{backgroundColor:"#ff8531"}}>Join Today</Button></Link>
            </div>
        </div>
    )
}