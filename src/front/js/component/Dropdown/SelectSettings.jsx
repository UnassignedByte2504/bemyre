import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const SelectSettings=() =>{
  const [genre, setGenre] = React.useState('');

  const handleChange = (event) => {
    setGenre(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }} className='w-100'>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Generos favoritos</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={genre}
          label="genre"
          onChange={handleChange}
        >
          <MenuItem value={genre}>Rock</MenuItem>
          <MenuItem value={genre}>Metal</MenuItem>
          <MenuItem value={genre}>Rock & Roll</MenuItem>
          <MenuItem value={genre}>Jazz</MenuItem>
          <MenuItem value={genre}>Blues</MenuItem>
          <MenuItem value={genre}>Country</MenuItem>
          <MenuItem value={genre}>Rock progresivo</MenuItem>


        </Select>
      </FormControl>
    </Box>
  );
}
