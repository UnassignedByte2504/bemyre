import React, { useEffect, useState } from "react";

export const AsideLandingPgRegister = () =>{
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return (
        <div className="formAsideLp text-white my-5 mx-2">
        <div>
            <h2 className="text-white text-center my-5">¿Eres músico?</h2>
            <p className="text-white text-center my-5">Conecta con melómanos como tu y forma tu propia banda</p>
        </div>

        <form>
            <div className="m-3"><strong>Registrate y obten una cuenta gratuita</strong></div>
            <div className="m-3 d-flex">
                <input type="text" className="form-control me-2" id="firstName" aria-describedby="firstname" placeholder="Nombre" onChange={(event)=> setName(event.target.value)}/>
                <input type="text" className="form-control ms-2" id="lastName" aria-describedby="lastname" placeholder="Apellidos" onChange={(event)=> setSurname(event.target.value)}/>

            </div>
            <div className="m-3">
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" onChange={(event)=> setEmail(event.target.value)}/>
            </div>
            <div className="m-3">
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(event)=> setPassword(event.target.value)}/>
            </div>
            </form>
            <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary mb-3">Registrar</button>
            </div>
        </div>
    )
}