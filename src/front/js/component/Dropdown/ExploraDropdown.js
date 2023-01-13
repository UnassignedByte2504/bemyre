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

export const ExploraDropdown = ({ provincia }) => {
  const [cities, setCites] = useState([]);
  const [page, setPage] = useState(1);
  const Provincia = provincia;

  const fetchCities = async (state, page) => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(
      `${process.env.BACKEND_URL}/api/${state}/cities/${page}`,
      options
    );

    const data = await response.json();
    setCites(data);
  };
  console.log(provincia);
  console.log(Provincia);
  useEffect(() => {
    fetchCities(Provincia, page);
  }, [Provincia, page]);

  console.log(cities);

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Ciudad</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Cities"
        >
          {cities?.map((city) => (
            <MenuItem key={city} value={city}>
              {city}
            </MenuItem>
          ))}
          <FlexBetween>
            {page > 1 && (
              <MenuItem onClick={() => setPage(page - 1)}>
                <NavigateBeforeIcon />
              </MenuItem>
            )}
            {cities?.length > 0 ? (
              <MenuItem onClick={() => setPage(page + 1)}>
                <NavigateNextIcon />
              </MenuItem>
            ) : null}
          </FlexBetween>
        </Select>
      </FormControl>
    </Box>
  );
};

export default ExploraDropdown;
