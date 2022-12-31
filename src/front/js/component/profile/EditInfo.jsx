//Import React
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

//Import Material
import { Box, Button, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

//Import styles
import "../../../styles/index.css"
import { Context } from "../../store/appContext";

export const EditInfo = ({to, currentUser, userName}) =>{
    const {store, actions} = useContext(Context)
    return(
        <>
        { currentUser === userName ?   
        <Typography className="text-end pt-3 mb-2">
            <Link className="text-white text-decoration-none" to={to}>
            Editar Información <EditIcon />
            </Link>
        </Typography>
        : null}
      </>
    )
}