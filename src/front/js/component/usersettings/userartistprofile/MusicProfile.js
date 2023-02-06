import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { useEffect, useState, useContext } from "react";
import { Context } from "../../../store/appContext";
import { Box, Button, Divider, TextField } from "@mui/material";
import { Typography } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import UserArtistProfile from "./UserArtistProfile";

export const MusicProfile = () => {
  const { store, actions } = useContext(Context);

  const [data, setData] = useState({
    // name: "",
    // description: "",
    // state: "",
    // city: "",
    user_music_genres: "",
    // band_img: "",
    // chips max 2 o 3, buscar a miembros q son musicos por el artistic name
    artistic_name: "",
    // chips max 2 o 3, solo instrumentos:
    musicalinstrumentcategory: "",
    musicalinstrument: "",
  });
  useEffect(() => {
    actions.fetchMusicGenres();
    actions.fetchMusicalInstrumentCategory();
  }, []);
  return (
    <>
      <ul class="nav nav-tabs" id="myTabBand" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="perfilBandCrear-tab"
            data-bs-toggle="tab"
            data-bs-target="#perfilBandCrear"
            type="button"
            role="tab"
            aria-controls="perfilBandCrear"
            aria-selected="true"
          >
            Crear perfil de artista
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="modificarPerfilBand-tab"
            data-bs-toggle="tab"
            data-bs-target="#modificarPerfilBand"
            type="button"
            role="tab"
            aria-controls="modificarPerfilBand"
            aria-selected="false"
            // onClick={useEffect(()=> fetchBandes(setBandes), [])}
          >
            Añade tu música
          </button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContentBand">
        <div
          class="tab-pane fade show active"
          id="perfilBandCrear"
          role="tabpanel"
          aria-labelledby="perfilBandCrear-tab"
        >
          <Box sx={{ width: "100%" }}>
            <Box
              sx={{ marginX: "3rem", textAlign: "center", marginTop: "2rem" }}
            >
              {/* <Typography variant="h4" className="mb-3">
                Publica el estilo de tu banda y conecta con tu público
              </Typography> */}
              <Box className="d-flex flex-column align-items-center w-100">
                <Box className="d-flex flex-column align-items-center w-100">
                  <Typography variant="h3" className="my-3">
                    Perfil Artista
                  </Typography>
                  <Divider className="w-75" />
                </Box>
              </Box>
              {/* <Divider /> */}
            </Box>
            <Box>
              <form className="form-public-local">
                {/* <TextField
                  sx={{ width: "100%" }}
                  type="text"
                  name="nombreBand"
                  variant="outlined"
                  id="outlined-basic-band"
                  label="Nombre del Band"
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                  value={data.name}
                /> */}

                {/* <TextField
                  sx={{ width: "100%" }}
                  type="text"
                  name="descripcionBAnd"
                  variant="outlined"
                  label="Descripción de la banda"
                  onChange={(e) =>
                    setData({ ...data, description: e.target.value })
                  }
                  value={data.description}
                /> */}
                {/* <Box className="form-city-state">
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo-band"
                    options={store.provincias.map((element) => element)}
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
                    id="combo-box-demo-band"
                    options={store.cities.map((element, index) => element)}
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
                </Box> */}

                {/* autocomplete con chips limitadas */}

                <Autocomplete
                  multiple
                  limitTags={3}
                  id="multiple-limit-tags-band"
                  options={store.musicGenres.map((element) => element)}
                  // getOptionLabel={(option) => option}
                  onChange={(e, newValue) =>
                    setData({ ...data, user_music_genres: newValue })
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

                {/* <div class="mb-3">
                  <label for="formFile" class="form-label">
                    Selecciona una imagen para el perfil de tu banda
                  </label>
                  <input
                    onChange={(e) => {
                      setData({ ...data, band_img: e.target.files[0] });

                      console.log(e);
                    }}
                    class="form-control"
                    type="file"
                    id="formFile-band"
                  />
                </div> */}

                {/* <Autocomplete
                  multiple
                  limitTags={3}
                  // disablePortal
                  id="multiple-limit-tags-band-"
                  options={store.usermusician.map((element) => element)}
                  onChange={(e, newValue) => {
                    setData({ ...data, artistic_name: newValue });
                  }}
                  // value={data.artistic_name}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      placeholder="artistic_name"
                      name="artistic_name"
                      label="artistic_name"
                      autoComplete="on"
                    />
                  )}
                  sx={{ width: "500px" }}
                /> */}

                <TextField
                  sx={{ width: "100%" }}
                  type="text"
                  name="nombreartistico"
                  variant="outlined"
                  id="outlined-basic-band"
                  label="Nombre artístico"
                  onChange={(e) => setData({ ...data, artistic_name: e.target.value })}
                  value={data.artistic_name}
                />

                <Box className="form-city-state">
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo-band-banda"
                    options={store.musicalinstrumentcategory.map(
                      (element) => element
                    )}
                    onChange={(e, newValue) => {
                    //   console.log(newValue);
                      setData({ ...data, musicalinstrumentcategory: newValue });
                      actions.fetchMusicalInstrument(newValue);
                    }}
                    value={data.musicalinstrumentcategory}
                    sx={{ width: 300 }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        placeholder="musicalintrumentcategory"
                        name="musicalintrumentcategory"
                        label="musicalintrumentcategory"
                        autoComplete="on"
                      />
                    )}
                  />
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo-band"
                    options={store.musicalinstrument.map(
                      (element, index) => element
                    )}
                    onChange={(e, newValue) =>
                      setData({ ...data, musicalinstrument: newValue })
                    }
                    value={data.musicalinstrument}
                    sx={{ width: 300 }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        placeholder="musicalintrument"
                        name="musicalintrument"
                        label="musicalintrument"
                        autoComplete="on"
                      />
                    )}
                  />
                </Box>

                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => actions.fetchUserMusicianInfo(data)}
                >
                  Publicar
                </Button>
              </form>
            </Box>
          </Box>
        </div>

        <div
          class="tab-pane fade"
          id="modificarPerfilBand"
          role="tabpanel"
          aria-labelledby="modificarPerfilBand-tab"
        >
          <UserArtistProfile />
        </div>
      </div>
    </>
  );
};
