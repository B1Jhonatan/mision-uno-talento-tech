import React from "react";
import { Link } from "react-router-dom";

const LinkComponent = ({ to, name, className, onClick }) => {
  return (
    <Link to={to} className={className} onClick={onClick}>
      {name}
    </Link>
  );
};

export default LinkComponent;
