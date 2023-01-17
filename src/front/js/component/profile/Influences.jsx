//Import React
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//Import Material
import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";

//Import styles
import "../../../styles/index.css";

//Import Components
import { EditInfo } from "./EditInfo.jsx";

export const Influences = ({ currentUser, userName }) => {
  const [open, setOpen] = useState(false);

  const editInfluences = async (username, fieldtomodify, newvalue) => {
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
      `${process.env.BACKEND_URL}/api/settings/${username}/influences`,
      options
    )
      .then((response) => response.json())
      .then((result) =>
        sessionStorage.setItem(
          "cambios_influences",
          "Información de redes sociales cambiada con éxito"
        )
      );
  };

  const fieldNames = {
    video1: "video1",
    video2: "video2",
  };

  const [values, setValues] = useState({
    video1: "video1",
    video2: "video2",
  });

  const handleValueChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <Box className="mt-5">
      <Typography
        variant="h3"
        sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
      >
        <strong>Mis Influencias</strong>
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
      <Divider />

      {open == false ? (
        <Box className="videoinfluencias d-flex flex-wrap justify-content-evenly my-3">
          <iframe
            className="my-3"
            src="https://www.youtube.com/embed/aIHF7u9Wwiw"
          ></iframe>
          <iframe
            className="my-3"
            src="https://www.youtube.com/embed/6B3YwcjQ_bU"
          ></iframe>
        </Box>
      ) : (
        <Box className="d-flex flex-column w-100">
          <Box className="d-flex align-items-center w-100">
            <YouTubeIcon className="mx-3" style={{ fontSize: "2rem" }} />
            <TextField
              className="my-3 w-100"
              label="Video 1"
              style={{ border: "none" }}
              onChange={handleValueChange}
              name="video1"
            />
          </Box>
          <Box className="d-flex align-items-center w-100">
            <YouTubeIcon className="mx-3" style={{ fontSize: "2rem" }} />
            <TextField
              className="my-3 w-100"
              label="Video 2"
              style={{ border: "none" }}
              onChange={handleValueChange}
              name="video2"
            />
          </Box>

          <Button
            onClick={() => editInfluences(userName, fieldNames, values)}
            variant="contained"
            className="bubbles my-1"
          >
            Añadir Influencias
          </Button>
        </Box>
      )}
    </Box>
  );
};

// Script youtube videos
// $('iframe').hide();
// $(document).ready(function(){
//   $('form').submit(function(e){
//     e.preventDefault();
//     let getURL = $('.url').val();
//     let newURL = getURL.replace("watch?v=", "embed/");
//     $('iframe').attr( "src", newURL ).show();
//   });
// });
