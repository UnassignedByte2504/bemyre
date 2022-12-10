import React from "react";

export const AsideLandingPgRegister = () =>{

    return (
        <div className="formAsideLp text-white my-5 mx-2">
        <div>
            <h2 className="text-white text-center my-5">¿Eres músico?</h2>
            <p className="text-white text-center my-5">Conecta con melómanos como tu y forma tu propia banda</p>
        </div>

        <form>
            <div className="m-3"><strong>Registrate y obten una cuenta gratuita</strong></div>
            <div className="m-3 d-flex">
                <input type="text" className="form-control me-2" id="firstName" aria-describedby="firstname" placeholder="Nombre"/>
                <input type="text" className="form-control ms-2" id="lastName" aria-describedby="lastname" placeholder="Apellidos"/>

            </div>
            <div className="m-3">
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"/>
            </div>
            <div className="m-3">
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
            </form>
            <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary mb-3">Registrar</button>
            </div>
        </div>
    )
}