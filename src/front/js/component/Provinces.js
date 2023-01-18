import React from "react";
import acoruña from "../../img/cities/acoruña.jpg";
import albacete from "../../img/cities/albacete.jpg";
import alicante from "../../img/cities/alicante.jpg";
import almeria from "../../img/cities/almeria.jpeg";
import asturias from "../../img/cities/asturias.jpg";
import avila from "../../img/cities/avila.jpg";
import badajoz from "../../img/cities/badajoz.jpg";
import barcelona from "../../img/cities/barcelona.jpg";
import burgos from "../../img/cities/burgos.jpg";
import caceres from "../../img/cities/caceres.jpg";
import castellon from "../../img/cities/castellon.jpg";
import ciudadreal from "../../img/cities/ciudadreal.jpg";
import cuenca from "../../img/cities/cuenca.jpg";
import girona from "../../img/cities/girona.jpg";
import granada from "../../img/cities/granada.jpg";
import huelva from "../../img/cities/huelva.jpg";
import huesca from "../../img/cities/huesca.jpg";
import islasbaleares from "../../img/cities/islasbaleares.jpg";
import jaen from "../../img/cities/jaen.jpg";
import larioja from "../../img/cities/larioja.jpg";
import laspalmas from "../../img/cities/laspalmas.jpg";
import leon from "../../img/cities/leon.jpg";
import lleida from "../../img/cities/lleida.jpg";
import lugo from "../../img/cities/lugo.jpg";
import madrid from "../../img/cities/madrid.jpg";
import malaga from "../../img/cities/malaga.jpg";
import murcia from "../../img/cities/murcia.jpg";
import navarra from "../../img/cities/navarra.jpg";
import palencia from "../../img/cities/palencia.jpg";
import pontevedra from "../../img/cities/pontevedra.jpg";
import salamanca from "../../img/cities/salamanca.jpg";
import santander from "../../img/cities/avila.jpg";
import segovia from "../../img/cities/segovia.jpg";
import sevilla from "../../img/cities/sevilla.jpg";
import soria from "../../img/cities/soria.jpg";
import tarragona from "../../img/cities/tarragona.jpg";
import tenerife from "../../img/cities/tenerife.jpg";
import teruel from "../../img/cities/teruel.jpg";
import valencia from "../../img/cities/valencia.jpg";
import valladolid from "../../img/cities/valladolid.jpg";
import vizcaya from "../../img/cities/vizcaya.jpg";
import zamora from "../../img/cities/zamora.jpg";
import zaragoza from "../../img/cities/zaragoza.jpg";

export const imgTorender = (state) => {
    const imgProvincia = [
      { name: "Álava", image: null },
      { name: "A Coruña", image: acoruña },
      { name: "Alicante", image: alicante },
      { name: "Albacete", image: albacete },
      { name: "Almería", image: almeria },
      { name: "Asturias", image: asturias },
      { name: "Ávila", image: avila },
      { name: "Badajoz", image: badajoz },
      { name: "Barcelona", image: barcelona },
      { name: "Bizkaia", image: vizcaya },
      { name: "Burgos", image: burgos },
      { name: "Cáceres", image: caceres },
      { name: "Cádiz", image: null },
      { name: "Cantabria", image: santander },
      { name: "Castellón", image: castellon },
      { name: "Ceuta", image: null },
      { name: "Ciudad Real", image: ciudadreal },
      { name: "Córdoba", image: null },
      { name: "Cuenca", image: cuenca },
      { name: "Gipuzkoa", image: null },
      { name: "Girona", image: girona },
      { name: "Granada", image: granada },
      { name: "Guadalajara", image: null },
      { name: "Huelva", image: huelva },
      { name: "Huesca", image: huesca },
      { name: "Islas Baleares", image: islasbaleares },
      { name: "Jaén", image: jaen },
      { name: "La Rioja", image: larioja },
      { name: "Las Palmas", image: laspalmas },
      { name: "León", image: leon },
      { name: "Lleida", image: lleida },
      { name: "Lugo", image: lugo },
      { name: "Madrid", image: madrid },
      { name: "Málaga", image: malaga },
      { name: "Melilla", image: null },
      { name: "Murcia", image: murcia },
      { name: "Navarra", image: navarra },
      { name: "Ourense", image: null },
      { name: "Palencia", image: palencia },
      { name: "Pontevedra", image: pontevedra },
      { name: "Salamanca", image: salamanca },
      { name: "Segovia", image: segovia },
      { name: "Sevilla", image: sevilla },
      { name: "Soria", image: soria },
      { name: "Sta. Cruz de Tenerife", image: tenerife },
      { name: "Tarragona", image: tarragona },
      { name: "Teruel", image: teruel },
      { name: "Toledo", image: null },
      { name: "Valéncia", image: valencia },
      { name: "Valladolid", image: valladolid },
      { name: "Zamora", image: zamora },
      { name: "Zaragoza", image: zaragoza },

    ];

  const imgToReturn = imgProvincia.find(img => img.name === state);

  return imgToReturn ? imgToReturn.image : null
  };