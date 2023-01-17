import React, { useState } from "react";
import { useFormik } from "formik";
import { createLocalSchema } from "../../../esquemas/index";
import { Box, Button, Divider } from "@mui/material";
import { Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { ArchiveSharp } from "@mui/icons-material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

export const PublicLocal = () => {
  const [nombreLocal, setNombreLocal] = useState("");
  const [ubicacionLocal, setUbicacionLocal] = useState("");
  const [descripcionLocal, setDescripcionLocal] = useState("");
  const [data, setData] = useState({});

  const userName = sessionStorage.getItem("current_user");

  const publicar = async () => {
    let body = new FormData();
    for (let key in data) {
      body.append(key, data[key]);
    }
    console.log(data);
    const token = sessionStorage.getItem("access_token");
    const options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: body,
    };
    await fetch(`${process.env.BACKEND_URL}/api/settings/publiclocal`, options)
      .then((resp) => resp.json())
      .then((result) => console.log(result));
  };

  return (
    <Box>
      {1 + 1 == 2 ? (
        <Box className="w-100 d-flex flex-column align-items-center">
          <Typography className="my-3" variant="h3">
            Crear un Local
          </Typography>
          <Divider className="w-75 mb-3" />
          <TextField
            className="my-2 w-75"
            type="text"
            name="nombreLocal"
            variant="outlined"
            label="Nombre del local"
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
          <TextField
            className="my-2 w-75"
            type="text"
            name="ubicacionLocal"
            variant="outlined"
            label="Ubicación del local"
            onChange={(e) =>
              setData({ ...data, ubicacion_local: e.target.value })
            }
          />
          <TextField
            className="my-2 w-75"
            type="text"
            name="descripcionLocal"
            variant="outlined"
            label="Descripción del local"
            onChange={(e) => setData({ ...data, description: e.target.value })}
          />
          <Button className="my-3 bubbles w-75" variant="contained" aria-label="upload picture" component="label">
            Subir imagen local <PhotoCamera />
            <input hidden accept="image/*" type="file" />
          </Button>
          <Button variant="contained" color="success" className="text-white mt-3">
            <strong>Crear Local</strong>
          </Button>
        </Box>
      ) : null}
    </Box>

    // <>
    /*{ <Box sx={{ marginX: "5rem", marginTop: "2rem", textAlign: "center" }}>
        <Typography variant="h3">
          Publica el estilo de tu local y conecta con tu público
        </Typography>
      </Box>
      <ul class="nav nav-tabs d-flex justify-content-center my-3" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <Button
            class="nav-link active"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home-tab-pane"
            type="button"
            role="tab"
            aria-controls="home-tab-pane"
            aria-selected="true"
          >
            CREAR
          </Button>
        </li>
        <li class="nav-item" role="presentation">
          <Button
            class="nav-link"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#profile-tab-pane"
            type="button"
            role="tab"
            aria-controls="profile-tab-pane"
            aria-selected="false"
          >
            MODIFICAR
          </Button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="home-tab-pane"
          role="tabpanel"
          aria-labelledby="home-tab"
          tabindex="0"
        >
          <Box className="w-100"> 
            <form className="editinfobox" sx={{ gap: "1rem" }}>
              <TextField
                className="my-2 w-75"
                type="text"
                name="nombreLocal"
                variant="outlined"
                label="Nombre del local"
                onChange={(e) => setData({ ...data, name: e.target.value })}
              />
              <TextField
                className="my-2 w-75"
                type="text"
                name="ubicacionLocal"
                variant="outlined"
                label="Ubicación del local"
                onChange={(e) =>
                  setData({ ...data, ubicacion_local: e.target.value })
                }
              />
              <TextField
                className="my-2 w-75"
                type="text"
                name="descripcionLocal"
                variant="outlined"
                label="Descripción del local"
                onChange={(e) =>
                  setData({ ...data, description: e.target.value })
                }
              />

              <div class="mb-3">
                <label for="formFile" class="form-label">
                  Default file input example
                </label>
                <input
                  onChange={(e) =>
                    setData({ ...data, local_img: e.target.files[0] })
                  }
                  class="form-control"
                  type="file"
                  id="formFile"
                />
              </div>

              <Button 
              variant="contained"
              color="success"
              onClick={() => publicar()}>Publicar</Button>
            </form>
          </Box>
        </div>
        <div
          class="tab-pane fade"
          id="profile-tab-pane"
          role="tabpanel"
          aria-labelledby="profile-tab"
          tabindex="0"
        >
          ...
        </div>
      </div>
    </>} */
  );
};
