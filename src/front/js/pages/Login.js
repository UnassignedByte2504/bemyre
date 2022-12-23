import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/login.css";
import imgSignup from "../../img/Bemyre_signup.jpg";
import Logo from "../../img/Bemyre_logo.png";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import { Context } from "../store/appContext";
import logo_facebook from "../../img/RRSS/fb-logo-icon-azul.png"
import { loginSchema } from "../esquemas";
import { ErrorSharp } from "@mui/icons-material";

export const Login = () => {
  const { actions, store } = useContext(Context);

  const onSubmit = async (values, ax) => {
    console.log(values);
    await actions.login(values.email, values.password);
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
    initialValues: { email: "", password: "" },
    validationSchema: loginSchema,
    onSubmit,
  });

  return (
    <div className="backgroundSignup">
      <div className="cardSignup">
        <div className="imgSignup imgSignupDisplayNone">
          <img src={imgSignup} alt="Bemyre concert" />
        </div>

        <div className="textSignup">
          <img src={Logo} />

          <form onSubmit={handleSubmit} autoComplete="off" className="textArea">
            <TextField
              type="email"
              id="email"
              label="Email"
              name="email"
              values={values.email}
              variant="outlined"
              className="m-1"
              onChange={handleChange}
              error={errors.email && touched.email}
              helperText={errors.email && touched.email && errors.userName}
            />
            <TextField
              type="password"
              id="password"
              label="Password"
              name="password"
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
            <div className="d-flex justify-content-center">
              <Button variant="contained" type="submit" disabled={isSubmiting}>
                Login
              </Button>
            </div>
            <hr />
            <div className="boxlogin">
              <div className="rrsslogin colorFb">
                <img className="p-1" src={logo_facebook} />
                <p className="">Sign Up with Facebook</p>
              </div>
              <div className="rrsslogin ">
                <img className="p-1" src="https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png" />
                <p className="text-black">Sign Up with Google</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
