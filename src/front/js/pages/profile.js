// Nota importante: Las imagenes son ejemplos, debemos vincularlas con la base de datos para que el usuario pueda añadir sus propias imagenes
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CardProfile } from "../component/card/CardProfile.jsx";


export const Profile = () =>{

    return(
        <>
        {/* Inicio header */}
        <div className="position-relative position-relative-example headerProfile">
            <div className=" d-flex flex-column align-items-end justify-content-center my-3 container nameHeader" >
                    <div><h1>Robert Russell</h1></div>
                    <div><p>Localidad: Sevilla</p></div>
            </div>
            <div className="cardprofile"><CardProfile  /></div>

            <div className="reproductor container">
                <div><iframe style={{borderRadius:"12px"}} src="https://open.spotify.com/embed/track/5rhMc6IqSdVsyF7bRieSTc?utm_source=generator" width="100%" height="152"  allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>
                <div><iframe style={{borderRadius:"12px"}} src="https://open.spotify.com/embed/track/6dFn6my1sHK2bcf23GlHwM?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>
            </div>
        </div>

        {/* Mobile */}
        <div className=" container d-flex justify-content-center flex-wrap">
            <div className="cardprofilemobile"><CardProfile  /></div>

            <div className="reproductormobile container">
                <div><iframe style={{borderRadius:"12px"}} src="https://open.spotify.com/embed/track/5rhMc6IqSdVsyF7bRieSTc?utm_source=generator" width="100%" height="152"  allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>
                <div><iframe style={{borderRadius:"12px"}} src="https://open.spotify.com/embed/track/6dFn6my1sHK2bcf23GlHwM?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>
            </div>        
        </div> 
        </>
    )
}