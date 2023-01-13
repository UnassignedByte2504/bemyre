import React, { useContext, useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "../../styles/login.css";
import imgSignup from "../../img/Bemyre_signup.jpg"; 
import Logo from "../../img/Bemyre_logo.png";
import { Box, Button, Typography, useTheme } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import { Context } from "../store/appContext";
import logo_facebook from "../../img/RRSS/fb-logo-icon-azul.png";
import { loginSchema } from "../esquemas";
import { ErrorSharp, WindowSharp } from "@mui/icons-material";
import { AlertLogin } from "../component/AlertLogin.jsx";
import SocketContext from "../state/socketContext";
export const Login = () => {
  const theme = useTheme();
  const Socket = useContext(SocketContext);
  const { actions, store } = useContext(Context);
  const currentUser = sessionStorage.getItem("current_user")
    ? sessionStorage.getItem("current_user")
    : null;
  const [trigger, setTrigger] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (values, ax) => {
    await actions.login(values.email, values.password);
    await ax.resetForm();
    Socket.emit('logged_users');
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

  const [activePage, setActivePage] = useState();
  useEffect(() => {
    const currentPath = window.location.pathname;
    setActivePage(currentPath);
    actions.setLocation(currentPath);
  }, []);
  return (
    <Box
      className="backgroundSignup "
      sx={{ backgroundColor: theme.palette.background.card }}
    >
      <Box
        className="cardSignup"
        sx={{ backgroundColor: theme.palette.background.default }}
      >
        <Box className="imgSignup imgSignupDisplayNone">
          <img src={imgSignup} alt="Bemyre concert" />
        </Box>

        <Box className="textSignup">
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
              label="Contraseña"
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
            <Box className="d-flex justify-content-center">
              <Button variant="contained" type="submit" disabled={isSubmiting}>
                Login
              </Button>
            </Box>
            <AlertLogin />

            <hr />
            <Box className="boxlogin">
              <Box className="rrsslogin colorFb">
                <img className="p-1" src={logo_facebook} />
                <Typography className="">Inicia sesión con Facebook</Typography>
              </Box>
              <Box className="rrsslogin " sx={{ backgroundColor: "white" }}>
                <img
                  className="p-1"
                  src="https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png"
                />
                <Typography className="text-black">
                  Inicia sesión con Google
                </Typography>
              </Box>
            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  );
};
