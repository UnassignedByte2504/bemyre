//Import React
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

//Import Materials
import { Alert, Box, Snackbar, Stack, Typography } from "@mui/material";

export const AlertSignUp = () =>{

    useEffect(()=>{
        localStorage.removeItem("alert_signup")
    },[])
        
    const alert_signup = localStorage.getItem("alert_signup")

    return (
        <Box>
            {alert_signup ?
            <Stack>
                <Alert severity="error">{alert_signup}</Alert>
            </Stack>
            :
            null
            }
        </Box>
    )
}