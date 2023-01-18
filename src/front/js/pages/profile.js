// Nota importante: Las imagenes son ejemplos, debemos vincularlas con la base de datos para que el usuario pueda añadir sus propias imagenes
//Imports React
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import SocketContext from "../state/socketContext.js";
//Imports material
import { Box, margin } from "@mui/system";
import { CardProfile } from "../component/card/CardProfile.jsx";
import { Button, Slider, Typography, useTheme } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';


//Import Components
import { AsideBands } from "../component/profile/AsideBands.jsx";
import { EditInfo } from "../component/profile/EditInfo.jsx";
import { SpotifyProfile } from "../component/profile/SpotifyProfile.jsx";
import { MyInstruments } from "../component/profile/MyInstruments.jsx";
import { StyleAndMusicalCareer } from "../component/profile/StyleAndMusicalCareer.jsx";
import { Influences } from "../component/profile/Influences.jsx";
import { Equipment } from "../component/profile/Equipment.jsx";
import { Singer } from "../component/typeofuser/Singer.jsx";
import { CardInstruments } from "../component/card/CardInstruments.jsx";
import CreateIcon from '@mui/icons-material/Create';
import exampleimg from "../../img/example_img_profile.jpg"
import exampleheader from "../../img/exampleheader.jpg"

//Import Images
import Guitarra from "../../img/instruments/guitarra-sm.jpg"
import Bajo from "../../img/instruments/bajo-sm.jpg"
import Acordeon from "../../img/instruments/acordeon-sm.jpg"
import Saxo from "../../img/instruments/saxo-sm.jpg"
import Trompeta from "../../img/instruments/trompeta-sm.jpg"
import Violin from "../../img/instruments/violin-sm.jpg"
import Violonchello from "../../img/instruments/violonchello-sm.jpg"
import Xilofono from "../../img/instruments/xilofono-sm.jpg"
import Vient from "../../img/instruments/viento.jpg"
import Bateria from "../../img/instruments/bateria-sm.jpg"
import Cuerda from "../../img/instruments/cuerda.jpg"
import { FireExtinguisherRounded } from "@mui/icons-material";

//Function

export const Profile = ({reRender}) => {
  const [isLoading, setIsLoading] = useState(true)
  const Socket = useContext(SocketContext)
  const theme = useTheme();
  const { actions, store } = useContext(Context);
  const params = useParams();
  const username = params.username;
  const currentUser = sessionStorage.getItem("current_user");
  const profilePicture = store.resultados.profile_img ? store.resultados.profile_img : exampleimg;
  const portraitPicture = store.resultados.portrait_img ? store.resultados.portrait_img : exampleheader;
  useEffect(() => {
    actions.fetchUser(username);
  }, [store.reRender]);
  const [open, setOpen] = useState(false)
  const [ejeY, setEjeY] = useState(-40);


  return (
    <>

      <Box 
      className="padreheader"
      height='30vh'
      width='100vw'
      sx={{
        position: 'relative',
        overflow: 'hidden'
      }}
      >
        <Box className='hijotexto'
          sx={{
            height: "100%",
            width: "100%",
            position: "absolute",
            zIndex: "2",
          }}
          > 
            <Typography variant="h1">
              {store.resultados.first_name} {store.resultados.last_name}
            </Typography>
            <Typography>
              Sevilla, Spain
            </Typography>
        </Box >
        <Box 
        sx={{position: "absolute",
        zIndex:"3",
        margin: "15px"
        }}
        >
        <Button onClick={(()=> setOpen(true))}><CreateIcon />Editar posición</Button>
        </Box>
        <Box className='hijoimg'
              sx={{
                height: "100%",
                width: "100%",
                position: "absolute",
                zIndex: "0",
              }}
        >
          <img 
            style={{transform: `translateY(${ejeY}%)` }}
            className="imagenheader"
            src={portraitPicture}
            alt='Imagen header'
          />
        </Box>
      </Box>

      {/* Contenedor de contenido */}
      <Box className="cardandreproductor container mb-4">
        {/* Left side  */}

        <Box className="leftside">
          <Box className="cardprofile">
            {/* Import Card Profile */}
            <CardProfile
              first_name={store.resultados.first_name}
              last_name={store.resultados.last_name}
              description={store?.resultados.description}
              profilePicture={profilePicture}
              reRender={store.reRender}
            />
          </Box>
          {/* Import aside Bands */}
          <AsideBands />
        </Box>

        {/* Right side */}

        <Box
          className="rightside mt-5 p-4"
          sx={{
            backgroundColor: theme.palette.background.card,
          }}
        >
          {open===true? 
          <Box className="mb-3">
          <Typography className="">Mover imagen encabezado</Typography>
          <Box className="d-flex">
          <Slider
          defaultValue={70}
          aria-label="Small"
          valueLabelDisplay="auto"
          min={-40}
          max={0}
          onChange={(e, value) => setEjeY(value)}
        />
            <Button onClick={(()=> {setEjeY(0); setOpen(false)})}><CloseIcon/></Button>
            <Button onClick={(()=>setOpen(false))}><CheckIcon/></Button>
          </Box>
        </Box>
          :null}
          {/* Condicional ? Spotify */}
          {1 + 1 === 2 ? (
            <SpotifyProfile currentUser={currentUser} userName={username} />
          ) : null}

          {/* Condicional Mis instrumentos */}
          {1 + 1 === 2 ? (
            <MyInstruments currentUser={currentUser} userName={username} />
          ) : null}
          {/* <CardInstruments
          name="GUITARRA"
          type="VIENTO"
          img={Guitarra}  //Aqui traeriamos como variable

          /> */}

          {/* Condicional Carrera musical y estilo */}
          {1 + 1 === 2 ? (
            <StyleAndMusicalCareer
              currentUser={currentUser}
              userName={username}
            />
          ) : null}

          {/* Condicional Mis influencias */}
          {1 + 1 === 2 ? (
            <Influences currentUser={currentUser} userName={username} />
          ) : null}

          {/* Condicional Mi equipo */}
          {1 + 1 === 2 ? (
            <Equipment currentUser={currentUser} userName={username} />
          ) : null}
          <CardInstruments
          name="Guitarra"
          type="Cuerda"
          img={Guitarra}  //Aqui traeriamos como variable

          />
        </Box>
      </Box>
    </>
  );
};
