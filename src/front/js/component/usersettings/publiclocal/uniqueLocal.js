import React, { useEffect, useState, useContext } from "react";
import { Context } from "../../../store/appContext";
import { Box, Button, Divider } from "@mui/material";
import { Typography } from "@mui/material";
import { TextField } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import Input from '@mui/material/Input';


const UniqueLocal = ({ local, setLocal, musicGenres, states, id, nameId }) => {

  const[locals, setLocals] = useState({})
  const [newLocal, setNewLocal] = useState({})
  const { store } = useContext(Context);
  
  useEffect(() => {
    setNewLocal(local)
  }, [local])

// V1
  // const modificar = async () => {
  //   let body = new FormData();
  //   for (let key in local) {
  //     body.append(key, local[key]);
  //   }
  //   const token = sessionStorage.getItem("access_token");
  //   body.append("token", token);
  //   console.log(body, local); 

  //   const options = {
  //     method: "PUT",
  //     headers: {
  //       Authorization: `Bearer ${store.token_local}`,
  //     },
  //     body: JSON.stringify(local),
  //   };
  //   await fetch(`${process.env.BACKEND_URL}/api/settings/modifyLocal/${id}`, options)
  //     .then((resp) => resp.json())
  //     .then((result) => setLocals(result));
  // };


  // V2
  const modificar = () => {
    fetch(process.env.BACKEND_URL + "/api/settings/modifyLocal/" + id, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newLocal),
    })
    .then(res => res.json())
    .then(data => {
      // fetchLocales()
      setLocal(data.nuevoValor)})


    // let body = new FormData();
    // for (let key in locals) {
    //   body.append(key, locals[key]);
    // }
    
    // console.log(body, locals); 

    // const options = {
      // method: "PUT",
      // headers: {
      //   Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
      //   "Content-Type": "application/json",
      // },
      // // body: JSON.stringify(locals),
    //   // body: body
    //   body: locals,
    // };
    // await fetch(`${process.env.BACKEND_URL}/api/settings/modifyLocal/${id}`, options)
    //   .then((resp) => resp.json())
    //   .then((result) => setLocals(result));
  };


 
  return (
    // <form className="form-public-local">
    <>
      <TextField
        sx={{ width: "100%" }}
        id={"nombreLocals"+nameId}
        type="text"
        name={"nombreLocals"+nameId}
        variant="outlined"
        label="Nombre del local"
        onChange={(e) => setNewLocal({ ...newLocal, name: e.target.value })}
        // defaultValue={newLocal?.name}
        value={newLocal?.name}
      />
      <TextField
        sx={{ width: "100%" }}
        id={"ubicacionLocals"+nameId}
        type="text"
        name={"ubicacionLocals"+nameId}
        variant="outlined"
        label="Ubicación del local"
        onChange={(e) =>
          setNewLocal({ ...newLocal, ubicacion_local: e.target.value })
        }
        value={newLocal?.ubicacion_local}
      />
      <TextField
        sx={{ width: "100%" }}
        id={"descripcionLocals"+nameId}
        type="text"
        name={"descripcionLocals"+nameId}
        variant="outlined"
        label="Descripción del local"
        onChange={(e) => setNewLocal({ ...newLocal, description: e.target.value })}
        value={newLocal?.description}
        
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
          onChange={(e) => setLocals({ ...locals, local_img: e.target.files[0] })}
          class="form-control"
          type="file"
          id="formFile"
        />
      </div>
      <Button variant="outlined" color="error" onClick={() => modificar()}>
        Modificar
      </Button>
      {/* <button onClick={() => modificar()}>hola</button> */}
   {/* </form> */}
    </>

  );
};

export default UniqueLocal;
