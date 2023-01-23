import React, { useEffect, useState, useContext } from "react";
import { Context } from "../../../store/appContext";
import { Box, Button, Divider } from "@mui/material";
import { Typography } from "@mui/material";
import { TextField } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";


const UniqueLocal = ({ local, setLocal, musicGenres, states, id }) => {

  // const[local, setLocal] = useState()
  const { store } = useContext(Context);


  const modificar = async () => {
    let body = new FormData();
    for (let key in local) {
      body.append(key, local[key]);
    }
    const token = sessionStorage.getItem("access_token");
    body.append("token", token);
    console.log(local); 

    const options = {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${store.token_local}`,
      },
      body: body,
    };
    await fetch(`${process.env.BACKEND_URL}/api/settings/modifyLocal/${id}`, options)
      .then((resp) => resp.json())
      .then((result) => setLocal(result));
  };




 
  return (
    <form className="form-public-local">
      <TextField
        sx={{ width: "100%" }}
        type="text"
        name="nombreLocal"
        variant="outlined"
        label="Nombre del local"
        onChange={(e) => setLocal({ ...local, name: e.target.value })}
        value={local.name}
      />
      <TextField
        sx={{ width: "100%" }}
        type="text"
        name="ubicacionLocal"
        variant="outlined"
        label="Ubicación del local"
        onChange={(e) =>
          setLocal({ ...local, ubicacion_local: e.target.value })
        }
        value={local.ubicacion_local}
      />
      <TextField
        sx={{ width: "100%" }}
        type="text"
        name="descripcionLocal"
        variant="outlined"
        label="Descripción del local"
        onChange={(e) => setLocal({ ...local, description: e.target.value })}
        value={local.description}
      />
      {/* <Box className="form-city-state">
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={states}
          onChange={(e, newValue) => {
            setLocal({ ...local, state: newValue });
            fetchCities(newValue);
          }}
          value={local.state}
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
          onChange={(e, newValue) => setLocal({ ...local, city: newValue })}
          value={local.city}
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
      </Box> */}

      {/* <Autocomplete
        multiple
        limitTags={2}
        id="multiple-limit-tags"
        options={musicGenres}
        onChange={(e, newValue) =>
          setLocal({ ...local, local_music_genres: newValue })
        }
        renderInput={(params) => (
          <TextField {...params} label="limitTags" placeholder="Favorites" />
        )}
        sx={{ width: "500px" }}
      /> */}

      <div class="mb-3">
        <label for="formFile" class="form-label">
          Selecciona una imagen para el perfil de tu local
        </label>
        <input
          onChange={(e) => setLocal({ ...local, local_img: e.target.files[0] })}
          class="form-control"
          type="file"
          id="formFile"
        />
      </div>
      <Button variant="outlined" color="error" onClick={() => modificar()}>
        Modificar
      </Button>
    </form>
  );
};

export default UniqueLocal;
