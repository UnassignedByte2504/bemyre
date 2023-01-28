import React, { useEffect, useState, useContext } from "react";
import { Context } from "../../../store/appContext";

import PropTypes from "prop-types";

import { Box, Button, Divider } from "@mui/material";
import { Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { ArchiveSharp, ConstructionOutlined } from "@mui/icons-material";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import Autocomplete from "@mui/material/Autocomplete";
import "../../../../styles/publiclocal.css";
import { CardsButton } from "../../../component/buttons/CardsButton.jsx";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Chip from "@mui/material/Chip";
import UniqueLocal from "./uniqueLocal";

export const PublicLocal = () => {


  // traen info de los endpoints
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [musicGenres, setMusicGenres] = useState([]);

  // recoge data de los inputs
  const [data, setData] = useState({
    name: "",
    ubicacion_local: "",
    description: "",
    state: "",
    city: "",
    local_music_genres: "",
    local_img: "",
  });

  // trae los locales que se han creado con su id y de ahi saca el local concreto con su id
  const [locales, setLocales] = useState([]);
  const [local, setLocal] = useState();

  const { store } = useContext(Context);

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

      const result = await response.json();
      // console.log("ESTAS SON LAS PROVINCIAS");
      setStates(result);
    };

    fetchStates();
  }, []);


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
    // console.log("ESTAS SON LAS cities");
    setCities(result);
  };




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
      const res = result.map((el) => el.name);
      console.log(res);
      setMusicGenres(res);
    };
    fetchMusicGenres();
  }, []);

  const publicar = async () => {
    // FormData() es un objeto de arrays?
    let body = new FormData();
    // se pueden recorrer las key de un objeto (data)??
    for (let key in data) {
      // añade dos valores nuevos iguales o uno es key y otro es valor? el FormData lo transforma en key y valor?
      body.append(key, data[key]);
      // lo siguiente funcionaria igual?
      // body.append(key, data.key);
    }
    const token = sessionStorage.getItem("access_token");
    // en que docu pone que esto lo vuelva objeto?¿... y porque lo añade al body?
    body.append("token", token);
    console.log(data);

    const options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: body,
      // body: JSON.stringify(body)
      // en lugar del for no habria sido lo mismo body: data?
    };
    await fetch(`${process.env.BACKEND_URL}/api/settings/publiclocal`, options)
      .then((resp) => resp.json())
      .then((result) => console.log(result));
  };




// trae locales a elegir en la vista unique, por lo tanto lo podria hacer alli creo
  useEffect(() => {
    console.log("hola");
  const fetchLocales = async () => {
    await fetch(`${process.env.BACKEND_URL}/api/settings/locales`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${store.token_local}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setLocales(result);
      });
  };
    fetchLocales();
  }, []);
  

  // trae el local a modificar a la vista unique, por lo tanto lo podria hacer alli creo
  const fetchLocal = async (id) => {
    await fetch(`${process.env.BACKEND_URL}/api/settings/local/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${store.token_local}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((result) => { 
        setLocal(result);
        console.log(result);
      });
  };



  return (
    <>
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="perfilLocalCrear-tab"
            data-bs-toggle="tab"
            data-bs-target="#perfilLocalCrear"
            type="button"
            role="tab"
            aria-controls="perfilLocalCrear"
            aria-selected="true"
          >
            Crear perfil de local

          </button>

        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="modificarPerfilLocal-tab"
            data-bs-toggle="tab"
            data-bs-target="#modificarPerfilLocal"
            type="button"
            role="tab"
            aria-controls="modificarPerfilLocal"
            aria-selected="false"
          >
            Modificar perfil de local

          </button>

        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="perfilLocalCrear"
          role="tabpanel"
          aria-labelledby="perfilLocalCrear-tab"
        >
          <Box sx={{ width: "100%" }}>
            <Box
              sx={{ marginX: "3rem", textAlign: "center", marginTop: "2rem" }}
            >
              <Typography variant="h4" className="mb-3">
                Publica el estilo de tu local y conecta con tu público
              </Typography>
              <Divider />
            </Box>
            <Box>
              <form className="form-public-local">
                <TextField
                  sx={{ width: "100%" }}
                  type="text"
                  name="nombreLocal"
                  variant="outlined"
                  label="Nombre del local"
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                  value={data.name}
                />
                <TextField
                  sx={{ width: "100%" }}
                  type="text"
                  name="ubicacionLocal"
                  variant="outlined"
                  label="Ubicación del local"
                  onChange={(e) =>
                    setData({ ...data, ubicacion_local: e.target.value })
                  }
                  value={data.ubicacion_local}
                />
                <TextField
                  sx={{ width: "100%" }}
                  type="text"
                  name="descripcionLocal"
                  variant="outlined"
                  label="Descripción del local"
                  onChange={(e) =>
                    setData({ ...data, description: e.target.value })
                  }
                  value={data.description}
                />
                <Box className="form-city-state">
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
                    onChange={(e, newValue) =>
                      setData({ ...data, city: newValue })
                    }
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
                </Box>

                {/* autocomplete con chips limitadas */}

                <Autocomplete
                  multiple
                  limitTags={2}
                  id="multiple-limit-tags"
                  options={musicGenres}
                  // getOptionLabel={(option) => option}
                  onChange={(e, newValue) =>
                    setData({ ...data, local_music_genres: newValue })
                  }
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Géneros de música"
                      placeholder="+1"
                    />
                  )}
                  sx={{ width: "500px" }}
                />

                <div class="mb-3">
                  <label for="formFile" class="form-label">
                    Selecciona una imagen para el perfil de tu local
                  </label>
                  <input
                    onChange={(e) =>
                      setData({ ...data, local_img: e.target.files[0] })
                      // console.log(e)
                    }
                    
                    class="form-control"
                    type="file"
                    id="formFile"
                  />
                </div>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => publicar()}
                >
                  Publicar
                </Button>
              </form>
            </Box>
          </Box>
        </div>



        <div
          class="tab-pane fade"
          id="modificarPerfilLocal"
          role="tabpanel"
          aria-labelledby="modificarPerfilLocal-tab"
        >
          <Box sx={{ marginX: "3rem", textAlign: "center", marginTop: "2rem" }}>
            <Typography variant="h4" className="mb-3">
              Publica el estilo de tu local y conecta con tu público
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap" }}>
              {locales.map((element) => (
                <button
                  onClick={() => {
                    fetchLocal(element.id);
                  }}
                >
                  {element.name}
                </button>
              ))}
            </Box>
            <Divider />
          </Box>
          {local ? (
            <UniqueLocal
              local={local}
              setLocal={setLocal}
              locales={locales}
              setLocales={setLocales}
              musicGenres={musicGenres}
              states={states}
              setCities={setCities}
              id={local.id}    
              // fetchLocales={fetchLocales()}          
            />
            // para que hacen falta los parentesis antes y despues de los dos puntos?
          ) : (
            ""
          )}
        </div>
      </div>
    </>

  );
};
