//Import react
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

//Import img
import acoruña from "../../../img/cities/acoruña.jpg";
import albacete from "../../../img/cities/albacete.jpg";
import alicante from "../../../img/cities/alicante.jpg";
import almeria from "../../../img/cities/almeria.jpeg";
import asturias from "../../../img/cities/asturias.jpg";
import avila from "../../../img/cities/avila.jpg";
import badajoz from "../../../img/cities/badajoz.jpg";
import barcelona from "../../../img/cities/barcelona.jpg";
import burgos from "../../../img/cities/burgos.jpg";
import caceres from "../../../img/cities/caceres.jpg";
import castellon from "../../../img/cities/castellon.jpg";
import ciudadreal from "../../../img/cities/ciudadreal.jpg";
import cuenca from "../../../img/cities/cuenca.jpg";
import girona from "../../../img/cities/girona.jpg";
import granada from "../../../img/cities/granada.jpg";
import huelva from "../../../img/cities/huelva.jpg";
import huesca from "../../../img/cities/huesca.jpg";
import islasbaleares from "../../../img/cities/islasbaleares.jpg";
import jaen from "../../../img/cities/jaen.jpg";
import larioja from "../../../img/cities/larioja.jpg";
import laspalmas from "../../../img/cities/laspalmas.jpg";
import leon from "../../../img/cities/leon.jpg";
import lleida from "../../../img/cities/lleida.jpg";
import lugo from "../../../img/cities/lugo.jpg";
import madrid from "../../../img/cities/madrid.jpg";
import malaga from "../../../img/cities/malaga.jpg";
import murcia from "../../../img/cities/murcia.jpg";
import navarra from "../../../img/cities/navarra.jpg";
import palencia from "../../../img/cities/palencia.jpg";
import pontevedra from "../../../img/cities/pontevedra.jpg";
import salamanca from "../../../img/cities/salamanca.jpg";
import santander from "../../../img/cities/avila.jpg";
import segovia from "../../../img/cities/segovia.jpg";
import sevilla from "../../../img/cities/sevilla.jpg";
import soria from "../../../img/cities/soria.jpg";
import tarragona from "../../../img/cities/tarragona.jpg";
import tenerife from "../../../img/cities/tenerife.jpg";
import teruel from "../../../img/cities/teruel.jpg";
import valencia from "../../../img/cities/valencia.jpg";
import valladolid from "../../../img/cities/valladolid.jpg";
import vizcaya from "../../../img/cities/vizcaya.jpg";
import zamora from "../../../img/cities/zamora.jpg";
import zaragoza from "../../../img/cities/zaragoza.jpg";

//Import materials
import { Box, Typography, useTheme } from "@mui/material";
import Button from "@mui/material/Button";
import AnimatedButton from "../buttons/AnimatedButton.jsx";
import { bandas, locales } from "../../mockingData";
import { CardBandas } from "../BandasCard/CardBandas.jsx";
import { CardLocal } from "../LocalesCard/CardLocal.jsx";
import { Context } from "../../store/appContext";

//Function

export const LoginJumbo = () => {
  const { actions, store } = useContext(Context);
  const [activePage, setActivePage] = useState();
  const [lattitude, setLattitude] = useState();
  const [longitude, setLongitude] = useState();
  const [currentCity, setCurrentCity] = useState();

  
  const fetchCityName = async () => {
    const apiKey = store.geo_api_key;
    const opts = {
      method: "GET",
    };
    const geoApiurl = `https://api.geoapify.com/v1/geocode/reverse?lat=${lattitude}&lon=${longitude}&apiKey=${apiKey}`;
    await fetch(geoApiurl, opts)
      .then((response) => response.json())
      .then((data) => {
        setCurrentCity(data.features[0].properties.city);
      });
  };

  useEffect(() => {
    const currentPath = window.location.pathname;
    setActivePage(currentPath);
    actions.setLocation(currentPath);
  }, [store.currentPath]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLattitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }, []);
  useEffect(() => {
    fetchCityName();
  }, [lattitude]);

  return (
    <Box 
    className="d-flex justify-content-center align-items-center"
    sx={{
      backgroundImage: `url(${malaga})`,
      height: "40vh",
      backgroundSize: "cover",
      backgroundPosition: "center"
    }}>
      {currentCity ? (
        <Typography
          className="text-center titleJumbotron"
          sx={{ fontSize: "4rem" }}
        >
          Eventos en {currentCity}
        </Typography>
      ) : (
        <Typography className="text-center" sx={{ fontSize: "4rem" }}>
          Eventos en tu ciudad
        </Typography>
      )}
    </Box>
  );
};
