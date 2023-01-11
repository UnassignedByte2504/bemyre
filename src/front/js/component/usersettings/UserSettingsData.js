import React from "react";

import DeleteAccount from "./deleteaccount/DeleteAccount.js";
import ProfileInfo from "./profileinfo/ProfileInfo.js";
import UserArtistProfile from "./userartistprofile/UserArtistProfile.js";
import UserPasswordManagement from "./userpasswordmanagement/UserPasswordManagement.js";
import UserPictures from "./userpictures/UserPictures.js";
import UserPrivacySettings from "./userprivacysettings/UserPrivacySettings.js";
import UserSocialMedia from "./usersocialmedia/UserSocialMedia.js";
import ContactInfo from "./contactinfo/ContactInfo.js";

export const UserSettingsMenuItems = [
  "Editar Informacion",
  "Informacion de Contacto",
  "Imagen de Perfil y Portada",
  "Redes Sociales",
  "Perfil de Artista",
  "Modificar Contraseña",
  "Ajustes de Privacidad",
  "Eliminar Cuenta",
];

export const UserSettingsComponents = [
  {
    name: "Editar Informacion",
    component: <ProfileInfo />,
  },
  {
    name: "Imagen de Perfil y Portada",
    component: <UserPictures />,
  },
  {
    name: "Redes Sociales",
    component: <UserSocialMedia />,
  },
  {
    name: "Perfil de Artista",
    component: <UserArtistProfile />,
  },
  {
    name: "Modificar Contraseña",
    component: <UserPasswordManagement />,
  },
  {
    name: "Ajustes de Privacidad",
    component: <UserPrivacySettings />,
  },
  {
    name: "Eliminar Cuenta",
    component: <DeleteAccount />,
  },
  {
    name: "Informacion de Contacto",
    component: <ContactInfo />,
  },
];

export const componentToRender = (name) => {
  const component = UserSettingsComponents.find(
    (component) => component.name === name
  );
  return component.component;
};

//UserPictures >>>>
export const getUserSettings = async () => {
  const token = sessionStorage.getItem("access_token");
  const userName = sessionStorage.getItem("current_user");

  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  await fetch(`${process.env.BACKEND_URL}/api/${userName}`, options)
    .then((response) => response.json())
    .then((data) => {
      sessionStorage.setItem("settings_profile_img", data.profile_img);
      sessionStorage.setItem("settings_portrait_img", data.portrait_img);

      return data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const clearUserImgs = (username) => {
  sessionStorage.removeItem("settings_profile_img");
  sessionStorage.removeItem("settings_portrait_img");
  window.location.href = `/user/${username}/ajustes`;
};

export const updateUserImgs = async (username) => {
  const token = sessionStorage.getItem("access_token");
  const profileImg = sessionStorage.getItem("settings_profile_img");
  const portraitImg = sessionStorage.getItem("settings_portrait_img");

  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: `{
      "profile_img": "${profileImg}",
      "portrait_img": "${portraitImg}"
    }`,
  };

  await fetch(
    `${process.env.BACKEND_URL}/api/settings/${username}/profileimgs`,
    options
  )
    .then((response) => response.json())
    .then((data) => {
      sessionStorage.setItem("profile_img", profileImg);
      clearUserImgs();
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
};
//UserPictures <<<<
