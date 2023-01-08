import React from "react";
import { Link, useParams } from "react-router-dom";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Button from '@mui/material/Button';
import { Box, Divider, Typography, useTheme } from "@mui/material";

export const CardProfile = ({first_name, last_name, description, profilePicture}) =>{
    const params = useParams();
    const username = params.username;
    const currentUser = sessionStorage.getItem("current_user");  
    const theme = useTheme()

    return (
        <Box className="card m-2 shadow" sx={{
            color: theme.palette.text.card,
            backgroundColor: theme.palette.background.card
        }}>
            <img src={profilePicture}className="card-img-top" alt="..."/>
            <Box className="card-body">
                <Typography variant="h5"className="card-title text-center" >{first_name} {last_name}</Typography>
                <Typography className="card-text" >{description}</Typography>
                <Typography><strong>Leer más</strong> <ArrowForwardIcon /></Typography>
                <Divider className="mb-3"></Divider>
                <Typography><strong>Instrumentos: </strong>Guitarra y piano</Typography>
                <Typography><strong>Influencias:</strong> Nirvana, Guns&Roses, Def Leppard and Metallica</Typography>
                
                {username==currentUser? 
                null
                :

                <Box className="d-flex justify-content-evenly">
                    <Link className="btn"><Button  variant="contained" sx={{color: "white", backgroundColor : "red"}}>Seguir</Button></Link>
                    <Link className="btn"><Button  variant="contained" sx={{color: "white", backgroundColor : "red"}}>Contactar</Button></Link>
                </Box>}
            </Box>
        </Box>
    )

}