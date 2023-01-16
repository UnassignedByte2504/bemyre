import React, { useEffect } from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FlexBetween from "../styledcomponents/FlexBetween.jsx";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";

export const ExploraDropdown = ({ provincia }) => {
  const [cities, setCites] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const Provincia = provincia;

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
  console.log(provincia);
  console.log(Provincia);
  console.log(selectedCity);
  useEffect(() => {
    fetchCities(Provincia);
  }, [Provincia]);

  useEffect(() => {
    console.log("useef");
    console.log(selectedCity);
  }, [selectedCity]);

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={cities}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder="Poblacion, Municipio..."
              label="Ciudad"
              onChange={handleChange}
              value={selectedCity}
              autoComplete="on"
            />
          )}
        />
      </FormControl>
    </Box>
  );
};

export default ExploraDropdown;
