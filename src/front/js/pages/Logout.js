import React from "react";
import { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";

const Logout = () => {
  const { actions, store } = useContext(Context);

  useEffect(() => {
    actions.logOut(localStorage.getItem("access_token"))
  }, []);

  return <></>;
};

export default Logout;
