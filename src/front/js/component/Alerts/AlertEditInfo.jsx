//Import React
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

//Import Materials
import { Alert, Box, Snackbar, Stack, Typography } from "@mui/material";

export const AlertEditInfo = () => {
  useEffect(() => {
    sessionStorage.removeItem("alert_signup");
  }, []);

  const alert_edit_info = sessionStorage.getItem("cambios");

  return (
    <Box>
      {alert_edit_info ? (
        <Stack>
          <Alert severity="success">{alert_edit_info}</Alert>
        </Stack>
      ) : null}
    </Box>
  );
};
