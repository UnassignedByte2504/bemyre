//Import React
import React, { useContext, useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'

//Import Materials
import { accordionActionsClasses, Box, Button, Divider, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'

//Import Formik
import { useFormik } from 'formik'

//Import styles
import "../../../../styles/index.css"
import { SelectSettings } from '../../Dropdown/SelectSettings.jsx'
import {Context} from "../../../store/appContext"
import { AlertEditInfo } from '../../Alerts/AlertEditInfo.jsx'

const ContactInfo = () => {
  useEffect(()=>{actions.fetchUser(username)
  },[])
  useEffect(()=>{sessionStorage.removeItem("cambios")
  },[])
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
      phone_number: "",
      address: "",
      city: "",

    },
    onSubmit,
  });

  return (
    <Box className='editinfobox'>
      <Typography variant='h3' className='mt-4 mb-3'>Editar Información de Contacto</Typography>
      <Divider className='mb-4' style={{width:'70%'}}></Divider>
      <form onSubmit={handleSubmit}  className='editinfoform'>
        
        
        <TextField 
            value={values.phone_number}
            type='number'
            name='phone_number'
            onChange={handleChange}
            className='w-100 mb-3'
            variant='outlined'
            label='Cambiar número teléfono'
        />

        <TextField 
            value={values.city}
            name='city'
            onChange={handleChange}
            className='w-100 mb-3'
            variant='outlined'
            label='Cambiar ciudad'
        />
        

        <TextField
            value={values.address}
            name='address'
            onChange={handleChange}
            className='w-100 mb-3'
            variant='outlined'
            label='Cambiar la dirección'
            />

        <AlertEditInfo 
        
        className='w-100'/>
        
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

export default ContactInfo