//Import React
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//Import Material
import { Box, Button, Divider, Typography } from "@mui/material";

//Import styles
import "../../../styles/index.css"

//Import Components
import { EditInfo } from "./EditInfo.jsx";

export const StyleAndMusicalCareer = () =>{
    return(
        <Box className="mt-5">
        <Typography variant="h3" sx={{display: "flex", justifyContent: 'space-between' }}><strong>Mi estilo de música y trayectoria</strong><EditInfo/></Typography>
        <Divider />
        <Box className="musicstyle my-3">
            <Box className="bubbles">
                <strong>Rock</strong>
            </Box>
            <Box className="bubbles">
                <strong>Metal</strong>
            </Box>
            <Box className="bubbles">
                <strong>Indie</strong>
            </Box>
        </Box>
        <Typography>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book. It has
        survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of
        Lorem Ipsum
        </Typography>
        </Box>




    )
}