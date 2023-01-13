//Import React
import React, { useContext, useEffect, useState } from "react";

//Import Material
import { TextField, Typography, Box, Button } from "@mui/material";
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
//Import Styles
import "../../../../styles/index.css";
import { useParams } from "react-router-dom";

//Main Function

const UserPasswordManagement = () => {
  const params = useParams();
  const username = params.username;
  console.log(username)
  const { store, actions } = useContext(Context);
  const [web, setWeb] = useState(false);
  const [youtube, setYoutube] = useState(false);
  const [soundcloud, setSoundcloud] = useState(false);
  const [instagram, setInstagram] = useState(false);
  const [facebook, setFacebook] = useState(false);
  const [twitter, setTwitter] = useState(false);
  const [tiktok, setTiktok] = useState(false);
  const [snapchat, setSnapchat] = useState(false);
  const [spotify, setSpotify] = useState(false);

  const onSubmit = (values) => {
    actions.editSocialMedia(
      username,
      values.website_url,
      values.youtube_url,
      values.soundcloud_url,
      values.instagram_url,
      values.facebook_url,
      values.twitter_url,
      values.tiktok_url,
      values.snapchat_url,
      values.spotify_url
    );
    console.log(values);
  };
  const { handleSubmit, handleChange, isSubmitting } = useFormik({
    initialValues: {
      youtube_url: store.resultados?.user_social_media[0].youtube_url,
      website_url: store.resultados?.user_social_media[0].website_url,
      soundcloud_url: store.resultados?.user_social_media[0].soundcloud_url,
      instagram_url: store.resultados?.user_social_media[0].instagram_url,
      facebook_url: store.resultados?.user_social_media[0].facebook_url,
      twitter_url: store.resultados?.user_social_media[0].twitter_url,
      tiktok_url: store.resultados?.user_social_media[0].tiktok,
      snapchat_url: store.resultados?.user_social_media[0].snapchat_url,
      spotify_url: store.resultados?.user_social_media[0].spotify_url
    },
    onSubmit,
  });

  console.log(store.resultados?.user_social_media[0])

  return (
    <Box className="m-2 changepasswordbox">
      <Typography className="my-3" variant="h3">
        Redes Sociales
      </Typography>
      <form onSubmit={handleSubmit} className="changepasswordform">
        
        {/* Condicional Website */}
        {!store.resultados?.user_social_media[0].website_url ? (
          
          <Box className="d-flex w-100">
            <TextField
              className="w-100 my-2"
              variant="outlined"
              label="Añadir sitio web"
              onChange={handleChange}
              name="website_url"
            />
            <Button type="submit" className="ms-2">
              Añadir sitio web
            </Button>
          </Box>
        ) : (
          <>
            {web == false ? (
              <Box className="d-flex justify-content-between w-100 align-items-center">
                <Typography variant="h5" className="my-3 w-100 text-start">
                  <LanguageIcon className="me-2" />
                  {store.resultados?.user_social_media[0].website_url}
                </Typography>
                <Button onClick={() => setWeb(true)} className="text-white">
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
                  name="website_url"
                />
                <Button type="submit" variant="contained">
                  Modificar
                </Button>
                <Button
                  variant="contained"
                  className="ms-2"
                  onClick={() => setWeb(false)}
                >
                  Cancel
                </Button>
              </Box>
            )}
          </>
        )}

        {/* Condicional Youtube */}
        {!store.resultados?.user_social_media[0].youtube_url ? (
          <Box className="d-flex w-100">
            <TextField
              className="w-100 my-2"
              variant="outlined"
              label="Youtube"
              onChange={handleChange}
              name="youtube_url"
            />
            <Button type="submit" className="ms-2">
              Añadir YouTube
            </Button>
          </Box>
        ) : (
          <>
            {youtube == false ? (
              <Box className="d-flex justify-content-between w-100 align-items-center">
                <Typography variant="h5" className="my-3 w-100 text-start">
                  <YouTubeIcon className="me-2" /> www.YouTube.com/bemyre
                </Typography>
                <Button onClick={() => setYoutube(true)} className="text-white">
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
                  name="youtube_url"
                />
                <Button variant="contained" type="submit">
                  Modificar
                </Button>
                <Button
                  variant="contained"
                  className="ms-2"
                  onClick={() => setYoutube(false)}
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
              onChange={handleChange}
              name="soundcloud_url"
            />
            <Button className="ms-2" type="submit">
              Añadir soundcloud
            </Button>
          </Box>
        ) : (
          <>
            {soundcloud == false ? (
              <Box className="d-flex justify-content-between w-100 align-items-center">
                <Typography variant="h5" className="my-3 w-100 text-start">
                  <img src={SoundcloudIcon} className="logorrsssettings me-2" />{" "}
                  @bemyre
                </Typography>
                <Button
                  onClick={() => setSoundcloud(true)}
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
                  name="soundcloud_url"
                  className="w-100 me-2"
                  label="Modificar perfil soundcloud"
                />
                <Button type="submit" variant="contained">
                  Modificar
                </Button>
                <Button
                  variant="contained"
                  className="ms-2"
                  onClick={() => setSoundcloud(false)}
                >
                  Cancel
                </Button>
              </Box>
            )}
          </>
        )}

        {/* Condicional Instagram */}
        {!store.resultados?.user_social_media[0].instagram_url ? (
          <Box className="d-flex w-100">
            <TextField
              className="w-100 my-2"
              variant="outlined"
              label="Instagram"
              onChange={handleChange}
              name="instagram_url"
            />
            <Button type="submit" className="ms-2">
              Añadir Instagram
            </Button>
          </Box>
        ) : (
          <>
            {instagram == false ? (
              <Box className="d-flex justify-content-between w-100 align-items-center">
                <Typography variant="h5" className="my-3 w-100 text-start">
                  <InstagramIcon className="me-2" /> @bemyre
                </Typography>
                <Button
                  onClick={() => setInstagram(true)}
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
                  name="instagram_url"
                  onChange={handleChange}
                />
                <Button type="submit" variant="contained">
                  Modificar
                </Button>
                <Button
                  variant="contained"
                  className="ms-2"
                  onClick={() => setInstagram(false)}
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
              onChange={handleChange}
              name="facebook_url"
            />
            <Button className="ms-2" type="submit">
              Añadir Facebook
            </Button>
          </Box>
        ) : (
          <>
            {facebook == false ? (
              <Box className="d-flex justify-content-between w-100 align-items-center">
                <Typography variant="h5" className="my-3 w-100 text-start">
                  <FacebookIcon className="me-2" /> facebook.com/bemyre
                </Typography>
                <Button
                  onClick={() => setFacebook(true)}
                  className="text-white"
                >
                  Editar
                  <EditIcon className="ms-2" />
                </Button>
              </Box>
            ) : (
              <Box className="w-100 d-flex">
                <TextField
                  name="facebook_url"
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
                  onClick={() => setFacebook(false)}
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
              onChange={handleChange}
              name="twitter_url"
            />
            <Button className="ms-2" type="submit">
              Añadir twitter
            </Button>
          </Box>
        ) : (
          <>
            {twitter == false ? (
              <Box className="d-flex justify-content-between w-100 align-items-center">
                <Typography variant="h5" className="my-3 w-100 text-start">
                  <TwitterIcon className="me-2" /> @bemyre{" "}
                </Typography>
                <Button onClick={() => setTwitter(true)} className="text-white">
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
                  name="twitter_url"
                />
                <Button variant="contained" type="submit">
                  Modificar
                </Button>
                <Button
                  variant="contained"
                  className="ms-2"
                  onClick={() => setTwitter(false)}
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
              onChange={handleChange}
              name="tiktok_url"
            />
            <Button className="ms-2" type="submit">
              Añadir Tiktok
            </Button>
          </Box>
        ) : (
          <>
            {tiktok == false ? (
              <Box className="d-flex justify-content-between w-100 align-items-center">
                <Typography variant="h5" className="my-3 w-100 text-start">
                  <img src={TiktokIcon} className="logorrsssettings me-2" />{" "}
                  @bemyre
                </Typography>
                <Button onClick={() => setTiktok(true)} className="text-white">
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
                  name="tiktok_url"
                />
                <Button variant="contained" type="submit">
                  Modificar
                </Button>
                <Button
                  variant="contained"
                  className="ms-2"
                  onClick={() => setTiktok(false)}
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
              onChange={handleChange}
              name="snapchat_url"
            />
            <Button type="submit">Añadir Snapchat</Button>
          </Box>
        ) : (
          <>
            {snapchat == false ? (
              <Box className="d-flex justify-content-between w-100 align-items-center">
                <Typography variant="h5" className="my-3 w-100 text-start">
                  <img src={SnapchatIcon} className="logorrsssettings me-2" />{" "}
                  @bemyre
                </Typography>
                <Button
                  onClick={() => setSnapchat(true)}
                  className="text-white"
                >
                  Editar
                  <EditIcon className="ms-2" />
                </Button>
              </Box>
            ) : (
              <Box className="w-100 d-flex" onSubmit={handleSubmit}>
                <TextField
                  name="snapchat_url"
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
                  onClick={() => setSnapchat(false)}
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
              label="Spotify"
              onChange={handleChange}
              name="spotify_url"
            />
            <Button type="submit">Añadir Snapchat</Button>
          </Box>
        ) : (
          <>
            {spotify == false ? (
              <Box className="d-flex justify-content-between w-100 align-items-center">
                <Typography variant="h5" className="my-3 w-100 text-start">
                  <img src={SnapchatIcon} className="logorrsssettings me-2" />{" "}
                  @bemyre
                </Typography>
                <Button
                  onClick={() => setSpotify(true)}
                  className="text-white"
                >
                  Editar
                  <EditIcon className="ms-2" />
                </Button>
              </Box>
            ) : (
              <Box className="w-100 d-flex" onSubmit={handleSubmit}>
                <TextField
                  name="spotify_url"
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
                  onClick={() => setSpotify(false)}
                >
                  Cancel
                </Button>
              </Box>
            )}
          </>
        )}


        {/* <Button
        variant='contained'
        type='submit'
        className='my-2'
        >Cambiar Contraseña</Button> */}
      </form>
    </Box>
  );
};

export default UserPasswordManagement;
