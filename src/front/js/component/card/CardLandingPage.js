import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";


export const CardLandingPage = () =>{

    return (
        <Box className="card m-2 text-black" sx={{width: "16rem"}}>
            <img src="https://s1.abcstatics.com/media/cultura/2020/04/21/iggy-U30860708087yTY-620x349@abc.jpeg" className="card-img-top" alt="..."/>
            <Box className="card-body">
                <Typography variant="h5" className="card-title text-center">Nombre grupo</Typography>
                <Typography className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</Typography>
                <Link className="btn btn-primary">Go somewhere</Link>
            </Box>
        </Box>
    )

}