import { Box, Divider, TextField, Typography, Button } from "@mui/material";
import React, { useState } from "react";

//Import Icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LanguageIcon from "@mui/icons-material/Language";
import EditIcon from "@mui/icons-material/Edit";
import TiktokIcon from "../../../../img/RRSS/tiktok_logo.png";
import SoundcloudIcon from "../../../../img/RRSS/soundcloud.png";
import SnapchatIcon from "../../../../img/RRSS/snapchat.png";
import SpatialAudioOffIcon from "@mui/icons-material/SpatialAudioOff";
import SpotifyIcon from "../../../../img/RRSS/Spotify.png";

const UserArtistProfile = () => {

  const addMedia = async (username, fieldNames, newValues) => {
    const [hasMedia, setHasMedia] = useState();
    const [method, setMethod] = useState();

    await fetch(`${process.env.BACKEND_URL}/api/settings/${username}/hasmedia`)
      .then((res) => res.json())
      .then((data) => {
        setHasMedia(data.hasMedia);
      })
      .catch((err) => console.log(err));
    if (hasMedia === false) {
      setMethod("POST");
    } else {
      setMethod("PUT");
    }
    const options = {
      method: method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body:`"${fieldNames}": "${newValues}"`
    }
    await fetch(`${process.env.BACKEND_URL}/api/settings/${username}/hasmedia`, options)
    .then((response)=>response.json())
    .then((result)=>sessionStorage.setItem("user_media", "Actualización de user media "))

  }


  // const perfilArtista = async (username, fieldNames, newValues) => {
  //   const options = {
  //     method: "PUT",
  //     headers: {
  //       Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
  //       "Content-Type": "application/json",
  //     },
  //     body: `{
  //           "${fieldNames}": "${newValues}",

  //     }`,
  //   };
  //   await fetch(
  //     `${process.env.BACKEND_URL}/api/settings/${username}/addmedia`,
  //     options
  //   )
  //     .then((response) => response.json())
  //     .then((result) =>
  //       sessionStorage.setItem("user_media", "Actualización de user media ")
  //     );
  // };

  const [open, setOpen] = useState({
    youtube: false,
  });

  const fieldNames = {
    video1: "video1",
    video2: "video2",
    spotify1: "spotify1",
    spotify2: "spotify2",
    soundcloud1: "soundcloud1",
    soundcloud2: "soundcloud2",
    // instrument1: "instrument1",
    // instrument2: "instrument2",
  };

  const [values, setValues] = useState({
    video1: "video1",
    video2: "video2",
    spotify1: "spotify1",
    spotify2: "spotify2",
    soundcloud1: "soundcloud1",
    soundcloud2: "soundcloud2",
    // instrument1: "instrument1",
    // instrument2: "instrument2",
  });

  console.log(values);
  const handleValueChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Box className="d-flex flex-column align-items-center w-100">
      <Box className="d-flex flex-column align-items-center w-100">
        <Typography variant="h3" className="my-3">
          Perfil Artista
        </Typography>
        <Divider className="w-75" />
      </Box>

      {/* Condicional Youtube */}
      {1 + 1 == 2 ? (
        <>
          <Typography variant="h5" className="mt-3">
            Mis videos en YouTube
          </Typography>
          <Box className="d-flex justify-content-center align-items-center w-100">
            <YouTubeIcon className="me-3" sx={{ fontSize: "2.5rem" }} />
            <TextField
              onChange={handleValueChange}
              className="w-75 my-3"
              label="Video 1"
              name="video1"
            />
          </Box>
          <Box className="d-flex justify-content-center align-items-center w-100">
            <YouTubeIcon className="me-3" sx={{ fontSize: "2.5rem" }} />
            <TextField
              onChange={handleValueChange}
              className="w-75 mb-3"
              label="Video 2"
              name="video2"
            />
          </Box>
        </>
      ) : null}

      {/* Condicional spotify */}
      {1 + 1 == 2 ? (
        <>
          <Typography variant="h5">Mis canciones en Spotify</Typography>
          <Box className="d-flex justify-content-center align-items-center w-100">
            <img src={SpotifyIcon} className="logorrsssettings2r" />
            <TextField
              onChange={handleValueChange}
              className="w-75 ms-2 my-3"
              label="Canción Spotify 1"
              name="spotify1"
            />
          </Box>
          <Box className="d-flex justify-content-center align-items-center w-100">
            <img src={SpotifyIcon} className="logorrsssettings2r me-2" />
            <TextField
              onChange={handleValueChange}
              className="w-75 mb-3 ms-2"
              label="Canción Spotify 2"
              name="spotify2"
            />
          </Box>
        </>
      ) : null}

      {/* Condicional spotify */}
      {1 + 1 == 2 ? (
        <>
          <Typography variant="h5">Mis canciones en Soundcloud</Typography>
          <Box className="d-flex justify-content-center align-items-center w-100">
            <img src={SoundcloudIcon} className="logorrsssettings2r" />
            <TextField
              onChange={handleValueChange}
              className="w-75 ms-2 my-3"
              label="Canción Soundcloud 1"
              name="soundcloud1"
            />
          </Box>
          <Box className="d-flex justify-content-center align-items-center w-100">
            <img src={SoundcloudIcon} className="logorrsssettings2r me-2" />
            <TextField
              onChange={handleValueChange}
              className="w-75 mb-3 ms-2"
              label="Canción Soundcloud 2"
              name="soundcloud2"
            />
          </Box>
        </>
      ) : null}

      {/* Condicional Instrumentos
      {1 + 1 == 2 ? (
        <>
          <Typography variant="h5">Mis instrumentos</Typography>
          <Box className="d-flex justify-content-center align-items-center w-100">
            <SpatialAudioOffIcon sx={{ fontSize: "2rem" }} />
            <TextField
              onChange={handleValueChange}
              className="w-75 ms-2 my-3"
              label="Mi instrumento 1"
              name="instrumento1"
            />
          </Box>
          <Box className="d-flex justify-content-center align-items-center w-100">
            <SpatialAudioOffIcon sx={{ fontSize: "2rem" }} />
            <TextField
              onChange={handleValueChange}
              className="w-75 mb-3 ms-2"
              label="Mi instrumento 2"
              name="instrumento2"
            />
          </Box>
        </>
      ) : null} */}

      <Button
        onClick={() => addMedia(userName, fieldNames, values)}
        variant="contained"
        color="success"
        className="mb-5"
      >
        Enviar
      </Button>
    </Box>
  );
};

export default UserArtistProfile;
