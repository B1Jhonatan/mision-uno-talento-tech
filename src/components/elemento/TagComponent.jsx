import React from "react";
import styles from "./Elemento.module.css";

export const TagComponent = ({ name, value }) => {
  const handleValue = () => {
    if (name === "Largo" || name === "Ancho" || name === "Alto") {
      return value + " cm";
    } else if (name === "Area unidad" || name === "Area total") {
      return value + " cm3";
    } else {
      return value;
    }
  };
  return (
    <div className={styles.elementoDiv}>
      <strong>{name}:</strong>
      <p>{handleValue()}</p>
    </div>
  );
};
