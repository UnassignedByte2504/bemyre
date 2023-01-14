//Import React
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//Import Material
import {
  Box,
  Button,
  Divider,
  Rating,
  TextField,
  Typography,
} from "@mui/material";

//Import styles
import "../../../styles/index.css";

//Import Images
import Guitarra from "../../../img/instruments/guitarra-sm.jpg";
import Bajo from "../../../img/instruments/bajo-sm.jpg";
import Acordeon from "../../../img/instruments/acordeon-sm.jpg";
import Saxo from "../../../img/instruments/saxo-sm.jpg";
import Trompeta from "../../../img/instruments/trompeta-sm.jpg";
import Violin from "../../../img/instruments/violin-sm.jpg";
import Violonchello from "../../../img/instruments/violonchello-sm.jpg";
import Xilofono from "../../../img/instruments/xilofono-sm.jpg";
import Vient from "../../../img/instruments/viento.jpg";
import Bateria from "../../../img/instruments/bateria-sm.jpg";
import Cuerda from "../../../img/instruments/cuerda.jpg";
import { FireExtinguisherRounded } from "@mui/icons-material";

//Import Components
import { EditInfo } from "./EditInfo.jsx";
import { CardInstruments } from "../card/CardInstruments.jsx";

export const MyInstruments = ({ currentUser, userName }) => {
  const [open, setOpen] = useState(false);
  const instrumentsProfile = async(username, fieldtomodify, newvalue) =>{
    const options = {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
        "Content-Type": "application/json",
      },
      body: `{
            "${fieldtomodify}": "${newvalue}"
      }`,
    }
    await fetch(
      `${process.env.BACKEND_URL}/api/settings/${username}/instrumentosprofile`,
      options
    )
      .then((response) => response.json())
      .then((result) =>
        sessionStorage.setItem(
          "cambios_instrumentos",
          "Información de instrumentos cambiad con éxito"
        )
      );
  };

  const [value1, setValue1] = React.useState(2);
  const [value2, setValue2] = React.useState(2);
  const [value3, setValue3] = React.useState(2);

  const fieldNames = {
    instrumento1: "instrumento1",
    instrumento2: "instrumento2",
    instrumento3: "instrumento3",
    stars1: value1,
    stars2: value2,
    stars3: value3,
  };
  
  const [values, setValues] = useState({
    instrumento1: "instrumento1",
    instrumento2: "instrumento2",
    instrumento3: "instrumento3",
    stars1: value1,
    stars2: value2,
    stars3: value3,

  
  });

  const handleValueChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  

  return (
    <Box className=" mt-5">
      <Typography
        variant="h3"
        sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
      >
        <strong>Mis instrumentos</strong>
        {open == false ? (
          <Button onClick={() => setOpen(true)}>
            <EditInfo currentUser={currentUser} userName={userName} />
          </Button>
        ) : (
          <Button onClick={() => setOpen(false)}>
            <EditInfo currentUser={currentUser} userName={userName} />
          </Button>
        )}
      </Typography>
      <Divider 
      className="mb-4"/>
      {open == false ? (
        <>
        {1+1==2? 
        <CardInstruments
          name="GUITARRA"
          type="Cuerda"
          img={Guitarra} //Aqui traeriamos como variable
        />
        :null}
        {/* {!instrument2==null? 
        <CardInstruments
          name="GUITARRA"
          type="VIENTO"
          img={Guitarra} //Aqui traeriamos como variable
        />
        :null}
        {!instrument3==null? 
        <CardInstruments
          name="GUITARRA"
          type="VIENTO"
          img={Guitarra} //Aqui traeriamos como variable
        />
        :null} */}
        </>
      ) : (
        <Box>
        <Box className="d-flex align-items-center w-100">
          <TextField 
          className="w-100 me-3 mt-3"
          variant="outlined" 
          label="instrumento 1"
          onChange={handleValueChange}
          name="instrumento1"
          />
          <Box>
            <Typography component="legend" className="mt-3">Nivel instrumento</Typography>
            <Rating
                name="value1"
                value={value1}
                onChange={(event, newValue) => {
                setValue1(newValue);
                }}
            />
          </Box>
        </Box>

        <Box className="d-flex align-items-center w-100">
          <TextField 
          className="w-100 me-3 mt-3"
          variant="outlined" 
          label="instrumento 2"
          onChange={handleValueChange}
          name="instrumento2"
          />
          <Box>
            <Typography component="legend" className="mt-3">Nivel instrumento</Typography>
            <Rating
              name="simple-controlled"
              value={value2}
              onChange={(event, newValue) => {
                setValue2(newValue);
              }}
            />
          </Box>
        </Box>

        <Box className="d-flex align-items-center w-100">
          <TextField 
          className="w-100 me-3 mt-3"
          variant="outlined" 
          label="instrumento 3"
          onChange={handleValueChange}
          name="instrumento3"
          />
          <Box>
            <Typography component="legend" className="mt-3">Nivel instrumento</Typography>
            <Rating
              name="simple-controlled"
              value={value3}
              onChange={(event, value3) => {
                setValue3(value3);
              }}
            />
          </Box>
        </Box>

          <Button 
            onClick={() =>
                instrumentsProfile(
                userName,
                fieldNames,
                values
              )
            }   
          variant="contained" className="mt-2 bubbles w-100">
            Guardar cambios
          </Button>

        </Box>
      )}
    </Box>
  );
};
