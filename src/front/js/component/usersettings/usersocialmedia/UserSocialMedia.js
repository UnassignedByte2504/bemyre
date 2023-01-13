//Import React
import React, { useContext, useEffect, useState } from "react";

//Import Material >>>
import { TextField, Typography, Box, Button } from "@mui/material";
//Import Material <<<
//Import Icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LanguageIcon from "@mui/icons-material/Language";
import EditIcon from "@mui/icons-material/Edit";
import TiktokIcon from "../../../../img/RRSS/tiktok_logo.png";
import SoundcloudIcon from "../../../../img/RRSS/soundcloud.png";
import SnapchatIcon from "../../../../img/RRSS/snapchat.png";

import SpotifyIcon from '../../../../img/RRSS/Spotify.png'
import CancelIcon from "@mui/icons-material/Cancel";
import { Context } from "../../../store/appContext";


//Main Function
const userName = sessionStorage.getItem("current_user");
const UserPasswordManagement = () => {
  const {store, actions} = useContext(Context)

  const editSocialMedia = async (username, fieldtomodify, newvalue) => {
    console.log("edit rrss values", username, fieldtomodify, newvalue);
    const options = {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
        "Content-Type": "application/json",
      },
      body: `{
            "${fieldtomodify}": "${newvalue}"
      }`,
    };
    await fetch(
      `${process.env.BACKEND_URL}/api/settings/${username}/socialmedia`,
      options
    )
      .then((response) => response.json())
      .then((result) =>
        sessionStorage.setItem(
          "cambios_rrss",
          "Información de redes sociales cambiada con éxito"
        )
      );
  }; 


  const fieldNames = {
    web: "website_url",
    youtube: "youtube_url",
    soundcloud: "soundcloud_url",
    instagram: "instagram_url",
    facebook: "facebook_url",
    twitter: "twitter_url",
    tiktok: "tiktok_url",
    snapchat: "snapchat_url",
    spotify: "spotify_url",
  };

  const [values, setValues] = useState({
    youtube: "",
    web: "",
    instagram: "",
    facebook: "",
    twitter: "",
    tiktok: "",
    snapchat: "",
    soundcloud: "",
    spotify:"",
  });
  const [open, setOpen] = useState({
    web: false,
    youtube: false,
    soundcloud: false,
    instagram: false,
    facebook: false,
    twitter: false,
    tiktok: false,
    snapchat: false,
    spotify: false
  });


  const handleValueChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Box className="m-2 changepasswordbox">
      <Typography className="my-3" variant="h3">
        Redes Sociales
      </Typography>
      <Box className="changepasswordform">
        {/* Condicional Website */}

        {!store.resultados?.user_social_media[0].website_url ? (
          <Box className="d-flex w-100">
            <TextField
              className="w-100 my-2"
              variant="outlined"
              label="Añadir sitio web"
              onChange={handleValueChange}
              name="web"
            />
            <Button 
                onClick={() =>
                  editSocialMedia(
                    userName,
                    fieldNames.web,
                    values.web
                  )
                }             
            className="ms-2">Añadir sitio web</Button>
          </Box>
        ) : (
          <>
            {!open.web ? (
              <Box className="d-flex justify-content-between w-100 align-items-center">
                <Typography variant="h5" className="my-3 w-100 text-start">
                  <LanguageIcon className="me-2" /> {store.resultados?.user_social_media[0].website_url}
                </Typography>
                <Button
                  onClick={() => setOpen({ web: true })}
                  className="text-white"
                >
                  Editar
                  <EditIcon className="ms-2" />
                </Button>
              </Box>
            ) : (
              <Box className="w-100 d-flex" onSubmit={handleSubmit}>
                <TextField
                  onChange={handleValueChange}
                  className="w-100 me-2"
                  label="Modificar URL Web"
                  name="web"

                />
                <Button 
                  onClick={() =>
                    editSocialMedia(
                      userName,
                      fieldNames.website,
                      values.web
                    )
                  }                
                type="submit" variant="contained">
                  Modificar
                </Button>
                <Button
                  variant="contained"
                  className="ms-2"
                  onClick={() => setOpen({ web: false })}

                >
                  Cancel
                </Button>
              </Box>
            )}
          </>
        )}

        {/* Condicional Youtube */}
        {!store.resultados?.user_social_media[0].soundcloud_url ? (
          <Box className="d-flex w-100">
            <TextField
              className="w-100 my-2"
              variant="outlined"
              label="Youtube"
              onChange={handleValueChange}
              name="youtube"
            />
            <Button
                onClick={() =>
                  editSocialMedia(
                    userName,
                    fieldNames.youtube,
                    values.youtube
                  )
                }            
            className="ms-2">Añadir YouTube</Button>
          </Box>
        ) : (
          <>
            {!open.youtube ? (
              <Box className="d-flex justify-content-between w-100 align-items-center">
                <Typography variant="h5" className="my-3 w-100 text-start">
                  <YouTubeIcon className="me-2" /> {store.resultados?.user_social_media[0].youtube_url}
                </Typography>

                <Button
                  onClick={() => setOpen({ youtube: true })}
                  className="text-white"
                >
                  Editar
                  <EditIcon className="ms-2" />
                </Button>
              </Box>
            ) : (
              <Box className="w-100 d-flex" onSubmit={handleSubmit}>
                <TextField
                  onChange={handleValueChange}
                  className="w-100 me-2"
                  label="Modificar perfl Youtube"

                  name="youtube"
                />
                <Button
                  onClick={() =>
                    editSocialMedia(
                      userName,
                      fieldNames.youtube,
                      values.youtube
                    )
                  }
                variant="contained" type="submit">
                  Modificar
                </Button>
                <Button
                  variant="contained"
                  className="ms-2"

                  onClick={() => setOpen({ youtube: false })}
                >
                  Cancel
                </Button>
              </Box>
            )}
          </>
        )}

        {/* Condicional soundcloud */}

        {!store.resultados?.user_social_media[0].soundcloud_url ? (
          <Box className="d-flex w-100">
            <TextField
              className="w-100 my-2"
              variant="outlined"
              label="Soundcloud"
              onChange={handleValueChange}
              name="soundcloud"
            />
            <Button 
              onClick={() =>
                editSocialMedia(
                  userName,
                  fieldNames.soundcloud,
                  values.soundcloud
                )
              }
            className="ms-2" type="submit">
              Añadir soundcloud
            </Button>
          </Box>
        ) : (
          <>

            {!open.soundcloud ? (

              <Box className="d-flex justify-content-between w-100 align-items-center">
                <Typography variant="h5" className="my-3 w-100 text-start">
                  <img src={SoundcloudIcon} className="logorrsssettings me-2" />{" "}
                  {store.resultados?.user_social_media[0].soundcloud_url}
                </Typography>
                <Button

                  onClick={() => setOpen({ soundcloud: true })}
                  className="text-white"
                >
                  Editar
                  <EditIcon className="ms-2" />
                </Button>
              </Box>
            ) : (
              <Box className="w-100 d-flex">
                <TextField

                  onChange={handleValueChange}
                  name="soundcloud"
                  className="w-100 me-2"
                  label="Modificar perfil soundcloud"
                />
                <Button
                  onClick={() =>
                    editSocialMedia(
                      userName,
                      fieldNames.soundcloud,
                      values.soundcloud
                    )
                  }
                  variant="contained"
                >
                  Modificar
                </Button>
                <Button
                  variant="contained"
                  className="ms-2"

                  onClick={() => setOpen({ soundcloud: false })}
                >
                  Cancel
                </Button>
              </Box>
            )}
          </>
        )}

        {/* Condicional Instagram */}

        {!store.resultados?.user_social_media[0].instagram_url? (
          <Box className="d-flex w-100">
            <TextField
              className="w-100 my-2"
              variant="outlined"
              label="Instagram"
              onChange={handleValueChange}
              name="instagram"
            />
            <Button 
              onClick={() =>
                editSocialMedia(
                  userName,
                  fieldNames.instagram,
                  values.instagram
                )
              }      
                  
            className="ms-2">
              Añadir Instagram
            </Button>
          </Box>
        ) : (
          <>

            {!open.instagram ? (
              <Box className="d-flex justify-content-between w-100 align-items-center">
                <Typography variant="h5" className="my-3 w-100 text-start">
                  <InstagramIcon className="me-2" /> {store.resultados?.user_social_media[0].instagram_url}
                </Typography>
                <Button

                  onClick={() => setOpen({ instagram: true })}
                  className="text-white"
                >
                  Editar
                  <EditIcon className="ms-2" />
                </Button>
              </Box>
            ) : (
              <Box className="w-100 d-flex">
                <TextField
                  className="w-100 me-2"
                  label="Modificar perfil Instagram"

                  name="instagram"
                  onChange={handleValueChange}
                />
                <Button 
                  onClick={() =>
                    editSocialMedia(
                      userName,
                      fieldNames.instagram,
                      values.instagram
                    )
                  }
                type="submit" variant="contained">
                  Modificar
                </Button>
                <Button
                  variant="contained"
                  className="ms-2"

                  onClick={() => setOpen({ instagram: false })}
                >
                  Cancel
                </Button>
              </Box>
            )}
          </>
        )}

        {/* Condicional Facebook */}

        {!store.resultados?.user_social_media[0].facebook_url ? (
          <Box className="d-flex w-100">
            <TextField
              className="w-100 my-2"
              variant="outlined"
              label="Facebook"

              onChange={handleValueChange}
              name="facebook"
            />
            <Button 
              onClick={() =>
                editSocialMedia(
                  userName,
                  fieldNames.facebook,
                  values.facebook
                )
              }  
            className="ms-2" >
              Añadir Facebook
            </Button>
          </Box>
        ) : (
          <>

            {!open.facebook ? (
              <Box className="d-flex justify-content-between w-100 align-items-center">
                <Typography variant="h5" className="my-3 w-100 text-start">
                  <FacebookIcon className="me-2" /> {store.resultados?.user_social_media[0].facebook_url}
                </Typography>
                <Button

                  onClick={() => setOpen({ facebook: true })}
                  className="text-white"
                >
                  Editar
                  <EditIcon className="ms-2" />
                </Button>
              </Box>
            ) : (
              <Box className="w-100 d-flex">
                <TextField

                  name="facebook"
                  className="w-100 me-2"
                  label="Modificar perfil Facebook"
                  onChange={handleValueChange}
                />
                <Button 
                  onClick={() =>
                    editSocialMedia(
                      userName,
                      fieldNames.facebook,
                      values.facebook
                    )
                  }                
                type="submit" variant="contained">
                  Modificar
                </Button>
                <Button
                  variant="contained"
                  className="ms-2"

                  onClick={() => setOpen({ facebook: false })}
                >
                  Cancel
                </Button>
              </Box>
            )}
          </>
        )}

        {/* Condicional Twitter */}

        {!store.resultados?.user_social_media[0].twitter_url ? (
          <Box className="d-flex w-100">
            <TextField
              className="w-100 my-2"
              variant="outlined"
              label="Twitter"
              onChange={handleValueChange}
              name="twitter"
            />
            <Button 
                  onClick={() =>
                    editSocialMedia(
                      userName,
                      fieldNames.twitter,
                      values.twitter
                    )
                  }            
            className="ms-2" >
              Añadir Twitter
            </Button>
          </Box>
        ) : (
          <>

            {!open.twitter ? (
              <Box className="d-flex justify-content-between w-100 align-items-center">
                <Typography variant="h5" className="my-3 w-100 text-start">
                  <TwitterIcon className="me-2" /> {store.resultados?.user_social_media[0].twitter_url}
                </Typography>

                <Button
                  onClick={() => setOpen({ twitter: true })}
                  className="text-white"
                >
                  Editar
                  <EditIcon className="ms-2" />
                </Button>
              </Box>
            ) : (
              <Box className="w-100 d-flex">
                <TextField
                  onChange={handleValueChange}
                  className="w-100 me-2"
                  label="Modificar perfil Twitter"

                  name="twitter"
                />
                <Button 
                  onClick={() =>
                    editSocialMedia(
                      userName,
                      fieldNames.twitter,
                      values.twitter
                    )
                  }                
                variant="contained" type="submit">
                  Modificar
                </Button>
                <Button
                  variant="contained"
                  className="ms-2"

                  onClick={() => setOpen({ twitter: false })}
                >
                  Cancel
                </Button>
              </Box>
            )}
          </>
        )}

        {/* Condicional TikTok */}

        {!store.resultados?.user_social_media[0].tiktok_url ? (
          <Box className="d-flex w-100">
            <TextField
              className="w-100 my-2"
              variant="outlined"
              label="TikTok"
              onChange={handleValueChange}
              name="tiktok"
            />
            <Button 
              onClick={() =>
                editSocialMedia(
                  userName,
                  fieldNames.tiktok,
                  values.tiktok
                )
              }   
            className="ms-2" >
              Añadir Tiktok
            </Button>
          </Box>
        ) : (
          <>

            {!open.tiktok ? (
              <Box className="d-flex justify-content-between w-100 align-items-center">
                <Typography variant="h5" className="my-3 w-100 text-start">
                  <img src={TiktokIcon} className="logorrsssettings me-2" />{" "}
                  {store.resultados?.user_social_media[0].tiktok_url}
                </Typography>

                <Button
                  onClick={() => setOpen({ tiktok: true })}
                  className="text-white"
                >
                  Editar
                  <EditIcon className="ms-2" />
                </Button>
              </Box>
            ) : (
              <Box className="w-100 d-flex">
                <TextField
                  className="w-100 me-2"
                  label="Modificar perfil Tiktok"
                  onChange={handleValueChange}

                  name="tiktok"
                />
                <Button 
                  onClick={() =>
                    editSocialMedia(
                      userName,
                      fieldNames.tiktok,
                      values.tiktok
                    )
                  }                
                variant="contained" type="submit">
                  Modificar
                </Button>
                <Button
                  variant="contained"
                  className="ms-2"

                  onClick={() => setOpen({ tiktok: false })}
                >
                  Cancel
                </Button>
              </Box>
            )}
          </>
        )}

        {/* Condicional snapchat */}

        {!store.resultados?.user_social_media[0].snapchat_url ? (
          <Box className="d-flex w-100">
            <TextField
              className="w-100 my-2"
              variant="outlined"
              label="Snapchat"
              onChange={handleValueChange}
              name="snapchat"
            />
            <Button 
              onClick={() =>
              editSocialMedia(
                userName,
                fieldNames.snapchat,
                values.snapchat
              )
            }            
            >Añadir Snapchat</Button>
          </Box>
        ) : (
          <>

            {!open.snapchat ? (
              <Box className="d-flex justify-content-between w-100 align-items-center">
                <Typography variant="h5" className="my-3 w-100 text-start">
                  <img src={SnapchatIcon} className="logorrsssettings me-2" />{" "}
                  {store.resultados?.user_social_media[0].snapchat_url}
                </Typography>
                <Button

                  onClick={() => setOpen({ snapchat: true })}
                  className="text-white"
                >
                  Editar
                  <EditIcon className="ms-2" />
                </Button>
              </Box>
            ) : (
              <Box className="w-100 d-flex" onSubmit={handleSubmit}>
                <TextField

                  name="snapchat"
                  onChange={handleValueChange}
                  className="w-100 me-2"
                  label="Modificar perfil snapchat"
                />
                <Button 
                  onClick={() =>
                    editSocialMedia(
                      userName,
                      fieldNames.snapchat,
                      values.snapchat
                    )
                  }
                variant="contained" 
                type="submit">

                  Modificar
                </Button>
                <Button
                  variant="contained"
                  className="ms-2"

                  onClick={() => setOpen({ snapchat: false })}
                >
                  Cancel
                </Button>
              </Box>
            )}
          </>
        )}

        {/* Condicional spotify */}
        {!store.resultados?.user_social_media[0].spotify_url ? (
          <Box className="d-flex w-100">
            <TextField
              className="w-100 my-2"
              variant="outlined"
              label="spotify"
              onChange={handleValueChange}
              name="spotify"
            />
            <Button 
              onClick={() =>
                editSocialMedia(
                  userName,
                  fieldNames.spotify,
                  values.spotify
                )
              }                
            
            type="submit">Añadir spotify</Button>
          </Box>
        ) : (
          <>
            {!open.spotify ? (
              <Box className="d-flex justify-content-between w-100 align-items-center">
                <Typography variant="h5" className="my-3 w-100 text-start">
                <img src={SpotifyIcon} className="logorrsssettings me-2" />{" "}
                  {store.resultados?.user_social_media[0].spotify_url}
                </Typography>
                <Button
                  onClick={() => setOpen({ spotify: true })}
                  className="text-white"
                >
                  Editar
                  <EditIcon className="ms-2" />
                </Button>
              </Box>
            ) : (
              <Box className="w-100 d-flex" onSubmit={handleSubmit}>
                <TextField
                  name="spotify"
                  onChange={handleValueChange}
                  className="w-100 me-2"
                  label="Modificar perfil spotify"
                />
                <Button 
                  onClick={() =>
                    editSocialMedia(
                      userName,
                      fieldNames.spotify,
                      values.spotify
                    )
                  }                
                variant="contained" 
                type="submit">
                  Modificar
                </Button>
                <Button
                  variant="contained"
                  className="ms-2"
                  onClick={() => setOpen({ spotify: false })}
                >
                  Cancel
                </Button>
              </Box>
            )}
          </>
        )}
      </Box>
    </Box>
  );
};

export default UserPasswordManagement;
