import { Box, Typography } from "@mui/material";
import React from "react";

import header from "../../../img/bemyre-faq.jpg"
import "../../../styles/index.css"
export const HeaderFaq = () => {

    return (

        <Box 
        className="headerfaq d-flex align-items-center mb-4" 
        style={{
            backgroundColor:"white",
            backgroundImage: `url(${header} )`,
            backgroundPosition:"center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
        }}
        >
            <Typography variant="h2" className="text-black ms-5">
                Preguntas Frecuentes
            </Typography>
        
        </Box>
    )
}