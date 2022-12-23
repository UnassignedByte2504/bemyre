import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../../styles/index.css";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import {signupSchema} from "../../esquemas"
import { useContext } from "react";
import { Context } from "../../store/appContext";
import { CallToActionSharp } from "@mui/icons-material";
import { Box } from "@mui/system";
import {Typography} from "@mui/material";

export const Signup = () =>{
    const {actions, store} = useContext(Context)
    const onSubmit = async(values, ax) => {
        await actions.signUp(values.userName, values.email, values.password, values.firstName, values.lastName)
        await ax.resetForm();
        };

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
              email: "",
              confirmEmail: "",
              password: "",
              confirmPassword: "",
              firstName: "",
              lastName: "",
              userName: "",
              confirmUserName: "",
            },
            validationSchema: signupSchema,
            onSubmit,
          });

         
    return(
        <>
        <Box className="d-flex flex-column align-items-center signupJumbo mb-3">
         <form onSubmit={handleSubmit} autoComplete="off" className="textArea signupJumbo">
            <Box className="d-flex justify-content-center">
              <TextField sx={{width: '50%'}} 
                id="firstName"
                label="First name"
                name="firstName"
                values={values.firstName}
                variant="outlined"
                className="m-1"
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.userName && touched.userName}
                helperText={
                  errors.userName && touched.userName && errors.userName
                }
              />
              <TextField sx={{width: '50%'}}
                id="lastName"
                label="Last name"
                name="lastName"
                values={values.lastName}
                variant="outlined"
                className="m-1"
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.lastName && touched.lastName}
                helperText={
                  errors.lastName && touched.lastName && errors.lastName
                }
              />

            {/* </Box>
            <Box className="d-flex justify-content-center"> */}
              <TextField sx={{width: '50%'}}
                id="userName"
                label="Username"
                name="userName"
                values={values.userName}
                variant="outlined"
                className="m-1"
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.userName && touched.userName}
                helperText={
                  errors.userName && touched.userName && errors.userName
                }
              />
              <TextField sx={{width: '50%'}}
                id="confirmUserName"
                label="Confirm Username"
                name="confirmUserName"
                values={values.confirmUserName}
                variant="outlined"
                className="m-1"
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.confirmUserName && touched.confirmUserName}
                helperText={
                  errors.confirmUserName &&
                  touched.confirmUserName &&
                  errors.confirmUserName
                }
              />

            </Box>
            <Box className="d-flex justify-content-center">
            <TextField sx={{width: '50%'}}
              id="email"
              label="Email"
              name="email"
              values={values.email}
              variant="outlined"
              className="m-1"
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.email && touched.email}
              helperText={errors.email && touched.email && errors.email}
            />
            <TextField sx={{width: '50%'}}
              id="confirmEmail"
              label="Confirm Email"
              name="confirmEmail"
              values={values.confirmEmail}
              variant="outlined"
              className="m-1"
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.confirmEmail && touched.confirmEmail}
              helperText={
                errors.confirmEmail &&
                touched.confirmEmail &&
                errors.confirmEmail
              }
            />
            {/* </Box>
            <Box className="d-flex justify-content-center"> */}
            <TextField sx={{width: '50%'}}
              id="password"
              label="Password"
              name="password"
              type="password"
              values={values.password}
              variant="outlined"
              className="m-1"
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.password && touched.password}
              helperText={
                errors.password && touched.password && errors.password
              }
            />

            <TextField sx={{width: '50%'}}
              id="confirmPassword"
              label="Confirmar Password"
              name="confirmPassword"
              type="password"
              values={values.confirmPassword}
              variant="outlined"
              className="m-1"
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.confirmPassword && touched.confirmPassword}
              helperText={
                errors.confirmPassword &&
                touched.confirmPassword &&
                errors.confirmPassword
              }
            />
            </Box>

            <Button variant="contained" type="submit" disabled={isSubmiting}>
              Registro
            </Button>
    </form>
    </Box>
    
    
    </>
    )
}