import { Divider, Typography } from '@mui/material'
import { Box } from '@mui/system'
import {useMediaQuery, useTheme} from '@mui/material'

import React from 'react'
import FlexBetween from '../component/styledcomponents/FlexBetween.jsx'

//components imports >>>
import UserSettingsMenu from '../component/usersettings/aux/UserSettingsMenu.jsx'
import ProfileInfo from '../component/usersettings/profileinfo/ProfileInfo.js'
//<<< components imports

const UserSettings = () => {
 const theme = useTheme();
 const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <Box className="container UserSettingsWrapper" sx={{
        backgroundColor: theme.palette.userSettings.main
    }}>
        <Box className="UserSettingsHeader" sx={{
                backgroundColor: theme.palette.userSettings.menu
            }}>
            <Typography variant="h2" className='ms-3'>Preferencias</Typography>
        </Box>
        <Divider className="UserSettingsDivider"/>
        <Box className="UserSettingsBody">
            <Box className="UserSettingsMenu" sx={{
                backgroundColor: theme.palette.userSettings.menu
            }}>
                <UserSettingsMenu />
            </Box>
            <Box className="UserSettings" sx={{
                backgroundColor: theme.palette.userSettings.panel
            }}>
                <ProfileInfo/>
            </Box>
        </Box>
    </Box>
  )
}

export default UserSettings