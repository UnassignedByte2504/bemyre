import React from "react";
import { useState, useEffect } from "react";
import { Box, Divider, Typography } from "@mui/material";
import { ExploraDropdown } from "../../Dropdown/ExploraDropdown.js";
const SearchForms = ({ provincia }) => {
  return (
    <Box className="ExploreFormWrapper">
      <Box className="ExploreFormHeader">
        <Box>
          <Typography className="text-center" variant="h2">
            ¿Dónde nos vamos a rockear?
          </Typography>
        </Box> 
      </Box>
      <Box className="ExploreForm">
        {provincia ? (
          <>
            <Box className="FormMessage-1">
              <Typography className="text-center mb-1" variant="h3">
                Genial, me encanta {provincia}
              </Typography>
              <Typography className="text-center" variant="h4">
                Y ¿A qué ciudad vamos?
              </Typography>
            </Box>
            <Divider />
            <Box className="ExploreFormBody">
              <ExploraDropdown provincia={provincia} />
            </Box>
          </>
        ) : null}
      </Box>
    </Box>
  );
};

export default SearchForms;
