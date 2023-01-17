import React, { useEffect, useState } from "react";

//Import Materials
import { Box, Button, TextField, Typography } from "@mui/material";



export const BandsCreation = () => {

  const [values, setValues] = useState({
    name: "",
    description: "",
    music_genre: "",
    band_members: "",
  });
   console.log(values)
  const handleValueChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <Box className="d-flex flex-column align-items-center">
      <Typography className="mt-3 mb-3 text-center" variant="h3">
        Crear Banda
      </Typography>
      <TextField
        onChange={handleValueChange}
        label="Nombre Banda"
        name="name"
        className="w-75 mb-3"
      />
      <TextField
        label="Descripción banda"
        className="w-75 mb-3"
        name="description"
        onChange={handleValueChange}
      />
      <TextField
        label="Estilo de grupo"
        className="w-75 mb-3"
        name="music_genre"
        onChange={handleValueChange}
      />
      <TextField
        label="Miembros banda"
        className="w-75 mb-3"
        name="band_members"
        onChange={handleValueChange}
      />
      <Button variant="contained" color="success" className="text-white">
        <strong>Crear Banda</strong>
      </Button>
    </Box>
  );
};
