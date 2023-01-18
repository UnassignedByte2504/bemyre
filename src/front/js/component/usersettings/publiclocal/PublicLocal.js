import React, { useEffect, useState } from "react";


import PropTypes from "prop-types";

import { Box, Button, Divider } from "@mui/material";
import { Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { ArchiveSharp } from "@mui/icons-material";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import Autocomplete from "@mui/material/Autocomplete";
import "../../../../styles/publiclocal.css";
import { CardsButton } from "../../../component/buttons/CardsButton.jsx";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export const PublicLocal = () => {
  const [data, setData] = useState({});
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  // const [musicGenres, setMusicGenres] = useState();


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

  // useEffect(() => {
  //   const fetchMusicGenres = async () => {
  //     const options = {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     };
  //     const response = await fetch(
  //       `${process.env.BACKEND_URL}/api/music_genres`,
  //       options
  //     );

  //     const result = await response.json();
  //     setMusicGenres(result);
  //   };
  // la "llamo"
  //   fetchMusicGenres();
  // }, []);


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
      <ul class="nav nav-tabs" id="myTab" role="tablist">

        <li class="nav-item" role="presentation">
          <Button
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
          <Button
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

                {/* {musicGenres && (
                <Autocomplete
                  multiple
                  limitTags={5}
                  id="multiple-limit-tags"
                  options={musicGenres}
                  getOptionLabel={(option) => option.name}
                  onChange={(e, newValue) =>
                    setData({ ...data, local_music_genres: newValue })
                  }
                  value={data.local_music_genres}

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
                  sx={{ width: "100%" }}
                />
              )} */}


                <div class="mb-3">
                  <label for="formFile" class="form-label">
                    Selecciona una imagen para el perfil de tu local
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

                <CardsButton
                  title="Publicar"
                  onClick={() => publicar()}
                ></CardsButton>
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
            <Divider />
          </Box>
        </div>
      </div>
    </>} */
  );
};



// ---- ADELANTOS FRONT DE ELLOS ------


// import React, { useEffect, useState } from "react";
// import { useFormik } from "formik";
// import { createLocalSchema } from "../../../esquemas/index";
// import { Box, Button, Divider } from "@mui/material";
// import { Typography } from "@mui/material";
// import { TextField } from "@mui/material";
// import { ArchiveSharp } from "@mui/icons-material";
// import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
// import Autocomplete from "@mui/material/Autocomplete";

// export const PublicLocal = () => {
//   const [data, setData] = useState({});
//   const [states, setStates] = useState([]);
//   const [cities, setCities] = useState([]);
//   const [open, setOpen] = useState({
//     nombre: false,
//     ubicacion: false,
//     descripcion: false,
//   });

//   const userName = sessionStorage.getItem("current_user");

//   useEffect(() => {
//     const fetchStates = async () => {
//       const options = {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       };
//       const response = await fetch(
//         `${process.env.BACKEND_URL}/api/España/states`,
//         options
//       );

//       const data = await response.json();
//       setStates(data);
//     };
//     // la "llamo"
//     fetchStates();
//   }, []);

//   const publicar = async () => {
//     let body = new FormData();
//     for (let key in data) {
//       body.append(key, data[key]);
//     }
//     console.log(data);
//     const token = sessionStorage.getItem("access_token");
//     const options = {
//       method: "POST",
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//       body: body,
//     };
//     await fetch(`${process.env.BACKEND_URL}/api/settings/publiclocal`, options)
//       .then((resp) => resp.json())
//       .then((result) => console.log(result));
//   };

//   const fetchCities = async (state) => {
//     const options = {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     };
//     const response = await fetch(
//       `${process.env.BACKEND_URL}/api/${state}/cities`,
//       options
//     );

//     const data = await response.json();
//     setCities(data);
//   };

//   return (
//     <Box>
//       {1 + 1 == 32 ? (
//         <Box className="w-100 d-flex flex-column align-items-center">
//           <Typography className="my-3" variant="h3">
//             Crear un Local
//           </Typography>
//           <Divider className="w-75 mb-3" />
//           <TextField
//             className="my-2 w-75"
//             type="text"
//             name="nombreLocal"
//             variant="outlined"
//             label="Nombre del local"
//             onChange={(e) => setData({ ...data, name: e.target.value })}
//           />
//           <TextField
//             className="my-2 w-75"
//             type="text"
//             name="ubicacionLocal"
//             variant="outlined"
//             label="Ubicación del local"
//             onChange={(e) =>
//               setData({ ...data, ubicacion_local: e.target.value })
//             }
//           />
//           <TextField
//             className="my-2 w-75"
//             type="text"
//             name="descripcionLocal"
//             variant="outlined"
//             label="Descripción del local"
//             onChange={(e) => setData({ ...data, description: e.target.value })}
//           />
//           <Button
//             className="my-3 bubbles w-75"
//             variant="contained"
//             aria-label="upload picture"
//             component="label"
//           >
//             Subir imagen local <PhotoCameraIcon className="ms-2" />
//             <input hidden accept="image/*" type="file" />
//           </Button>
//           <Button
//             variant="contained"
//             color="success"
//             className="text-white mt-3"
//           >
//             <strong>Crear Local</strong>
//           </Button>
//         </Box>
//       ) : (
//         <Box className="w-100 d-flex flex-column align-items-center">
//           <Typography className="my-3" variant="h3">
//             Modificar Información Local
//           </Typography>
//           <Divider className="w-75 mb-3" />

