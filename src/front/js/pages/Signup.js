import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/index.css"
import imgSignup from '../../img/Bemyre_signup.jpg'
import Logo from '../../img/Bemyre_logo.png'
import { Button } from "@mui/material";
import TextField from '@mui/material/TextField';


export const Signup = () =>{
     const [name, setName] = useState('')
     const [surname, setSurname] = useState('')
     const [email, setEmail] =useState('')
     const [password, setPassword] =useState('')


    return (
        <div className="backgroundSignup">
            <div className="cardSignup">
                <div className="imgSignup imgSignupDisplayNone">
                    <img src={imgSignup} alt='Bemyre concert'/>
                </div>

                <div className="textSignup">
                    <img src={Logo}/>

                    <div className="textArea">
                        <TextField type='text'  id="firstName" label="Nombre" variant="standard" className="m-1" onChange={(event)=> setName(event.target.value)}/>
                        <TextField type='text'  id="secondName" label="Apellidos" variant="standard" className="m-1" onChange={(event)=> setSurname(event.target.value)}/>
                        <TextField type='email'  id="email" label="Email" variant="standard" className="m-1" onChange={(event)=> setEmail(event.target.value)}/>
                        <TextField type='password'  id="password" label="Password" variant="standard" className="m-1" onChange={(event)=> setPassword(event.target.value)}/>
                        <div className="d-flex justify-content-center"><Button variant="contained" className="buttonSignup" sx={{backgroundColor: "#e0934f"}}>Signup</Button></div>
                        <hr/>
                        <div className="rrssSignup colorFb">
                            <img src="https://assets.stickpng.com/images/60fea6c83d624000048712b7.png"/>
                            <p className="">Sign Up with Facebook</p>
                        </div>
                        <div className="rrssSignup ">
                            <img src="https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png"/>
                            <p className="text-black">Sign Up with Google</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}