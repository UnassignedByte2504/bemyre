import React from "react";
import { Link } from "react-router-dom";

const RoundedButton = ({ to, title, onclick }) => {
  return (
    <>
      <Link className="Link" to={to}>
        <button className="RoundedButton" role="button" onClick={onclick}>
          {title}
        </button>
      </Link>
    </>
  );
};

export default RoundedButton;
