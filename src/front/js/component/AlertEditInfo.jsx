//Import React
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

//Import Materials
import { Alert, Box, Snackbar, Stack, Typography } from "@mui/material";

export const AlertEditInfo = () => {
  useEffect(() => {
    sessionStorage.removeItem("alert_login");
  }, []);

  const alert_info = sessionStorage.getItem("Cambios");

  return (
    <Box  className="w-100">
      {alert_info ? (
        <Stack>
          <Alert severity="success">{alert_info}</Alert>
        </Stack>
      ) : null}
    </Box>
  );
};