//           {/* Condicional nombre local */}
//           {1 + 1 == 2 ? (
//             <>
//               {/* Condicional editar cerrado */}
//               {!open.name ? (
//                 <Box className="d-flex align-items-center justify-content-between w-75 my-2">
//                   <Typography variant="h5"><strong>Nombre local</strong></Typography>
//                   <Button
//                     onClick={() => setOpen({ name: true })}
//                     variant="contained"
//                     className="bubbles"
//                     >
//                     <strong>Editar</strong>
//                   </Button>
//                 </Box>
//               ) : (
//                 <>
//                   {/* Condicional editar abierto */}
//                   <Box className="d-flex align-items-center justify-content-between w-75">
//                     <TextField className="w-100" label="Nuevo nombre" />
//                     <Box className="d-flex">
//                       <Button
//                         className="ms-2 text-white"
//                         variant="contained"
//                         color="success"
//                       >
//                         <strong>Modificar</strong>
//                       </Button>
//                       <Button
//                         onClick={() => setOpen({ name: false })}
//                         variant="contained"
//                         color="error"
//                         className="ms-2 text-white"
//                       >
//                         <strong>Cancelar</strong>
//                       </Button>
//                     </Box>
//                   </Box>
//                 </>
//               )}
//             </>
//           ) : (
//             <TextField
//               className="my-2 w-75"
//               type="text"
//               name="nombreLocal"
//               variant="outlined"
//               label="Nombre del local"
//               onChange={(e) => setData({ ...data, name: e.target.value })}
//             />
//           )}

//           {/* Condicional Ubicación */}
//           {
//             2 + 2 == 4 ? (
//               <>
//                 {/* Condicional editar cerrado */}
//                 {!open.ubicacion ? (
//                   <Box className="d-flex align-items-center justify-content-between w-75 my-2">
//                     <Typography variant="h5"><strong>Ubicación</strong></Typography>
//                     <Button
//                       onClick={() => setOpen({ ubicacion: true })}
//                       variant="contained"
//                       className="bubbles"
//                       >
//                       <strong>Editar</strong>
//                     </Button>
//                   </Box>
//                 ) : (
//                   <>
//                     {/* Condicional editar abierto */}
//                     <Box className="d-flex align-items-center justify-content-between w-75">
//                       <TextField className="w-100" label="Ubicacion" />
//                       <Box className="d-flex">
//                         <Button
//                           className="ms-2 text-white"
//                           variant="contained"
//                           color="success"
//                         >
//                           <strong>Modificar</strong>
//                         </Button>
//                         <Button
//                           onClick={() => setOpen({ ubicacion: false })}
//                           variant="contained"
//                           color="error"
//                           className="ms-2"
//                         >
//                           <strong>Cancelar</strong>
//                         </Button>
//                       </Box>
//                     </Box>
//                   </>
//                 )}
//               </>
//             ) : (
//               <TextField
//                 className="my-2 w-75"
//                 type="text"
//                 name="ubicacionLocal"
//                 variant="outlined"
//                 label="Ubicación del local"
//                 onChange={(e) =>
//                   setData({ ...data, ubicacion_local: e.target.value })
//                 }
//               />
//             )
//             // Final Condicional ubicacion
//           }

//           {/* Condicional descripcion */}
//           {3+3==6? 
          
//           <>
//           {/* Condicional editar cerrado */}
//           {!open.descripcion ? (
//             <Box className="d-flex align-items-center justify-content-between w-75 my-2">
//               <Typography variant="h5"><strong>Descripción</strong></Typography>
//               <Button
//                 onClick={() => setOpen({ descripcion: true })}
//                 variant="contained"
//                 className="bubbles"
//               >
//                 <strong>Editar</strong>
//               </Button>
//             </Box>
//           ) : (
//             <>
//               {/* Condicional editar abierto */}
//               <Box className="d-flex align-items-center justify-content-between w-75">
//                 <TextField className="w-100" label="Descripcion" />
//                 <Box className="d-flex">
//                   <Button
//                     className="ms-2 text-white"
//                     variant="contained"
//                     color="success"
//                   >
//                     <strong>Modificar</strong>
//                   </Button>
//                   <Button
//                     onClick={() => setOpen({ descripcion: false })}
//                     variant="contained"
//                     color="error"
//                     className="ms-2"
//                   >
//                     <strong>Cancelar</strong>
//                   </Button>
//                 </Box>
//               </Box>
//             </>
//           )}
//         </>
//            :
//           <TextField
//             className="my-2 w-75"
//             type="text"
//             name="descripcionLocal"
//             variant="outlined"
//             label="Descripción del local"
//             onChange={(e) => setData({ ...data, description: e.target.value })}
//           />
//         }
//           <Button
//             className="my-3 bubbles w-75"
//             variant="contained"
//             aria-label="upload picture"
//             component="label"
//           >
//             Subir imagen local <PhotoCameraIcon className="ms-2" />
//             <input hidden accept="image/*" type="file" />
//           </Button>
//           <Button
//             variant="contained"
//             color="success"
//             className="text-white mt-3"
//           >
//             <strong>Crear Local</strong>
//           </Button>
//         </Box>
//       )}
//     </Box>

