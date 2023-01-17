import React from "react";
import "../../styles/bandprofile.css";
import { HeaderProfile } from "../component/HeaderProfile";

export const BandProfile = () => {
  return (
    <>
      <div className="container"> 
        <HeaderProfile name="Black Bone Tango" city="Málaga" />
        <div className="row">
          {/* /////COLUMNA IZQUIERDA CON CARD Y ANUNCIOS /////*/}
          <div className="col-md-4">
            <div className="row"></div>
            <div className="row">
              {/* Aquí irá el componente AdvertProfile */}
            </div>
          </div>
          {/* /////COLUMNA DERECHA CON AUDIOS Y RESTO DE APARTADOS /////*/}
          <div className="col-md-8">
            <div className="row">
              {/* Aquí irán los componentes  audio (xej 2)  */}
            </div>
            <h2>Nuestro estilo de música y trayectoria</h2>
            <div className="row"></div>
          </div>
        </div>
      </div>
    </>
  );
};
