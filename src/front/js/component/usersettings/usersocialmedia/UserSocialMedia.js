//Import React
import React, { useContext, useEffect, useState } from "react";

//Import Material >>>
import { TextField, Typography, Box, Button } from "@mui/material";
//Import Material <<<
//Import Formik
import { useFormik } from "formik";

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
import CancelIcon from "@mui/icons-material/Cancel";
import { Context } from "../../../store/appContext";


//Main Function
const userName = sessionStorage.getItem("current_user");
const UserPasswordManagement = () => {

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
    website: "website_url",
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

  const submitFormPassword = (values) => {};
  const { handleSubmit, handleChange, isSubmitting } = useFormik({
    initialValues: {
      youtube: "",
      web: "",
      instagram: "",
      facebook: "",
      twitter: "",
      tiktok: "",
      snapchat: "",
    },
    onSubmit: submitFormPassword,
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
      <form onSubmit={handleSubmit} className="changepasswordform">
        {/* Condicional Website */}

        {1 + 1 == 22 ? (
          <Box className="d-flex w-100">
            <TextField
              className="w-100 my-2"
              variant="outlined"
              label="Añadir sitio web"
              type="url"
              onChange={handleChange}
              name="web"
            />
            <Button className="ms-2">Añadir sitio web</Button>
          </Box>
        ) : (
          <>
            {!open.web ? (
              <Box className="d-flex justify-content-between w-100 align-items-center">
                <Typography variant="h5" className="my-3 w-100 text-start">
                  <LanguageIcon className="me-2" /> www.bemyre.com
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
                  onChange={handleChange}
                  className="w-100 me-2"
                  label="Modificar URL Web"
                  name="web"

                />
                <Button type="submit" variant="contained">
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
        {1 + 1 == 22 ? (
          <Box className="d-flex">
            <TextField
              className="w-100 my-2"
              variant="outlined"
              label="Youtube"
              type="url"
              onChange={handleChange}
              name="youtube"
            />
            <Button className="ms-2">Añadir YouTube</Button>
          </Box>
        ) : (
          <>
            {!open.youtube ? (
              <Box className="d-flex justify-content-between w-100 align-items-center">
                <Typography variant="h5" className="my-3 w-100 text-start">
                  <YouTubeIcon className="me-2" /> www.YouTube.com/bemyre
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
                  onChange={handleChange}
                  className="w-100 me-2"
                  label="Modificar perfl Youtube"

                  name="youtube"
                />
                <Button variant="contained" type="submit">
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

        {1 + 1 == 32 ? (
          <Box className="d-flex">
            <TextField
              className="w-100 my-2"
              variant="outlined"
              label="Soundcloud"

              type="url"
              onChange={handleChange}
              name="soundcloud"
            />
            <Button className="ms-2" type="submit">
              Añadir soundcloud
            </Button>
          </Box>
        ) : (
          <>

            {!open.soundcloud ? (

              <Box className="d-flex justify-content-between w-100 align-items-center">
                <Typography variant="h5" className="my-3 w-100 text-start">
                  <img src={SoundcloudIcon} className="logorrsssettings me-2" />{" "}
                  @bemyre
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

        {1 + 1 == 32 ? (
          <Box>
            <TextField
              className="w-100 my-2"
              variant="outlined"
              label="Instagram"

              type="url"
              onChange={handleChange}
              name="instagram"
            />
            <Button type="submit" className="ms-2">
              Añadir Instagram
            </Button>
          </Box>
        ) : (
          <>

            {!open.instagram ? (
              <Box className="d-flex justify-content-between w-100 align-items-center">
                <Typography variant="h5" className="my-3 w-100 text-start">
                  <InstagramIcon className="me-2" /> @bemyre
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
                  onChange={handleChange}
                />
                <Button type="submit" variant="contained">
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

        {1 + 1 == 32 ? (
          <Box className="d-flex">
            <TextField
              className="w-100 my-2"
              variant="outlined"
              label="Facebook"

              type="url"
              onChange={handleChange}
              name="facebook"
            />
            <Button className="ms-2" type="submit">
              Añadir Facebook
            </Button>
          </Box>
        ) : (
          <>

            {!open.facebook ? (
              <Box className="d-flex justify-content-between w-100 align-items-center">
                <Typography variant="h5" className="my-3 w-100 text-start">
                  <FacebookIcon className="me-2" /> facebook.com/bemyre
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
                  onChange={handleChange}
                />
                <Button type="submit" variant="contained">
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

        {1 + 1 == 32 ? (
          <Box className="d-flex w-100">
            <TextField
              className="w-100 my-2"
              variant="outlined"
              label="Twitter"

              type="url"
              onChange={handleChange}
              name="twitter"
            />
            <Button className="ms-2" type="submit">
              Añadir
            </Button>
          </Box>
        ) : (
          <>

            {!open.twitter ? (
              <Box className="d-flex justify-content-between w-100 align-items-center">
                <Typography variant="h5" className="my-3 w-100 text-start">
                  <TwitterIcon className="me-2" /> @bemyre{" "}
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
                  onChange={handleChange}
                  className="w-100 me-2"
                  label="Modificar perfil Twitter"

                  name="twitter"
                />
                <Button variant="contained" type="submit">
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

        {1 + 1 == 32 ? (
          <Box>
            <TextField
              className="w-100 my-2"
              variant="outlined"
              label="TikTok"

              type="url"
              onChange={handleChange}
              name="tiktok"
            />
            <Button className="ms-2" type="submit">
              Añadir Tiktok
            </Button>
          </Box>
        ) : (
          <>

            {!open.tiktok ? (
              <Box className="d-flex justify-content-between w-100 align-items-center">
                <Typography variant="h5" className="my-3 w-100 text-start">
                  <img src={TiktokIcon} className="logorrsssettings me-2" />{" "}
                  @bemyre
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
                  onChange={handleChange}

                  name="tiktok"
                />
                <Button variant="contained" type="submit">
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

        {1 + 1 == 32 ? (
          <Box className="d-flex">
            <TextField
              className="w-100 my-2"
              variant="outlined"
              label="Snapchat"

              type="url"
              onChange={handleChange}
              name="snapchat"
            />
            <Button type="submit">Añadir Snapchat</Button>
          </Box>
        ) : (
          <>

            {!open.snapchat ? (
              <Box className="d-flex justify-content-between w-100 align-items-center">
                <Typography variant="h5" className="my-3 w-100 text-start">
                  <img src={SnapchatIcon} className="logorrsssettings me-2" />{" "}
                  @bemyre
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
                  onChange={handleChange}
                  className="w-100 me-2"
                  label="Modificar perfil snapchat"
                />
                <Button variant="contained" type="submit">
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
        {1 + 1 == 32 ? (
          <Box className="d-flex">
            <TextField
              className="w-100 my-2"
              variant="outlined"
              label="spotify"
              type="url"
              onChange={handleChange}
              name="spotify"
            />
            <Button type="submit">Añadir spotify</Button>
          </Box>
        ) : (
          <>
            {!open.spotify ? (
              <Box className="d-flex justify-content-between w-100 align-items-center">
                <Typography variant="h5" className="my-3 w-100 text-start">
                  <PlayCircleIcon/>
                  @bemyre
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
                  onChange={handleChange}
                  className="w-100 me-2"
                  label="Modificar perfil spotify"
                />
                <Button variant="contained" type="submit">
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
      </form>
    </Box>
  );
};

export default UserPasswordManagement;
