import React from "react";
import "../../styles/index.css";

export const Bubble = ({ generoMusica }) => {
  return <span className="badge rounded-pill bubbles">{generoMusica}</span>;
};
