import React, { useEffect, useState, useContext } from "react";
import { Context } from "../../../store/appContext";
import { Box, Button, Divider } from "@mui/material";
import { Typography } from "@mui/material";
import { TextField } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";

export const UniqueBand = () => {
  const { store, actions } = useContext(Context);

  const [newData, setNewData] = useState({
    name: `${store.banda?.name}`,
    description: `${store.banda?.description}`,
    state: "",
    city: "",
    band_music_genres: "",
    band_img: "",
    artistic_name: "",
    band_members: "",
    // chips max 2 o 3, solo instrumentos:
    required_members: "",
  });
  return (
    <form className="form-public-Band">
      <TextField
        sx={{ width: "100%" }}
        type="text"
        name="nombreBand"
        variant="outlined"
        id="outlined-basic"
        label="Nombre del Band"
        onChange={(e) => setNewData({ ...newData, name: e.target.value })}
        value={newData.name}
      />

      <TextField
        sx={{ width: "100%" }}
        type="text"
        name="descripcionBAnd"
        variant="outlined"
        label="Descripción de la banda"
        onChange={(e) => setNewData({ ...newData, description: e.target.value })}
        value={newData.description}
      />
      <Box className="form-city-state">
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={store.provincias.map((element) => element)}
          onChange={(e, newValue) => {
            setNewData({ ...newData, state: newValue });
            actions.fetchCities(newValue);
          }}
          value={newData.state}
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
          options={store.cities.map((element, index) => element)}
          onChange={(e, newValue) => setNewData({ ...newData, city: newValue })}
          value={newData.city}
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

      

      <Autocomplete
        multiple
        limitTags={3}
        id="multiple-limit-tags"
        options={store.musicGenres.map((element) => element)}        
        onChange={(e, newValue) =>
          setNewData({ ...newData, band_music_genres: newValue })
        }
        renderInput={(params) => (
          <TextField {...params} label="Géneros de música" placeholder="+1" />
        )}
        sx={{ width: "500px" }}
      />

      <div class="mb-3">
        <label for="formFile" class="form-label">
          Selecciona una imagen para el perfil de tu banda
        </label>
        <input
          onChange={
            (e) => setNewData({ ...newData, band_img: e.target.files[0] })            
          }
          class="form-control"
          type="file"
          id="formFile"
        />
      </div>
      <Button
        variant="outlined"
        color="error"
        onClick={() => actions.modificarBand(newData, id)}
      >
        Modificar
      </Button>
      <Button
        variant="outlined"
        color="error"
        onClick={() => actions.deleteBand(id)}
      >
        Eliminar perfil
      </Button>
    </form>
  );
};
