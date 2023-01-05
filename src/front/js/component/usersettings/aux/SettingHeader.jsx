import React from 'react'
import { Box, Typography, Divider } from '@mui/material'

const SettingHeader = ({title}) => {
  return (
    <React.Fragment>
        <Box className='my-3'>
            <Typography variant="h4" className='ms-3 my-2'>{title}</Typography>
            <Divider sx={{
                width:"100%"
            }}/>
        </Box>
    </React.Fragment>
  )
}

export default SettingHeader