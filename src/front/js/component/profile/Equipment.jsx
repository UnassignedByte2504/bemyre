//Import React
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//Import Material
import { Box, Button, Divider, Typography } from "@mui/material";

//Import styles
import "../../../styles/index.css"

//Import Components
import { EditInfo } from "./EditInfo.jsx";
import { CardInstruments } from "../card/CardInstruments.jsx";

export const Equipment = ({currentUser, userName}) =>{
    return(
        <Box className="mt-5">
        <Typography variant="h3" sx={{display: "flex", justifyContent: 'space-between' }}><strong>Mi Equipo</strong><EditInfo currentUser={currentUser} userName={userName}/></Typography>
        <Divider />
        <ul className="m-3">
            <li className="my-1">
            <strong>Instrumentos/ modelox/ categoria/Estilo</strong>
            </li>
            <li className="my-1">
            <strong>Instrumentos/ modelox/ categoria/Estilo</strong>
            </li>
            <li className="my-1">
            <strong>Instrumentos/ modelox/ categoria/Estilo</strong>
            </li>
            <li className="my-1">
            <strong>Instrumentos/ modelox/ categoria/Estilo</strong>
            </li>
        </ul>
        <Box className="miequipo m-3">
            <img src="https://images.unsplash.com/photo-1617160895032-11179689e7b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" />
            <img src="https://www.muslands.com/732-thickbox_default/frontman-10g-amplificador-guitarra-electrica-fender.jpg" />
            <img src="https://hoygrabo.com/wp-content/uploads/2019/02/microfono-condensador.jpg" />
            <img src="https://16nou.com/wp-content/uploads/2019/01/Focusrite-scarlett-2i2-2nd-gen.jpg" />
        </Box>
        <CardInstruments/>

        </Box>




    )
}