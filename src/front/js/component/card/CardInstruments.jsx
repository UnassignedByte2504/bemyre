//Import React
import React from "react";

//Import Materials

import { Box, Divider, Typography } from "@mui/material";


export const CardInstruments = ({img, type, name}) =>{

    return(

        <Box className="cardinstrument">
            <Box className="textcardinstrument textinstrument">
            <Typography className="mt-4">
                {type}
            </Typography>
            <Typography className="typoinstrument mt-4">
                <strong>{name}</strong>
            </Typography>
            </Box>
        </Box>





    )
}
