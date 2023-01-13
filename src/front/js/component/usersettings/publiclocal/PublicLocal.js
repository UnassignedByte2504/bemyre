import React from "react";
import { useFormik } from "formik";
import {createLocalSchema} from "../../../esquemas/index"
import { Box } from "@mui/material";
import { Typography } from "@mui/material";



export const PublicLocal = () => {
  return (
    <Box sx={{marginX: "5rem", marginTop: "2rem", textAlign:"center"}}>
       <Typography variant="h3">Publica el estilo de tu local y conecta con tu público</Typography>
    </Box>
 
    );
};
