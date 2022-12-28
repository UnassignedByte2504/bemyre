//Import React
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//Import Material
import { Box, Button, Divider, Typography } from "@mui/material";

//Import styles
import "../../../styles/index.css"

//Import Components
import { EditInfo } from "./EditInfo.jsx";

export const Influences = ({currentUser, userName}) =>{
    return(
        <Box className="mt-5">
            <Typography variant="h3" sx={{display: "flex", justifyContent: 'space-between' }}>
                <strong>Mis Influencias</strong><EditInfo currentUser={currentUser} userName={userName}/></Typography>
            <Divider />
            <Box className="videoinfluencias d-flex flex-wrap justify-content-evenly my-3">
                <iframe
                className="my-3"
                src="https://www.youtube.com/embed/aIHF7u9Wwiw"
                ></iframe>
                <iframe
                className="my-3"
                src="https://www.youtube.com/embed/6B3YwcjQ_bU"
                ></iframe>
            </Box>
        </Box>




    )
}