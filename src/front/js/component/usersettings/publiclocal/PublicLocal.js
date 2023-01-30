import * as React from 'react';

// import PropTypes from 'prop-types';
// import Tabs from '@mui/material/Tabs';
// import Tabs from '@mui/material/Tab';
import  TabPanel  from '@mui/material/Tab';
// import TabPanel from '@mui/lab/TabPanel';
// import { TabPanel } from '@mui/lab';

import  { useEffect, useState, useContext } from "react";
import { Context } from "../../../store/appContext";

import PropTypes from "prop-types";

import { Box, Button, Divider, TextField } from "@mui/material";
import { Typography } from "@mui/material";
// import { TextField } from "@mui/material";
import { ArchiveSharp, ConstructionOutlined, DataArray } from "@mui/icons-material";
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
  // const [states, setStates] = useState([]);
  // const [cities, setCities] = useState([]);
  // const [musicGenres, setMusicGenres] = useState([]);

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
  

  // const [nameLocal, setNameLocal] = useState("")
  // const [ubicacionLocal, setUbicacionLocal] = useState([])
  // const [description, setDescription] = useState([])
  // const [state, setState] = useState([])
  // const [city, setCity] = useState([])
  // const [localMusicGenre, setLocalMusicGenre] = useState([])
  // const [localImg, setLocalImg] = useState([])






  // trae los locales que se han creado con su id y de ahi saca el local concreto con su id
  // me lo lleve al flux
  
  // const [locales, setLocales] = useState([]);
  // const [local, setLocal] = useState();

  const { store, actions } = useContext(Context);

  // const userName = sessionStorage.getItem("current_user");



  // MUI>>>
  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  // TabPanel.propTypes = {
  //   children: PropTypes.node,
  //   index: PropTypes.number.isRequired,
  //   value: PropTypes.number.isRequired,
  // };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  // MUI<<<

  const [value, setValue] = useState(0)

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  // MUI<<<
  

  // const handleChange1 = (event, newValue) => {
  //   setData({ ...data, name: newValue })
  // };
  

  // MUI<<<


  useEffect(() => {
    
    actions.fetchStates();
  }, []);


 




  useEffect(() => {

    actions.fetchMusicGenres();
  }, []);




// porque funciona esto sin llamar a la funcion?????????????? por el setLocales? pero si no deberia meterse ahi no?
  // const fetchLocales = async (set) => {
  //   await fetch(`${process.env.BACKEND_URL}/api/settings/locales`, {
  //     method: "GET",
  //     headers: {
  //       Authorization: `Bearer ${store.token_local}`,
  //     },
  //   })
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((result) => {
  //       set(result);
  //     });
  // };


// trae locales a elegir en la vista unique, por lo tanto lo podria hacer alli creo
  useEffect(() => {
    console.log("hola");
  
    actions.fetchLocales();
    // console.log(store.provincias)
  }, []);
  





  return (
    <>






      <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Crear perfil de local" active {...a11yProps(0)} />
          <Tab label="Modificar perfil de local" {...a11yProps(1)} />
          
        </Tabs>
      </Box>

      
      
      <TabPanel value={value} index={0}>
      
      
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
              <Box component="form" noValidate autoComplete="off" className="form-public-local">
              
      
      
      
                <TextField
                  sx={{ width: "100%" }}
                  type="text"
                  name="nombreLocal"
                  variant="outlined"
                  id="outlined-basic"
                  label="Nombre del local"
                  onChange={(e, newValue) => {
                    setData({ ...data, name: e.target.value });              
                  }}
                  // value={data.name}
                />
                <TextField
                  sx={{ width: "100%" }}
                  type="text"
                  name="ubicacionLocal"
                  variant="outlined"
                  label="Ubicación del local"
                  onChange={(e, newValue) => {
                    // setData({ ...data, ubicacion_local: newValue });    
                    setData({ ...data, ubicacion_local: e.target.value });           
                  }}
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
                  // onChange={(e, newValue) => {
                  //   setData({ ...data, description: newValue });              
                  // }}
                  value={data.description}
                />
                <Box className="form-city-state">
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={store.provincias.map((element) => (element))}
                    onChange={(e, newValue) => {
                      setData({ ...data, state: newValue });                      
                      actions.fetchCities(newValue);
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
                    options={store.cities.map((element, index) => (element))}
                    onChange={(e, newValue) =>{
                      setData({ ...data, city: newValue })
                      
                    }}
                    // value={data.city}
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
                  options={store.musicGenres.map((element) => (element))}
                  onChange={(e, newValue) =>{
                    setData({ ...data, local_music_genres: newValue })
                    // setLocalMusicGenre(newValue );
                  }}
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
                  onClick={() => actions.publicar(data)}
                >
                  Publicar
                </Button>
              </Box>
            </Box>
          </Box>
          </TabPanel>



          <TabPanel value={value} index={1}>
          <Box sx={{ marginX: "3rem", textAlign: "center", marginTop: "2rem" }}>
            <Typography variant="h4" className="mb-3">
              Publica el estilo de tu local y conecta con tu público
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap" }}>
              {store.locales.map((element) => (
                <button
                  onClick={() => {
                    actions.fetchLocal(element.id);
                  }}
                >
                  {element.name}
                </button>
              ))}
            </Box>
            <Divider /> 
          </Box>
          {store.local ? (
            <UniqueLocal
              local={store.local}
              // setLocal={setLocal}
              locales={store.locales}
              setLocales={store.setLocales}
              // musicGenres={musicGenres}
              // states={states}
              // setCities={setCities}
              id={store.local.id}    
              // fetchLocales={useEffect(()=> fetchLocales(setLocales), [])}          
            />
            // para que hacen falta los parentesis antes y despues de los dos puntos?
          ) : (
            ""
          )}
        </TabPanel>
      
      </Box>
    </>

  );
};
