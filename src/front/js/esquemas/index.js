import * as Yup from "yup";
// paso 1 importar yup

const emailRules =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const passwordRules =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
// Añadimos reglas

// Hacemos el primer esquema

export const signupSchema = Yup.object().shape({
  email: Yup.string()
    .email("Correo invalido")
    .required("Correo obligatorio")
    .matches(emailRules, "Correo no cumple los requisitos"),
  confirmEmail: Yup.string()
    .email("Correo invalido")
    .required("Correo obligatorio")
    .oneOf([Yup.ref("email"), null], "Correo no coincide"),
  password: Yup.string()
    .min(8, "No cumple caracteres minimos")
    .required("Password necesaria")
    .matches(passwordRules, "Password no cumple con los requisitos"),
  confirmPassword: Yup.string()
    .required("Confirmación contraseña obligatoria")
    .oneOf([Yup.ref("password"), null], "Password no coincide"),
  firstName: Yup.string().required("Nombre obligatorio"),
  lastName: Yup.string().required("Apellido obligatorio"),
  userName: Yup.string().required("Username necesario"),
  confirmUserName: Yup.string()
    .oneOf([Yup.ref("userName"), null], "UserName no coincide")
    .required("Confirmación necesaria")
});

export const loginSchema = Yup.object().shape({
  email: Yup.string().required("Correo obligatorio"),
  password: Yup.string().required("Contraseña obligatoria"),
});
