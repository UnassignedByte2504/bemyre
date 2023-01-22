import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import MicExternalOnIcon from '@mui/icons-material/MicExternalOn';
import guitar from "../../../../img/instruments/guitaricon.png"
import bateria from "../../../../img/instruments/bateriaicon.png"
import bajo from "../../../../img/instruments/bajoicon.png"
import saxo from "../../../../img/instruments/saxoicon.png"

export const CreateCasting = () => {

  const [open, setOpen] = useState({
    bandcreation: false,
    singer: false,
    guitar: false,
    bass: false,
    drums: false, 
    otros: false
  })

    //Values
    const [values, setValues] = useState({
      name: "",
      description: "",
      music_genre: "",
      band_members: "",
    });
    console.log(values)
    //Handle value change
    const handleValueChange = (e) => {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      });
    };
  return (
  <Box>
    {/* Condicional si hay banda */}
    {1+1==2? 
    <Box className="d-flex flex-column align-items-center">
      <Typography variant="h3" className="my-3">Crea tu banda para abrir castings</Typography>
      <Divider className="mb-3" sx={{width:"75%"}}/>
    {!open.bandcreation? 
      <Button variant="contained" className="text-white bubbles" onClick={()=>setOpen({bandcreation:true})}><strong>Crear Banda</strong></Button>

    :

    <Box className="w-100 d-flex flex-column align-items-center">
    <Typography className="my-3" variant="h3">
      Crear una banda
    </Typography>
    <Divider className="w-75 mb-3" />
    <TextField
      className="my-2 w-75"
      type="text"
      name="name"
      variant="outlined"
      label="Nombre de la banda"
      onChange={handleValueChange}
    />
    <TextField
      className="my-2 w-75"
      type="text"
      name="description"
      variant="outlined"
      label="Descripcion de la banda"
      onChange={handleValueChange}
    />
    <TextField
      className="my-2 w-75"
      type="text"
      name="music_genre"
      variant="outlined"
      label="Genero musical "
      onChange={handleValueChange}
    />
      <TextField
      className="my-2 w-75"
      type="text"
      name="band_members"
      variant="outlined"
      label="Miembros de la banda"
      onChange={handleValueChange}
    />
    <Button
      className="my-3 bubbles w-75"
      variant="contained"
      aria-label="upload picture"
      component="label"
    >
      Subir imagen banda <PhotoCameraIcon className="ms-2" />
      <input hidden accept="image/*" type="file" />
    </Button>
    <Button
      variant="contained"
      color="success"
      className="text-white my-3"
    >
      <strong>Crear banda</strong>
    </Button>
  </Box>



    }
    </Box>
    :
    <Box className="d-flex flex-column align-items-center">
      <Typography variant="h3" className="my-3">Abrir Castings</Typography>
      <Divider sx={{width: "75%"}}/>

    <Box className="d-flex ">
      <Button className="d-flex flex-column bubbles m-3" onClick={()=>setOpen({singer:true})}>
        <MicExternalOnIcon sx={{fontSize: "3rem"}} className="text-white"/>
        <Typography className="text-white"><strong>Cantante</strong></Typography>
      </Button>

      <Button className="d-flex flex-column bubbles m-3" onClick={()=>setOpen({guitar:true})}>
        <img src={guitar} className='iconcasting'/>
        <Typography className="text-white"><strong>Guitarrista</strong></Typography>
      </Button>

      <Button className="d-flex flex-column bubbles m-3" onClick={()=>setOpen({drums:true})}>
        <img src={bateria} className='iconcasting'/>
        <Typography className="text-white"><strong>Bateria</strong></Typography>
      </Button>

      <Button className="d-flex flex-column bubbles m-3" onClick={()=>setOpen({bass:true})}>
        <img src={bajo} className='iconcasting'/>
        <Typography className="text-white"><strong>Bajo</strong></Typography>
      </Button>

      <Button className="d-flex flex-column bubbles m-3" onClick={()=>setOpen({otros:true})}>
        <img src={saxo} className='iconcasting'/>
        <Typography className="text-white"><strong>Otros</strong></Typography>
      </Button>

    </Box>
    {/* Inicio condicionales de instrumentos */}
    <Box className="w-75">
    {open.singer? 
    <Box className="d-flex flex-column align-items-center">
      <Typography variant="h3" className="my-2">Crear casting para cantante</Typography>
      <Box className="d-flex flex-column w-100">
        <TextField className="my-2" label=''/>
        <TextField className="my-2" label=''/>
        <TextField className="my-2" label=''/>
      </Box>
      <Button className="w-100 bubbles text-white"><strong>Crear casting</strong></Button>
    </Box>
    :null}

    {open.guitar? 
    <Box className="d-flex flex-column align-items-center">
      <Typography variant="h3" className="my-2">Crear casting para guitarrista</Typography>
      <Box className="d-flex flex-column w-100">
        <TextField className="my-2" label=''/>
        <TextField className="my-2" label=''/>
        <TextField className="my-2" label=''/>
      </Box>
      <Button className="w-100 bubbles text-white"><strong>Crear casting</strong></Button>
    </Box>
    :null}

    {open.bass? 
    <Box className="d-flex flex-column align-items-center">
      <Typography variant="h3" className="my-2">Crear casting para bajista</Typography>
      <Box className="d-flex flex-column w-100">
        <TextField className="my-2" label=''/>
        <TextField className="my-2" label=''/>
        <TextField className="my-2" label=''/>
      </Box>
      <Button className="w-100 bubbles text-white"><strong>Crear casting</strong></Button>
    </Box>
    :null}

    {open.drums? 
    <Box className="d-flex flex-column align-items-center">
      <Typography variant="h3" className="my-2">Crear casting para bateria</Typography>
      <Box className="d-flex flex-column w-100">
        <TextField className="my-2" label=''/>
        <TextField className="my-2" label=''/>
        <TextField className="my-2" label=''/>
      </Box>
      <Button className="w-100 bubbles text-white"><strong>Crear casting</strong></Button>
    </Box>
    :null}

    {open.otros? 
    <Box className="d-flex flex-column align-items-center">
      <Typography variant="h3" className="my-2">Crear casting para otros instrumentos</Typography>
      <Box className="d-flex flex-column w-100">
        <TextField className="my-2" label=''/>
        <TextField className="my-2" label=''/>
        <TextField className="my-2" label=''/>
      </Box>
      <Button className="w-100 bubbles text-white"><strong>Crear casting</strong></Button>
    </Box>
    :null}
    </Box>

    </Box>
    }


  </Box>
  );
};
