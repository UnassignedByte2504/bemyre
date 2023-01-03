import React from "react";
import { Link } from "react-router-dom";

const AnimatedButton = ({ to, title }) => {
  return (
    <>
      <Link className="Link" to={to}>
        <button class="AnimatedButton" role="button">
          {title}
        </button>
      </Link>
    </>
  );
};

export default AnimatedButton;
