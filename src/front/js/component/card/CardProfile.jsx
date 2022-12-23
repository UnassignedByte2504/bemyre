import React from "react";
import { Link } from "react-router-dom";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Button from '@mui/material/Button';

export const CardProfile = (first_name) =>{

    return (
        <div className="card m-2 text-black" >
            <img src="https://images.unsplash.com/photo-1550560888-1009463ef168?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title text-center">Robert Russell</h5>
                <p className="card-text">La música es el motor de mi vida, es lo que me hace ser libre y disfrutar. </p>
                <p><strong>Leer más</strong> <ArrowForwardIcon /></p>
                <hr/>
                <p><strong>Instrumentos: </strong>Guitarra y piano</p>
                <p><strong>Influencias:</strong> Nirvana, Guns&Roses, Def Leppard and Metallica</p>
                <div className="d-flex justify-content-evenly">
                    <Link className="btn"><Button  variant="contained" sx={{color: "white", backgroundColor : "red"}}>Seguir</Button></Link>
                    <Link className="btn"><Button  variant="contained" sx={{color: "white", backgroundColor : "red"}}>Contactar</Button></Link>
                </div>
            </div>
        </div>
    )

}