import React, { useEffect, useState, useContext } from "react";
import { Context } from "../../../store/appContext";
import { Box, Button, Divider } from "@mui/material";
import { Typography } from "@mui/material";
import { TextField } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import Input from "@mui/material/Input";

const UniqueLocal = ({ id }) => {
  const { store, actions } = useContext(Context);
  // const[locals, setLocals] = useState({})
  // const [newLocal, setNewLocal] = useState({})
  const [newData, setNewData] = useState({
    name: `${store.local?.name}`,
    ubicacion_local: `${store.local?.ubicacion_local}`,
    description: `${store.local?.description}`,
    state: "",
    city: "",
    local_music_genres: "",
    local_img: "",
  });

  useEffect(() => {
    // setNewLocal(local)
    setNewData(store.local);
    // setLocales(locales)

    actions.fetchLocales();
  }, [store.local]);



  return (
    <form className="form-public-local">
    
      <TextField
        sx={{ width: "100%" }}
        // id={"nombreLocals"+id}
        type="text"
        name={`nombreLocal${id}`}
        variant="outlined"
        label="Nombre del local"
        onChange={(e, newValue) =>
          setNewData({ ...newData, name: e.target.value })
        }
        defaultValue={store.local?.name}
        value={newData?.name}
      />
      <TextField
        sx={{ width: "100%" }}
        // id={"ubicacionLocals"+id}
        type="text"
        name={`ubicacionLocal${id}`}
        variant="outlined"
        label="Ubicación del local"
        onChange={(e) =>
          setNewData({ ...newData, ubicacion_local: e.target.value })
        }
        // defaultValue={local?.ubicacion_local}
        value={newData?.ubicacion_local}
      />
      <TextField
        sx={{ width: "100%" }}
        // id={"descripcionLocals"+id}
        type="text"
        name={`descripcionLocal${id}`}
        variant="outlined"
        label="Descripción del local"
        onChange={(e) =>
          setNewData({ ...newData, description: e.target.value })
        }
        // defaultValue={local?.description}
        value={newData?.description}
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
          setNewData({ ...newData, local_music_genres: newValue })
        }
        // defaultValue={store.local?.local_music_genres}
        renderInput={(params) => (
          <TextField {...params} label="Géneros de música" placeholder="+1" />
        )}
        sx={{ width: "500px" }}
      />

      <div class="mb-3">
        <label for="formFile" class="form-label">
          Selecciona una imagen para el perfil de tu local
        </label>
        <input
          onChange={(e) =>
            setNewData({ ...newData, local_img: e.target.files[0] })
          }
          class="form-control"
          type="file"
          id="formFile"
        />
      </div>
      <Button
        variant="outlined"
        color="error"
        onClick={() => actions.modificar(newData, id)}
      >
        Modificar
      </Button>

      </form>
    
  );
};

export default UniqueLocal;
