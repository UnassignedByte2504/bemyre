//Import React
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

//Import Materials
import { Alert, Box, Snackbar, Stack, Typography } from "@mui/material";

export const AlertContactInfo = () => {

  const alert_contact = sessionStorage.getItem("cambios_contact");

  return (
    <Box>
      {alert_contact ? (
        <Stack>
          <Alert severity="success">{alert_contact}</Alert>
        </Stack>
      ) : null}
    </Box>
  );
};
