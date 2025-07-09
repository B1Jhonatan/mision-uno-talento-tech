import React from "react";
import styles from "./Elemento.module.css";

export const TagComponent = ({ name, value }) => {
  const handleValue = () => {
    if (name === "Largo" || name === "Ancho" || name === "Alto") {
      return value + " m";
    } else if (name === "Area") {
      return value + " m3";
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
