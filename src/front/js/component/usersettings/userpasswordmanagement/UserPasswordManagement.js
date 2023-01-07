import { TextField, Typography, Box, Button } from '@mui/material'
import { useFormik } from 'formik'
import React from 'react'

import "../../../../styles/index.css"
const UserPasswordManagement = () => {
  const submitFormPassword = (values)=>{
    console.log(values)
  }
  const {handleSubmit, handleChange} = useFormik({
    initialValues: {
      oldPassword: '',
      confirmOldPassword: '',
      newPassword: '',
      confirmNewPassword: ''
    },
    onSubmit: submitFormPassword
  })

  return (
    <Box className='m-2 changepasswordbox'>
      <Typography className='my-3' variant='h3'>Cambiar Contraseña</Typography>
      <form onSubmit={handleSubmit} className='changepasswordform'>
        <TextField
        className='w-100'
        variant='outlined'
        label='Old password'
        type='password'
        onChange={handleChange}
        name='oldPassword'
        
        />
        <TextField
        className='w-100'
        variant='outlined'
        label='Confirm Old Password'
        type='password'
        onChange={handleChange}
        name='confirmOldPassword'
        
        />
        <TextField
        className='w-100'
        variant='outlined'
        label='New Password'
        type='password'
        onChange={handleChange}
        name='newPassword'
        
        />
        <TextField
        className='w-100'
        variant='outlined'
        label='Confirm New Password'
        type='password'
        onChange={handleChange}
        name='confirmNewPassword'
        
        />
        <Button
        variant='contained'
        type='submit'
        >Cambiar Contraseña</Button>
      </form>
    </Box>
  )
}

export default UserPasswordManagement