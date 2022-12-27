// Nota importante: Las imagenes son ejemplos, debemos vincularlas con la base de datos para que el usuario pueda añadir sus propias imagenes
import { Box } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CardProfile } from "../component/card/CardProfile.jsx";
import { Button, useTheme } from "@mui/material";
import { Context } from "../store/appContext";
import EditIcon from "@mui/icons-material/Edit";
export const Profile = () => {
  const { actions, store } = useContext(Context);
  const params = useParams();
  useEffect(() => {
    actions.fetchUser(params.username);
  }, []);
  const theme = useTheme()
  return (
    <>
      <div className="position-relative position-relative-example headerProfile">
        <div className=" d-flex flex-column justify-content-center align-items-end container nameheader">
          <div>
            <h1>
              {store.resultados.first_name} {store.resultados.last_name}
            </h1>
          </div>
          <div>
            <p>Localidad: Sevilla</p>
          </div>
        </div>
      </div>

      <div className="cardandreproductor container ">
        {/* Left side  */}

        <div className="leftside">
          <div className="cardprofile">
            <CardProfile
              first_name={store.resultados.first_name}
              last_name={store.resultados.last_name}
            />
          </div>
          <div className="cardbandasleft">
            <h3 className="text-center">Hay 3 bandas que buscan guitarrista</h3>
            <Button variant="contained">Unete a esas bandas</Button>
          </div>
        </div>

        {/* Right side */}

        <Box className="rightside mt-5 p-4" sx={{
            backgroundColor: theme.palette.background.card
        }}>
          { store.username === store.current_user ? <div className="d-flex justify-content-end align-items-center">
            <p className="text-end pt-3">
              <Link className="text-white text-decoration-none" to="/">
                Editar Información <EditIcon />
              </Link>
            </p>
          </div> : null}
          {1 + 1 === 2 ? (
            <>
              <div>
                <iframe
                  style={{ borderRadius: "12px" }}
                  src="https://open.spotify.com/embed/track/5rhMc6IqSdVsyF7bRieSTc?utm_source=generator"
                  width="100%"
                  height="152"
                  allowFullScreen=""
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                ></iframe>
              </div>
              <div>
                <iframe
                  style={{ borderRadius: "12px" }}
                  src="https://open.spotify.com/embed/track/6dFn6my1sHK2bcf23GlHwM?utm_source=generator"
                  width="100%"
                  height="152"
                  frameBorder="0"
                  allowFullScreen=""
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                ></iframe>
              </div>
            </>
          ) : null}

          {1 + 1 === 2 ? (
            <div className="mt-5">
              <h3>
                <strong>Mis instrumentos</strong>{" "}
                <Link className="text-white text-decoration-none" to="/">
                  <EditIcon />
                </Link>
              </h3>
              <hr />
              <p className="my-3">Guitarra acustica</p>
            </div>
          ) : null}

          {1 + 1 === 2 ? (
            <div className="mt-5">
              <h3>
                Mi estilo de música y trayectoria{" "}
                <Link className="text-white text-decoration-none" to="/">
                  <EditIcon />
                </Link>
              </h3>
              <hr />
              <div className="musicstyle my-3">
                <div className="bubbles">
                  <strong>Rock</strong>
                </div>
                <div className="bubbles">
                  <strong>Metal</strong>
                </div>
                <div className="bubbles">
                  <strong>Indie</strong>
                </div>
              </div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum
              </p>
            </div>
          ) : null}

          {1 + 1 === 2 ? (
            <div className="mt-5">
              <h3>
                Mis influencias{" "}
                <Link className="text-white text-decoration-none" to="/">
                  <EditIcon />
                </Link>
              </h3>
              <hr />
              <div className="videoinfluencias d-flex flex-wrap justify-content-evenly ">
                <iframe
                  className="my-3"
                  src="https://www.youtube.com/embed/aIHF7u9Wwiw"
                ></iframe>
                <iframe
                  className="my-3"
                  src="https://www.youtube.com/embed/6B3YwcjQ_bU"
                ></iframe>
              </div>
            </div>
          ) : null}

          {1 + 1 === 2 ? (
            <div className="mt-5">
              <h3>
                Mi equipo{" "}
                <Link className="text-white text-decoration-none" to="/">
                  <EditIcon />
                </Link>
              </h3>
              <hr />
              <ul>
                <li className="my-1">
                  <strong>Instrumentos/ modelox/ categoria/Estilo</strong>
                </li>
                <li className="my-1">
                  <strong>Instrumentos/ modelox/ categoria/Estilo</strong>
                </li>
                <li className="my-1">
                  <strong>Instrumentos/ modelox/ categoria/Estilo</strong>
                </li>
                <li className="my-1">
                  <strong>Instrumentos/ modelox/ categoria/Estilo</strong>
                </li>
              </ul>
              <div className="miequipo">
                <img src="https://images.unsplash.com/photo-1617160895032-11179689e7b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" />
                <img src="https://www.muslands.com/732-thickbox_default/frontman-10g-amplificador-guitarra-electrica-fender.jpg" />
                <img src="https://hoygrabo.com/wp-content/uploads/2019/02/microfono-condensador.jpg" />
                <img src="https://16nou.com/wp-content/uploads/2019/01/Focusrite-scarlett-2i2-2nd-gen.jpg" />
              </div>
            </div>
          ) : null}
        </Box>
      </div>
    </>
  );
};
