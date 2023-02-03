import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { useEffect, useState, useContext } from "react";
import { Context } from "../../../store/appContext";
import { Box, Button, Divider, TextField } from "@mui/material";
import { Typography } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import UniqueBand from "./uniqueBand";




export const BandsCreation = () => {
    const { store, actions } = useContext(Context);

    const [data, setData] = useState({
        name: "",        
        description: "",
        state: "",
        city: "",
        band_music_genres: "",
        band_img: "",
        // chips max 2 o 3, buscar a miembros q son musicos por el artistic name
        artistic_name: "",        
        // chips max 2 o 3, solo instrumentos:
        required_members: "",
        
      });
  return (
    <>
    <ul class="nav nav-tabs" id="myTab" role="tablist">
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
            Crear perfil de banda
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
            Modificar perfil de banda
          </button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
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
              <Typography variant="h4" className="mb-3">
                Publica el estilo de tu banda y conecta con tu público
              </Typography>
              <Divider />
            </Box>
            <Box>
              <form className="form-public-Band">
                <TextField
                  sx={{ width: "100%" }}
                  type="text"
                  name="nombreBand"
                  variant="outlined"
                  id="outlined-basic"
                  label="Nombre del Band"
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                  value={data.name}
                />
               
                <TextField
                  sx={{ width: "100%" }}
                  type="text"
                  name="descripcionBAnd"
                  variant="outlined"
                  label="Descripción de la banda"
                  onChange={(e) =>
                    setData({ ...data, description: e.target.value })
                  }
                  value={data.description}
                />
                <Box className="form-city-state">
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
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
                    id="combo-box-demo"
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
                </Box>

                {/* autocomplete con chips limitadas */}

                <Autocomplete
                  multiple
                  limitTags={3}
                  id="multiple-limit-tags"
                  options={store.musicGenres.map((element) => element)}
                  // getOptionLabel={(option) => option}
                  onChange={(e, newValue) =>
                    setData({ ...data, band_music_genres: newValue })
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
                    onChange={
                      (e) => setData({ ...data, band_img: e.target.files[0] })
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
                  onClick={() => actions.publicarBand(data)}
                >
                  Publicar
                </Button>
              </form>
            </Box>
          </Box>
        </div>

        {/* <div
          class="tab-pane fade"
          id="modificarPerfilBand"
          role="tabpanel"
          aria-labelledby="modificarPerfilBand-tab"
        >
          <Box sx={{ marginX: "3rem", textAlign: "center", marginTop: "2rem" }}>
            
            <Box>
              <Stack
                sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}
                direction="row"
              >
                {store.bandas.map((element) => (
                  <Chip
                    label={element.name}
                    onClick={() => {
                      actions.fetchBanda(element.id);
                    }}
                    
                  />
                ))}
              </Stack>
            </Box>
            
          </Box>
          {store.banda ? (
            <UniqueBand
              banda={store.banda}
              
              bandas={store.bandas}
              setBandas={store.setBandas}
              
              id={store.banda.id}
            />
          ) : (
            
            ""
          )}
        </div> */}
      </div>
    </>
  )
}
