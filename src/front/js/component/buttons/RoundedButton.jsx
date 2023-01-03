import React from "react";
import { Link } from "react-router-dom";

const RoundedButton = ({ to, title }) => {
  return (
    <>
      <Link className="Link" to={to}>
        <button class="RoundedButton" role="button">
          {title}
        </button>
      </Link>
    </>
  );
};

export default RoundedButton;
