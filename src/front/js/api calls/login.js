import React from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";

const { actions, store } = useContext();

export const fetchLogin = async () => {
  fetch(process.env.BACKEND_URL + "/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  })
    .then((resp) => {
      if (resp.status == 200) {
        return resp.json();
      } else {
        return "No se ha accecido";
      }
    })
    .then((result) => {
      if (result.token != undefined) {
        localStorage.setItem("token", result.token);
        navigate(`/${result.username}`);
      }
    });
};
