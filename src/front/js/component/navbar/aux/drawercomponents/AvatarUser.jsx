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
              alt={sessionStorage.getItem("current_user")}
              src={sessionStorage.getItem("profile_img")}
              sx={{
                height:"6rem",
                width:"6rem"
              }}
            />
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
