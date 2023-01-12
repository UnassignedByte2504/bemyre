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
import { AlertContactInfo } from '../../Alerts/AlertContactInfo.jsx'

const ContactInfo = () => {
  useEffect(()=>{actions.fetchUser(username)
  },[])
  useEffect(()=>{localStorage.removeItem("cambios_contact")
  },[])
  const params= useParams()
  const username = params.username
  const {actions, store} = useContext(Context)
  const onSubmit = async(values, ax) =>{
    actions.editContactInfo(username, values.phone_number, values.address)
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
      phone_number: store.resultados.user_contact_info[0].phone_number,
      address: store.resultados.user_contact_info[0].address,
      // city: "",

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
            name='phone_number'
            onChange={handleChange}
            className='w-100 mb-3'
            variant='outlined'
            label='Cambiar número teléfono'
        />

        {/* <TextField 
            value={values.city}
            name='city'
            onChange={handleChange}
            className='w-100 mb-3'
            variant='outlined'
            label='Cambiar ciudad'
        />
         */}

        <TextField
            value={values.address}
            name='address'
            onChange={handleChange}
            className='w-100 mb-3'
            variant='outlined'
            label='Cambiar la dirección'
            />

         <AlertContactInfo/>

       
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