import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const ExploraDropdown = ({provincia}) => {
  const [city, setCity] = React.useState('');

  const handleChange = (event) => {
    
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Ciudad</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={city}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Madrid</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}