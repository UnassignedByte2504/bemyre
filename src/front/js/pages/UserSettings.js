import React from "react";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";
//MUI imports >>>>
import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useMediaQuery, useTheme } from "@mui/material";
//MUI imports <<<
//logic imports >>>
import { UserSettingsMenuItems } from "../component/usersettings/UserSettingsData.js";
import { componentToRender } from "../component/usersettings/UserSettingsData.js";
//logic imports <<<
//components imports >>>
import FlexBetween from "../component/styledcomponents/FlexBetween.jsx";
import UserSettingsMenu from "../component/usersettings/aux/UserSettingsMenu.jsx";
import ProfileInfo from "../component/usersettings/profileinfo/ProfileInfo.js";
//<<< components imports

const UserSettings = () => {
  const { store, actions } = useContext(Context);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [selectedItem, setSelectedItem] = useState(UserSettingsMenuItems[0]);

  const params = useParams()
  const current_user = sessionStorage.getItem('current_user')
  const userparams = params.username

  useEffect(() =>{
    if (current_user !== userparams) {
      window.location.href = `/user/${current_user}`}
  }, [])
  
  useEffect(() => {
    if (store?.selected_settings !== null){
        setSelectedItem(store?.selected_settings)
    }
  }, [store.selected_settings]);
  return (
    <Box
      className="container UserSettingsWrapper"
      sx={{
        backgroundColor: theme.palette.userSettings.main,
      }}
    >
      <Box
        className="UserSettingsHeader"
        sx={{
          backgroundColor: theme.palette.userSettings.menu,
        }}
      >
        <Typography variant="h2" className="ms-3">
          Preferencias
        </Typography>
      </Box>
      <Divider className="UserSettingsDivider" />
      <Box className="UserSettingsBody">
        <Box
          className="UserSettingsMenu"
          sx={{
            backgroundColor: theme.palette.userSettings.menu,
          }}
        >
          <UserSettingsMenu />
        </Box>
        <Box
          className="UserSettings"
          sx={{
            backgroundColor: theme.palette.userSettings.panel,
          }}
        >
          {componentToRender(selectedItem)}
        </Box>
      </Box>
    </Box>
  );
};

export default UserSettings;
