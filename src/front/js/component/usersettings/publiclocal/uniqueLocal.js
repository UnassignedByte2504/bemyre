import React, { useEffect, useState, useContext } from "react";
import { Context } from "../../../store/appContext";
import { Box, Button, Divider } from "@mui/material";
import { Typography } from "@mui/material";
import { TextField } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import Input from '@mui/material/Input';


const UniqueLocal = ({ local, setLocal, locales, setLocales, musicGenres, states, id, fetchLocales }) => {

  // const[locals, setLocals] = useState({})
  // const [newLocal, setNewLocal] = useState({})
  const [newData, setNewData] = useState({
    name: `${local?.name}`,
    ubicacion_local: `${local?.ubicacion_local}`,
    description: `${local?.description}`,
    state: "",
    city: "",
    local_music_genres: "",
    local_img: "",
  })
  const { store } = useContext(Context);
  
  useEffect(() => {
    // setNewLocal(local)
    setNewData(local)
  }, [local])

  // useEffect(() => {
  //   console.log("hola");
  //   const fetchLocales = async () => {
  //     await fetch(`${process.env.BACKEND_URL}/api/settings/locales`, {
  //       method: "GET",
  //       headers: {
  //         Authorization: `Bearer ${store.token_local}`,
  //       },
  //     })
  //       .then((response) => {
  //         return response.json();
  //       })
  //       .then((result) => {
  //         setLocales(result);
  //       });
  //   };
  //   fetchLocales();
  // }, [local])

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
  const modificar = async() => {
    let body = new FormData();
    for(let key in newData){
      body.append(key, newData[key]);
    }
    await fetch(process.env.BACKEND_URL + "/api/settings/modifyLocal/" + id, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
        // "Content-Type": "application/json",
      },
      body: body,
      // body: newData,
    })
    .then((res) => res.json())
    .then((result) => {
      // fetchLocales
      console.log('hello?', result)})


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
        // id={"nombreLocals"+id}
        type="text"
        name={`nombreLocal${id}`}
        variant="outlined"
        label="Nombre del local"
        onChange={(e) => setNewData({ ...newData, name: e.target.value })}
        // defaultValue={local?.name}
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
        onChange={(e) => setNewData({ ...newData, description: e.target.value })}
        // defaultValue={local?.description}
        value={newData?.description}
        
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

      {/* <div class="mb-3">
        <label for="formFile" class="form-label">
          Selecciona una imagen para el perfil de tu local
        </label>
        <input
          onChange={(e) => setLocals({ ...locals, local_img: e.target.files[0] })}
          class="form-control"
          type="file"
          id="formFile"
        />
      </div> */}
      <Button variant="outlined" color="error" onClick={() => modificar()}>
        Modificar
      </Button>
      
   {/* </form> */}
    </>

  );
};

export default UniqueLocal;
