//Import React
import React from "react";

//Import Materials
import { Box, Divider, Typography } from "@mui/material";

//Import Images
import Guitar from "../../../img/instruments/guitarra-sm.jpg"
import Bajo from "../../../img/instruments/bajo-sm.jpg"
import Acordeon from "../../../img/instruments/acordeon-sm.jpg"
import Saxo from "../../../img/instruments/saxo-sm.jpg"
import Trompeta from "../../../img/instruments/trompeta-sm.jpg"
import Violin from "../../../img/instruments/violin-sm.jpg"
import Violonchello from "../../../img/instruments/violonchello-sm.jpg"
import Xilofono from "../../../img/instruments/xilofono-sm.jpg"
import Vient from "../../../img/instruments/viento.jpg"
import Bateria from "../../../img/instruments/bateria-sm.jpg"
import Cuerda from "../../../img/instruments/cuerda.jpg"


export const CardInstruments = ({img, type, name}) =>{

    return(

        <Box className="cardinstrument"       
            sx={{
            position: 'relative',
            overflow: 'hidden'
          }}>
            <Box className="textcardinstrument textinstrument" 
                sx={{
                height: "100%",
                width: "100%",
                position: "absolute",
                zIndex: "2",
                }}
            >
            <Typography className="mt-4">
                {type}
            </Typography>
            <Typography className="typoinstrument mt-4">
                <strong>{name}</strong>
            </Typography>
            </Box>
            <Box>
                <img src={img} style={{maxWidth: '100%'}}/>
            </Box>
        </Box>





    )
}
