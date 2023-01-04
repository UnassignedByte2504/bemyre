import React from "react";
import { Link } from "react-router-dom";

const ShadowButton = ({ to, title }) => {
  return (
    <>
      <Link className="Link" to={to}>
        <button className="ShadowButton" role="button">
          {title}
        </button>
      </Link>
    </>
  );
};

export default ShadowButton;
