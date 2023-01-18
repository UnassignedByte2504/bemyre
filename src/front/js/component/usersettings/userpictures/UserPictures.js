import React from "react";
import { useState, useContext, useMemo, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../../store/appContext";
//MUI imports >>>
import {
  Box,
  Typography,
  Button,
  Grid,
  Paper,
  TextField,
  InputAdornment,
  IconButton,
  Circular,
  Slider,
  Divider,
} from "@mui/material";
//MUI imports <<<
//components >>>
import SettingHeader from "../aux/SettingHeader.jsx";
import ImgsForm from "./aux/ImgsForm.jsx";
import FlexCentered from "../../styledcomponents/FlexCentered.jsx";
//components <<<

//logic imports >>>
import { getUserSettings } from "../UserSettingsData.js";
import { updateUserImgs } from "../UserSettingsData.js";
import { clearUserImgs } from "../UserSettingsData.js";
//logic imports <<<
const UserPictures = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const prevProfileImg = sessionStorage.getItem('settings_profile_img')
  const prevPortraitImg = sessionStorage.getItem('settings_portrait_img')
  const current_user = sessionStorage.getItem("current_user")
    ? sessionStorage.getItem("current_user")
    : false;
  const userparams = params.username;

  const submitImgs = () => {};
  useEffect(() => {
    getUserSettings();
  }, []);

  useEffect(() => {
    if (current_user !== userparams) {
      window.location.href = `/user/${current_user}`;
    }
  }, []);
 
  return (
    <Box className="UserPicturesWrapper">
      {/* <SettingHeader title="Cambiar Imagen de Perfil y Portada" /> */}
      <Box className="UImgsBody">
          <Typography variant='h3' className='mt-3 mb-3'>Cambiar Imagen de Perfil y Portada</Typography>
          <FlexCentered>
          <Typography variant="h5">Vista Previa</Typography>
        </FlexCentered>
        <Divider
          sx={{
            width: "100%",
            marginBottom: ".5rem",
          }}
        />
        <Box className="ImgsPreview">
          <Box className="PortraitImg">
            <img className="PortImgPrev" src={prevPortraitImg} alt="preview" />
          </Box>
          <Box className="ImgandForm">
            <Box className="ProfileImg">
              <img className="ProImgPrev" src={prevProfileImg} alt="preview" />
            </Box>
            <ImgsForm />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            width: "50%",
            marginTop: "1rem",
          }}
        >
          <Button
            onClick={() => updateUserImgs(current_user)}
            variant="contained"
            sx={{
              backgroundColor: "#8bc34a",
            }}
          >
            <strong>Guardar</strong>
          </Button>
          <Button
            onClick={() => clearUserImgs(current_user)}
            variant="contained"
            sx={{
              backgroundColor: "#f44336",
            }}
          >
            <strong>Descartar</strong>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default UserPictures;
