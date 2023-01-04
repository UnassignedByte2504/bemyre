import React from 'react';

import DeleteAccount from "./deleteaccount/DeleteAccount.js";
import ProfileInfo from "./profileinfo/ProfileInfo.js";
import UserArtistProfile from "./userartistprofile/UserArtistProfile.js";
import UserPasswordManagement from "./userpasswordmanagement/UserPasswordManagement.js";
import UserPictures from "./userpictures/UserPictures.js";
import UserPrivacySettings from "./userprivacysettings/UserPrivacySettings.js";
import UserSocialMedia from "./usersocialmedia/UserSocialMedia.js";

export const UserSettingsMenuItems = [
  "Editar Informacion",
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
]

export const componentToRender = (name) => {
    const component = UserSettingsComponents.find(component => component.name === name);
    return component.component;
}
