import React from "react";
import styles from "./Elemento.module.css";
import { TagComponent } from "./TagComponent";
import BotonComponent from "../boton/BotonComponent";

export const ElementoComponent = ({
  key,
  elemento,
  onClickDelete,
  handleSpan,
}) => {
  return (
    <article className={styles.elemento} key={key}>
      <h3>{elemento.tipo?.tipo}</h3> <br />
      <TagComponent name={"Elemento"} value={elemento.elemento} />
      <TagComponent name={"Cantidad"} value={elemento.cantidad} />
      <TagComponent name={"Material"} value={elemento.material?.material} />
      <TagComponent name={"Largo"} value={elemento.medidas?.largo} />
      <TagComponent name={"Ancho"} value={elemento.medidas?.ancho} />
      <TagComponent name={"Alto"} value={elemento.medidas?.alto} />
      <TagComponent name={"Area unidad"} value={elemento.areas?.areaUnidad} />
      <TagComponent name={"Area total"} value={elemento.areas?.areaTotal} />
      <div className={styles.containBoton}>
        <BotonComponent
          id={elemento.id}
          className={styles.botonModificar}
          texto="Update"
          onClick={() => handleSpan(elemento)}
        />
        <BotonComponent
          id={elemento.id}
          className={styles.botonEliminar}
          texto="Delete"
          onClick={() => onClickDelete(elemento.id)}
        />
      </div>
    </article>
  );
};
