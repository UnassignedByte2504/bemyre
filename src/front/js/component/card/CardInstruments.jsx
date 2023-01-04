//Import React
import React from "react";

//Import Materials

import { Box, Divider, Typography } from "@mui/material";


export const CardInstruments = () =>{

    return(

        <Box className="cardinstrument">
            <Box className="textcardinstrument textinstrument">
            <Typography className="mt-4">
                CUERDA
            </Typography>
            <Typography className="typoinstrument mt-4">
                <strong>GUITARRA</strong>
            </Typography>
            </Box>
        </Box>

    )
}