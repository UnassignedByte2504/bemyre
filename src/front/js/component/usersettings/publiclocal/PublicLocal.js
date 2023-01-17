import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { createLocalSchema } from "../../../esquemas/index";
import { Box, Button } from "@mui/material";
import { Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { ArchiveSharp } from "@mui/icons-material";
import Autocomplete from "@mui/material/Autocomplete";

export const PublicLocal = () => {
  const [data, setData] = useState({});
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [musicGenres, setMusicGenres] = useState();

  const userName = sessionStorage.getItem("current_user");

  useEffect(() => {
    const fetchStates = async () => {
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await fetch(
        `${process.env.BACKEND_URL}/api/España/states`,
        options
      );
      // cambio de nombre de variable de data a result
      const result = await response.json();
      setStates(result);
    };
    // llamo a la función
    fetchStates();
  }, []);

  useEffect(() => {
    const fetchMusicGenres = async () => {
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await fetch(
        `${process.env.BACKEND_URL}/api/music_genres`,
        options
      );

      const result = await response.json();
      setMusicGenres(result);
    };
    // la "llamo"
    fetchMusicGenres();
  }, []);

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

  const fetchCities = async (state) => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(
      `${process.env.BACKEND_URL}/api/${state}/cities`,
      options
    );

    const result = await response.json();
    setCities(result);
  };

  return (
    <>
      <Box sx={{ marginX: "5rem", marginTop: "2rem", textAlign: "center" }}>
        <Typography variant="h3">
          Publica el estilo de tu local y conecta con tu público
        </Typography>
      </Box>
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
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
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
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
          </button>
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
          <Box>
            <form className="editinfobox" sx={{ gap: "1rem" }}>
              <TextField
                type="text"
                name="nombreLocal"
                variant="outlined"
                label="Nombre del local"
                onChange={(e) => setData({ ...data, name: e.target.value })}
              />
              <TextField
                type="text"
                name="ubicacionLocal"
                variant="outlined"
                label="Ubicación del local"
                onChange={(e) =>
                  setData({ ...data, ubicacion_local: e.target.value })
                }
              />
              <TextField
                type="text"
                name="descripcionLocal"
                variant="outlined"
                label="Descripción del local"
                onChange={(e) =>
                  setData({ ...data, description: e.target.value })
                }
              />
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={states}
                onChange={(e, newValue) => {
                  setData({ ...data, state: newValue });
                  fetchCities(newValue);
                }}
                value={data.state}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="Provincia"
                    name="provincia"
                    label="Provincia"
                    autoComplete="on"
                  />
                )}
              />
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={cities}
                onChange={(e, newValue) => setData({ ...data, city: newValue })}
                value={data.city}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="City"
                    name="City"
                    label="City"
                    autoComplete="on"
                  />
                )}
              />

              {/* autocomplete con chips limitadas */}
              
              {musicGenres && <Autocomplete
                multiple
                
                limitTags={2}
                id="multiple-limit-tags"
                options={musicGenres}
                getOptionLabel={(option) => option.name}
                defaultValue={[
                  musicGenres[13],
                  musicGenres[12],
                  musicGenres[11],
                ]}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    // label="limitTags"
                    placeholder="Estilos de música"
                    name="Género de música"
                    label="Género de música"
                    autoComplete="on"
                  />
                )}
                sx={{ width: "500px" }}
              />}

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

              <Button onClick={() => publicar()}>Publicar</Button>
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
    </>
  );
};
