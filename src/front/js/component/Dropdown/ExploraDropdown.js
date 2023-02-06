import React, { useEffect, useContext } from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import { Navigate, useNavigate } from "react-router-dom";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Button } from "@mui/material";
import { Context } from "../../store/appContext";

export const ExploraDropdown = ({ provincia }) => {
  const { actions, store } = useContext(Context);
  const [cities, setCites] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const [category, setCategory] = useState(null);
  const Provincia = provincia;
  const categories = ["Musicos", "Bandas", "Eventos", "Locales"];
  const navigate = useNavigate();

  const mockSearch = () => {
    actions.setExploreCategory(category)
    // remove spaces and lowercase provincia and selectedcity
    const provincia = Provincia
    const city = selectedCity.replace(/\s/g, "").toLowerCase();
    const Cat = category.replace(/\s/g, "").toLowerCase();
    const url = `/busqueda/${provincia}/${city}/${Cat}`;

    if (selectedCity && category) {
      navigate(url);
    }
  };
  const handleChange = (e) => {
    setSelectedCity(e.target.value);
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

    const data = await response.json();
    setCites(data);
  };

  useEffect(() => {
    fetchCities(Provincia);
  }, [Provincia]);

  // useEffect(() => {
  //   console.log("useef");
  //   console.log("city", selectedCity);
  // }, [selectedCity]);

  return (
    <Box sx={{ minWidth: 120 }} className="SearchFormExplore">
      <Box className="FormControl">
        <FormControl fullWidth>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={cities}
            sx={{ width: 300 }}
            onChange={(e, value) => setSelectedCity(value)}
            renderInput={(params) => (
              <TextField
                variant="standard"
                {...params}
                placeholder="Poblacion, Municipio..."
                label="Ciudad"
                autoComplete="on"
                margin="normal"
                onChange={(e) => handleChange(e)}
                fullWidth
              />
            )}
          />
          {selectedCity !== null ? (
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={categories}
              sx={{ width: 300 }}
              onChange={(e, value) => setCategory(value)}
              renderInput={(params) => (
                <TextField
                  variant="standard"
                  {...params}
                  placeholder="Categoria"
                  label="Categoria"
                  autoComplete="on"
                  margin="normal"
                  onChange={(e) => setCategory(e)}
                  fullWidth
                />
              )}
            />
          ) : null}
        </FormControl>
      </Box>

      <Box className="ButtonExplore">
        <Box>
          <Button variant="standard" id="LetsRock" onClick={() => mockSearch()}>
            Let's rock
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ExploraDropdown;
