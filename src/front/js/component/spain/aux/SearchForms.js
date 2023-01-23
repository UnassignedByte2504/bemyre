import React from "react";
import { useState, useEffect } from "react";
import { Box, Divider, Typography } from "@mui/material";
import { ExploraDropdown } from "../../Dropdown/ExploraDropdown.js";
import { imgTorender } from "../../Provinces.js";
const SearchForms = ({ provincia }) => {
  return (
    <Box className="ExploreFormWrapper">
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
