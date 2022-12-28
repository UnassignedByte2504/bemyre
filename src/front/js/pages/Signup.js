import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/index.css";
import imgSignup from "../../img/Bemyre_signup.jpg";
import Logo from "../../img/Bemyre_logo.png";
import { Box, Button, Divider, Typography, useTheme } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import { signupSchema } from "../esquemas";
import FlexBetween from "../component/styledcomponents/FlexBetween.jsx";
import FlexCentered from "../component/styledcomponents/FlexCentered.jsx";
import { testFetch } from "../api calls/user";
import logo_facebook from "../../img/RRSS/fb-logo-icon-azul.png";

import { useContext } from "react";
import { Context } from "../store/appContext";

export const Signup = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { actions, store } = useContext(Context);
  const onSubmit = async (values, ax) => {
    await console.log("esto es de signup",values)
    await actions.signUp(
      values.userName,
      values.email,
      values.password,
      values.firstName,
      values.lastName
    );
    
    navigate("/");
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
              <TextField
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
            </FlexBetween>
            <FlexBetween>
              <TextField
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
              <TextField
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
            <FlexBetween>
              <TextField
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

              <TextField
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
            </FlexBetween>
            <FlexCentered className="mt-2">
              <Button
                variant="contained"
                type="submit"
                disabled={isSubmiting}
                sx={{
                  width: "50%",
                  textTransform:"none"
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
            <p className="text-white">Sign Up with Facebook</p>
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
            <Typography className="text-black">Sign Up with Google</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
