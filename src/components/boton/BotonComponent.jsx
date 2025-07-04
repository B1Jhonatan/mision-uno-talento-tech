import React from "react";

const BotonComponent = ({ className, onClick, texto }) => {
  return (
    <button className={className} onClick={onClick}>
      {texto}
    </button>
  );
};

export default BotonComponent;
