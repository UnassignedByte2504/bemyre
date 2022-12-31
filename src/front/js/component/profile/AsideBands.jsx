//Import React
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//Import Material
import { Box, Button, Typography } from "@mui/material";

//Import styles
import "../../../styles/index.css"

export const AsideBands = () =>{
    return(
        <Box className="cardbandasleft">
            <Typography variant="h3" className="text-center mb-3">Hay 3 bandas que buscan guitarrista</Typography>
            <Button variant="contained">Unete a esas bandas</Button>
        </Box>
    )
}