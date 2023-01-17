import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const DeleteAccount = () => {
  const [btn, setBtn] = useState(false);
  const userName = sessionStorage.getItem("current_user");
  const token = sessionStorage.getItem("access_token");

  const borrarCuenta = async (username, password) => {
    const options = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
        "Content-Type": "application/json",
      },
      body: `{
            "password": "${password}",
            "feedback": "${reason}"
      }`,
    };
    await fetch(
      `${process.env.BACKEND_URL}/api/settings/${username}/deleteaccount`,
      options
    )
      .then((response) => response.json())
      .then((result) =>
        sessionStorage.setItem("cuenta_borrada", "Cuenta borrada con exito")
      )
      .then(sessionStorage.clear())
      .then((window.location.href = "/home"));
  };

  const fieldNames = {
    contraseña: "contraseña",
    confirmarContraseña: "confirmarContraseña",
  };

  const [values, setValues] = useState({
    contraseña: "",
    confirmarContraseña: "",
    reason: "",
  });
  // console.log("reason",values.reason, "password", values.contraseña);

  const handleValueChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Box>
      <Box className="d-flex flex-column align-items-center">
        <Typography variant="h3" className="my-3">
          Borrar cuenta
        </Typography>
        <Divider style={{ width: "70%" }} />
      </Box>
      {btn == false ? (
        <Box className="d-flex justify-content-center align-items-center">
          <Button
            className="mt-5"
            color="error"
            variant="contained"
            onClick={() => setBtn(true)}
          >
            Borrar Cuenta
          </Button>
        </Box>
      ) : (
        <Box className="d-flex flex-column align-items-center">
          <Typography className="mt-3 mb-3 text-center" variant="h5">
            Confirma contraseña para borrar cuenta
          </Typography>
          <TextField
            onChange={handleValueChange}
            label="Contraseña"
            name="contraseña"
            className="w-75 mb-3"
          />
          <TextField
            label="Confirmar contraseña"
            className="w-75 mb-3"
            name="confirmarContraseña"
            onChange={handleValueChange}
          />
          <Button
            onClick={() => borrarCuenta(userName, values.contraseña)}
            variant="contained"
            color="error"
          >
            Eliminar cuenta
          </Button>

          {/* Formulario */}
          <Box className="w-100 d-flex flex-column mt-3 align-items-center">
            <Typography className="my-3" variant="h3">
              ¿Por qué borraste tu cuenta?
            </Typography>
            <TextField
              className=" w-75"
              multiline
              variant="outlined"
              label="Cuentanos el motivo"
              name="reason"
              onChange={handleValueChange}
            />
            <Button
              color="error"
              variant="contained"
              className="text-white my-3"
              onClick={() => feedBack(userName, values.reason)}
            >
              Enviar
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default DeleteAccount;
