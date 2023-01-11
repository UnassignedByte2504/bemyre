//Import React
import React, { useContext, useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'

//Import Materials
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'

//Import Formik
import { useFormik } from 'formik'

//Import styles
import "../../../../styles/index.css"
import { SelectSettings } from '../../Dropdown/SelectSettings.jsx'
import {Context} from "../../../store/appContext"

const ProfileInfo = () => {
  const maxLengthText = 240
  const params= useParams()
  const username = params.username
  const {actions, store} = useContext(Context)
  const onSubmit = async(values, ax) =>{
    await actions.editInfoSettings(username, values.user_name, values.nombre, values.apellidos, values.descripcion)
    console.log(values)
  }
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmiting,
  } = useFormik({
    initialValues: {
      nombre:"",
      apellidos:"",
      // user_name: "",
      descripcion: "",
      // genre:"",
      // city:""

    },
    onSubmit,
  });

  return (
    <Box className='editinfobox'>
      <Typography variant='h3' className='my-4'>Editar Información</Typography>
      <form onSubmit={handleSubmit}  className='editinfoform'>
        
        <TextField 
            value={values.nombre}
            name='nombre'
            onChange={handleChange}
            className='w-100 mb-3'
            variant='outlined'
            label='Cambiar el nombre'
        />

        <TextField 
            value={values.apellidos}
            name='apellidos'
            onChange={handleChange}
            className='w-100 mb-3'
            variant='outlined'
            label='Cambiar apellidos'
        />
        
        {/* <TextField 
            value={values.user_name}
            name='user_name'
            onChange={handleChange}
            className='w-100 mb-3'
            variant='outlined'
            label='Cambiar nombre de usuario'
        /> */}

        <TextField
            value={values.descripcion}
            name='descripcion'
            onChange={handleChange}
            className='w-100 mb-3'
            variant='outlined'
            label='Cambiar la descripción'
            multiline
            inputProps={{ maxLength: 240 }}
            helperText={`${values.descripcion.length}/${maxLengthText}`}
            />

        {/* <TextField
            value={values.city}
            name='city'
            onChange={handleChange}
            className='w-100 mb-3'
            variant='outlined'
            label='Cambiar la ciudad'
            multiline
        /> */}

        <Button
        type='submit'
        className='mt-3'
        variant='contained'
        color='success'
        >
          Enviar
        </Button>
      </form>
    </Box>
  )
}

export default ProfileInfo