//     // <>
//     /*{ <Box sx={{ marginX: "5rem", marginTop: "2rem", textAlign: "center" }}>
//         <Typography variant="h3">
//           Publica el estilo de tu local y conecta con tu público
//         </Typography>
//       </Box>
//       <ul class="nav nav-tabs d-flex justify-content-center my-3" id="myTab" role="tablist">
//         <li class="nav-item" role="presentation">
//           <Button
//             class="nav-link active"
//             id="home-tab"
//             data-bs-toggle="tab"
//             data-bs-target="#home-tab-pane"
//             type="button"
//             role="tab"
//             aria-controls="home-tab-pane"
//             aria-selected="true"
//           >
//             CREAR
//           </Button>
//         </li>
//         <li class="nav-item" role="presentation">
//           <Button
//             class="nav-link"
//             id="profile-tab"
//             data-bs-toggle="tab"
//             data-bs-target="#profile-tab-pane"
//             type="button"
//             role="tab"
//             aria-controls="profile-tab-pane"
//             aria-selected="false"
//           >
//             MODIFICAR
//           </Button>
//         </li>
//       </ul>
//       <div class="tab-content" id="myTabContent">
//         <div
//           class="tab-pane fade show active"
//           id="home-tab-pane"
//           role="tabpanel"
//           aria-labelledby="home-tab"
//           tabindex="0"
//         >
//           <Box className="w-100"> 
//             <form className="editinfobox" sx={{ gap: "1rem" }}>
//               <TextField
//                 className="my-2 w-75"
//                 type="text"
//                 name="nombreLocal"
//                 variant="outlined"
//                 label="Nombre del local"
//                 onChange={(e) => setData({ ...data, name: e.target.value })}
//               />
//               <TextField
//                 className="my-2 w-75"
//                 type="text"
//                 name="ubicacionLocal"
//                 variant="outlined"
//                 label="Ubicación del local"
//                 onChange={(e) =>
//                   setData({ ...data, ubicacion_local: e.target.value })
//                 }
//               />
//               <TextField
//                 className="my-2 w-75"
//                 type="text"
//                 name="descripcionLocal"
//                 variant="outlined"
//                 label="Descripción del local"
//                 onChange={(e) =>
//                   setData({ ...data, description: e.target.value })
//                 }
//               />
//               <Autocomplete
//                 disablePortal
//                 id="combo-box-demo"
//                 options={states}
//                 sx={{ width: 300 }}
//                 renderInput={(params) => (
//                   <TextField
//                     {...params}
//                     placeholder="Provincia"
//                     name="provincia"
//                     label="Provincia"
//                     onChange={(e) =>{
//                       console.log(e.target.value)
//                       setData({ ...data, state: e.target.value });
//                       fetchCities(e.target.value)
//                     }}
//                     value={data.state}
//                     autoComplete="on"
//                   />
//                 )}
//               />
//                 <Autocomplete
//                 disablePortal
//                 id="combo-box-demo"
//                 options={cities}
//                 sx={{ width: 300 }}
//                 renderInput={(params) => (
//                   <TextField
//                     {...params}
//                     placeholder="City"
//                     name="City"
//                     label="City"
//                     onChange={(e) =>
//                       setData({ ...data, city: e.target.value })
//                     }
//                     value={data.city}
//                     autoComplete="on"
//                   />
//                 )}
//               />

//               <div class="mb-3">
//                 <label for="formFile" class="form-label">
//                   Default file input example
//                 </label>
//                 <input
//                   onChange={(e) =>
//                     setData({ ...data, local_img: e.target.files[0] })
//                   }
//                   class="form-control"
//                   type="file"
//                   id="formFile"
//                 />
//               </div>

//               <Button 
//               variant="contained"
//               color="success"
//               onClick={() => publicar()}>Publicar</Button>
//             </form>
//           </Box>
//         </div>
//         <div
//           class="tab-pane fade"
//           id="profile-tab-pane"
//           role="tabpanel"
//           aria-labelledby="profile-tab"
//           tabindex="0"
//         >
//           ...
//         </div>
//       </div>
//     </>} */
//   );
// };