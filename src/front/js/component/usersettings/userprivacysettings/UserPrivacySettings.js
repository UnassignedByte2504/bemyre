import React, { useState } from "react";
import Switch from "@mui/material/Switch";
import { Box, Button, Divider, TextField, Typography } from "@mui/material";
const UserPrivacySettings = () => {
  const [seguidores, setSeguidores] = useState(true);
  const [contacto, setContacto] = useState(true);
  const [ciudad, setCiudad] = useState(true);

  return (
    <>
      <Box className="d-flex flex-column align-items-center">
        <Typography variant="h3" className="my-3">
          Ajustes de Privacidad
        </Typography>
        <Divider style={{ width: "70%" }} />
      </Box>

      {seguidores == false ? (
        <Box className="d-flex justify-content-center mt-4 align-items-center w-100">
          <Typography>Mostrar perfil a no seguidores</Typography>
          <Switch
            defaultChecked
            color="success"
            onChange={() => setSeguidores(true)}
          />
        </Box>
      ) : (
        <Box className="d-flex justify-content-center mt-4 align-items-center w-100">
          <Typography>Mostrar perfil a no seguidores</Typography>
          <Switch
            defaultChecked
            color="success"
            onChange={() => setSeguidores(false)}
          />
        </Box>
      )}

      {contacto == false ? (
        <Box className="d-flex justify-content-center mt-4 align-items-center w-100">
          <Typography>Mostrar datos de contacto</Typography>
          <Switch
            defaultChecked
            color="success"
            onChange={() => setContacto(true)}
          />
        </Box>
      ) : (
        <Box className="d-flex justify-content-center mt-4 align-items-center w-100">
          <Typography>Mostrar datos de contacto</Typography>
          <Switch
            defaultChecked
            color="success"
            onChange={() => setContacto(false)}
          />
        </Box>
      )}

      {ciudad == false ? (
        <Box className="d-flex justify-content-center mt-4 align-items-center w-100">
          <Typography>Mostrar ciudad</Typography>
          <Switch
            defaultChecked
            color="success"
            onChange={() => setCiudad(true)}
          />
        </Box>
      ) : (
        <Box className="d-flex justify-content-center mt-4 align-items-center w-100">
          <Typography>Mostrar ciudad</Typography>
          <Switch
            defaultChecked
            color="success"
            onChange={() => setCiudad(false)}
          />
        </Box>
      )}
      <Box className="d-flex justify-content-center mt-4">
        <Button variant="contained" color="success">Guardar Configuración</Button>
      </Box>
    </>
  );
};

export default UserPrivacySettings;
