import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/index.css";
import imgSignup from "../../img/Bemyre_signup.jpg";
import Logo from "../../img/Bemyre_logo.png";
import {
  Box,
  Button,
  Divider,
  Typography,
  useTheme,
  Checkbox,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import { signupSchema } from "../esquemas";
import FlexBetween from "../component/styledcomponents/FlexBetween.jsx";
import FlexCentered from "../component/styledcomponents/FlexCentered.jsx";

import logo_facebook from "../../img/RRSS/fb-logo-icon-azul.png";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { AlertSignUp } from "../component/Alerts/AlertSignUp.jsx";

export const Signup = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { actions, store } = useContext(Context);
  useEffect(() => {
    sessionStorage.removeItem("alert_signup");
  }, []);
  const onSubmit = async (values, ax) => {
    await actions.signUp(
      values.userName,
      values.email,
      values.password,
      values.firstName,
      values.lastName,
      values.is_musician
    );
    if (!sessionStorage.getItem("alert_signup")) {
      navigate("/");
    }

    await ax.resetForm();
  };

  function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
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
      email: "",
      confirmEmail: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
      userName: "",
      confirmUserName: "",
      is_musician: true,
    },
    validationSchema: signupSchema,
    onSubmit,
  });

  return (
    <Box className="backgroundSignup grad-orange">
      <Box
        className="cardSignup"
        sx={{
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Box className="imgSignup imgSignupDisplayNone">
          <img src={imgSignup} alt="Bemyre concert" />
        </Box>

        <Box className="textSignup">
          <img src={Logo} />

          <form onSubmit={handleSubmit} autoComplete="off">
            <FlexBetween>
              <TextField
                id="firstName"
                label="Nombre"
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
              <TextField
                id="lastName"
                label="Apellidos"
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
            </FlexBetween>
            <FlexBetween>
              <TextField
                id="userName"
                label="Nombre Usuario"
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
              <TextField
                id="confirmUserName"
                label="Nombre Usuario"
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
            </FlexBetween>

            <TextField
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
            <TextField
              id="confirmEmail"
              label="Confirmar Email"
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
            <FlexBetween>
              <TextField
                id="password"
                label="Contraseña"
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

              <TextField
                id="confirmPassword"
                label="Confirmar Contraseña"
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
            </FlexBetween>
            <Typography sx={{ textAlign: "center" }}>
              ¿Eres músico? <Checkbox/>  {/* <<<<<< rompè el tema claro */}
            </Typography>
            <AlertSignUp />
            <FlexCentered className="mt-2">
              <Button
                variant="contained"
                type="submit"
                disabled={isSubmiting}
                sx={{
                  width: "50%",
                  textTransform: "none",
                }}
              >
                <Typography>Registro</Typography>
              </Button>
            </FlexCentered>
          </form>
          <Divider
            className="my-3"
            sx={{
              width: "75%",
              height: "1px",
              color: theme.palette.secondary.main,
            }}
          />
          <Box className="rrssSignup colorFb">
            <img className="p-1" src={logo_facebook} />
            <p className="text-white">Regístrate con Facebook</p>
          </Box>
          <Box
            className="rrssSignup"
            sx={{
              backgroundColor: "white",
            }}
          >
            <img
              className="p-1"
              src="https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png"
            />
            <Typography className="text-black">
              Regístrate con Google
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
