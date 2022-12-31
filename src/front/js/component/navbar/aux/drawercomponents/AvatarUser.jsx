import React from "react";
import { Box, Avatar, Typography } from "@mui/material";
import { useContext } from "react";
import { Context } from "../../../../store/appContext";

export const AvatarUser = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      {store.token_local ? (
        <Box className="AvatarBox mt-3">
          <Box>
            <Avatar
              className="AvatarSB shadow"
              alt="Travis Howard"
              src="https://avatars.dicebear.com/api/bottts/.svg"
            />{" "}
          </Box>
          <Box className="mt-2">
            <Typography className="NameSB" variant="h4">
              {store?.current_user}
            </Typography>
          </Box>
        </Box>
      ) : null}
    </>
  );
};
