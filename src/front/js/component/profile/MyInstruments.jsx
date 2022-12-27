//Import React
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//Import Material
import { Box, Button, Divider, Typography } from "@mui/material";

//Import styles
import "../../../styles/index.css"

//Import Components
import { EditInfo } from "./EditInfo.jsx";

export const MyInstruments = () =>{
    return(
        <Box className="mt-5">
        <Typography variant="h3" sx={{display: "flex", justifyContent: 'space-between' }}><strong>Mis instrumentos</strong><EditInfo/></Typography>
        <Divider />
        <Typography className="my-3">Guitarra acustica</Typography>
        </Box>
    )
}