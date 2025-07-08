import React from "react";
import styles from "./Table.module.css";
import BotonComponent from "../boton/BotonComponent";

const TableBodyComponent = ({ elementos, onClickDelete }) => {
  return (
    <tbody>
      {elementos.map((element, index) => (
        <tr key={element.id} className={styles.columnText}>
          <td>{index + 1}</td>
          <td>{element.elemento}</td>
          <td>{element.tipo}</td>
          <td>{element.material}</td>
          <td>{element.cantidad}</td>
          <td>{element.largo}</td>
          <td>{element.ancho}</td>
          <td>{element.alto}</td>
          <td>{element.resultado}</td>
          <td className={styles.containBoton}>
            <BotonComponent
              id={element.id}
              className={styles.botonModificar}
              texto="Update"
            />
            <BotonComponent
              id={element.id}
              className={styles.botonEliminar}
              texto="Delete"
              onClick={() => onClickDelete(element.id)}
            />
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBodyComponent;
