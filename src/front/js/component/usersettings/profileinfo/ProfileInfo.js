//Import React
import React, { useContext, useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";

//Import Materials
import {
  accordionActionsClasses,
  Alert,
  Box,
  Button,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

//Import styles
import "../../../../styles/index.css";
import { SelectSettings } from "../../Dropdown/SelectSettings.jsx";
import { Context } from "../../../store/appContext";
import { AlertEditInfo } from "../../Alerts/AlertEditInfo.jsx";

const ProfileInfo = () => {
  const { actions, store } = useContext(Context);
  const userName = sessionStorage.getItem("current_user");
  const maxLengthText = 240;

  const editInfoPersonal = async (username, fieldtomodify, newvalue) => {
    const options = {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
        "Content-Type": "application/json",
      },
      body: `{
            "${fieldtomodify}": "${newvalue}"
      }`,
    };
    await fetch(
      `${process.env.BACKEND_URL}/api/settings/${username}/editinfo`,
      options
    )
      .then((response) => response.json())
      .then((result) =>
        sessionStorage.setItem(
          "cambios_info_personal",
          "Información cambiada con éxito"
        )
      );
  };

  useEffect(() => {
    actions.fetchUser(userName);
  }, []);

  useEffect(() => {
    sessionStorage.removeItem("cambios");
  }, []);

  const [open, setOpen] = useState({
    first_name: false,
    last_name: false,
    description: false,
  });

  const fieldNames = {
    first_name: "first_name",
    last_name: "last_name",
    description: "description",
  };

  //Values
  const [values, setValues] = useState({
    first_name: "",
    last_name: "",
    description: "",
  });
  // console.log(values);

  //Handle value change
  const handleValueChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Box className="editinfobox">
      <Typography variant="h3" className="mt-4 mb-3">
        Editar Información
      </Typography>
      <Divider className="mb-4" style={{ width: "75%" }}></Divider>

      {/* Condicional abierto o cerrado */}
      {!open.first_name ? (
        <Box className="datainfosettings w-75 my-3">
          <Typography>
            <strong>{store.resultados.first_name}</strong>
          </Typography>
          <Button
            onClick={() => setOpen({ first_name: true })}
            className="btnsettingsrrss"
          >
            <strong>Editar</strong>
          </Button>
        </Box>
      ) : (
        <Box className="datainfosettings w-75 my-3">
          <TextField
            onChange={handleValueChange}
            label="Cambiar Nombre"
            className="textfieldnodata"
            name="first_name"
          />
          <Box className="d-flex">
            <Button
              variant="contained"
              color="success"
              className="mx-1 text-white"
              onClick={() =>
                editInfoPersonal(
                  userName,
                  fieldNames.first_name,
                  values.first_name
                )
              }
            >
              <strong>Modificar</strong>
            </Button>
            <Button
              variant="contained"
              color="error"
              className="ms-1"
              onClick={() => setOpen({ first_name: false })}
            >
              <strong>Cancelar</strong>
            </Button>
          </Box>
        </Box>
      )}

      {!open.last_name ? (
        <Box className="datainfosettings w-75 my-3">
          <Typography>
            <strong>{store.resultados.last_name}</strong>
          </Typography>
          <Button
            onClick={() => setOpen({ last_name: true })}
            className="btnsettingsrrss"
          >
            <strong>Editar</strong>
          </Button>
        </Box>
      ) : (
        <Box className="datainfosettings w-75 my-3">
          <TextField
            onChange={handleValueChange}
            label="Cambiar Apellidos"
            className="textfieldnodata"
            name="last_name"
          />
          <Box className="d-flex">
            <Button
              variant="contained"
              color="success"
              className="mx-1 text-white"
              onClick={() =>
                editInfoPersonal(
                  userName,
                  fieldNames.last_name,
                  values.last_name
                )
              }
            >
              <strong>Modificar</strong>
            </Button>
            <Button
              variant="contained"
              color="error"
              className="ms-1"
              onClick={() => setOpen({ last_name: false })}
            >
              <strong>Cancelar</strong>
            </Button>
          </Box>
        </Box>
      )}

      {!open.description ? (
        <Box className="datainfosettings w-75 my-3">
          <Typography>
           {store?.resultados.description ? <strong>{store?.resultados.description}</strong>: <Typography><strong>Añadir descripcion</strong></Typography>}
          </Typography>
          <Button
            onClick={() => setOpen({ description: true })}
            className="btnsettingsrrss"
          >
            <strong>Editar</strong>
          </Button>
        </Box>
      ) : (
        <Box className="datainfosettings w-75 my-3">
          <TextField
            onChange={handleValueChange}
            label="Cambiar Descripcion"
            className="textfieldnodata"
            name="description"
            inputProps={{ maxLength: 240 }}
            helperText={`${values.description?.length}/${maxLengthText}`}
          />
          <Box className="d-flex">
            <Button
              variant="contained"
              color="success"
              className="mx-1 text-white"
              onClick={() =>
                editInfoPersonal(
                  userName,
                  fieldNames.description,
                  values.description
                )
              }
            >
              <strong>Modificar</strong>
            </Button>
            <Button
              variant="contained"
              color="error"
              className="ms-1"
              onClick={() => setOpen({ description: false })}
            >
              <strong>Cancelar</strong>
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default ProfileInfo;
