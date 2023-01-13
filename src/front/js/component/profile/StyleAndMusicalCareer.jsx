//Import React
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//Import Material
import { Box, Button, Divider, Typography, TextField } from "@mui/material";

//Import styles
import "../../../styles/index.css";

//Import Components
import { EditInfo } from "./EditInfo.jsx";
const userName = sessionStorage.getItem("current_user");
export const StyleAndMusicalCareer = ({ currentUser, userName }) => {
  const [open, setOpen] = useState(false);
  
  const editStyle = async(username, fieldtomodify, newvalue) =>{
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
    `${process.env.BACKEND_URL}/api/settings/${username}/style`,
    options
  )
    .then((response) => response.json())
    .then((result) =>
      sessionStorage.setItem(
        "cambios_style",
        "Información de redes sociales cambiada con éxito"
      )
    );
};

const fieldNames = {
  estilo1: "estilo1",
  estilo2: "estilo2",
  estilo3: "estilo3",
  textstyle: "textstyle"
};

const [values, setValues] = useState({
  estilo1: "estilo1",
  estilo2: "estilo2",
  estilo3: "estilo3",
  textstyle: "textstyle"

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
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <strong>Mi estilo de música y trayectoria</strong>
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
        <>
          <Box className="musicstyle my-3">
            <Box className="bubbles">
              <strong>Rock</strong>
            </Box>
            <Box className="bubbles">
              <strong>Metal</strong>
            </Box>
            <Box className="bubbles">
              <strong>Indie</strong>
            </Box>
          </Box>
          <Typography>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </Typography>
        </>
      ) : (
        <>
          <TextField
            className="bubbles my-3 me-2 border-0"
            placeholder="Estilo de musica 1"
            style={{ border: "none"}}
            onChange={handleValueChange}
            name="estilo1"

          />
            

            <TextField
            className="bubbles my-3 mx-2 border-0"
            placeholder="Estilo de musica 2"
            style={{ border: "none"}}
            onChange={handleValueChange}
            name="estilo2"

          />

            <TextField
            className="bubbles ms-2 my-3 border-0"
            placeholder="Estilo de musica 3"
            style={{ border: "none"}}
            onChange={handleValueChange}
            name="estilo3"

         />

          <TextField
            id="outlined-multiline-static"
            label="Define tu estilo de música"
            multiline
            rows={4}
            className="w-100"
            defaultValue="Mi estilo de música es"
            onChange={handleValueChange}
            name="textstyle"

          />
          <Button 
            onClick={() =>
              editStyle(
                userName,
                fieldNames,
                values
              )
            }   
          variant="contained" className="mt-2">
            Guardar cambios
          </Button>
        </>
      )}
    </Box>
  );
};
