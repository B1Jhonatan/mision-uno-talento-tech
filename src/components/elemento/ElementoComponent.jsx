import React from "react";
import styles from "./Elemento.module.css";
import { TagComponent } from "./TagComponent";
import BotonComponent from "../boton/BotonComponent";

export const ElementoComponent = ({ elemento }) => {
  return (
    <article className={styles.elemento}>
      <strong>{elemento.elemento}</strong>
      <TagComponent name={"Tipo"} value={elemento.tipo} />
      <TagComponent name={"Cantidad"} value={elemento.cantidad} />
      <TagComponent name={"Largo"} value={elemento.largo} />
      <TagComponent name={"Ancho"} value={elemento.ancho} />
      <TagComponent name={"Alto"} value={elemento.alto} />
      <TagComponent name={"Area"} value={elemento.resultado} />
      <div className={styles.containBoton}>
        <BotonComponent
          id={elemento.id}
          className={styles.botonModificar}
          texto="Update"
          //onClick={() => handleSpan(elemento)}
        />
        <BotonComponent
          id={elemento.id}
          className={styles.botonEliminar}
          texto="Delete"
          //onClick={() => onClickDelete(elemento.id)}
        />
      </div>
    </article>
  );
};
