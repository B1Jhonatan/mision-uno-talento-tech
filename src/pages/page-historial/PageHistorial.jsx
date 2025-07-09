import React from "react";
import styles from "./PageHistorial.module.css";
import TableComponent from "../../components/table/TableComponent";
import { ElementoComponent } from "../../components/elemento/ElementoComponent";

const PageHistorial = ({ db, setDb }) => {
  const table = {
    column001: "Id",
    column002: "Elemento",
    column003: "Tipo",
    column004: "Material",
    column005: "Cantidad",
    column006: "Largo",
    column007: "Ancho",
    column008: "Alto",
    column009: "Area",
    column010: "Operaciones",
  };

  const handleClickDelete = (id) => {
    setDb(db.filter((item) => item.id !== id));
  };

  const onClickUpdate = (id, newItem) => {
    const updatedItems = db.map((item) =>
      item.id === id ? { ...item, ...newItem } : item
    );
    setDb(updatedItems);
  };

  return (
    <div className={styles.containH}>
      {db.map((elementooo) => (
        <ElementoComponent elemento={elementooo} />
      ))}
      <TableComponent
        db={db}
        tablePlace={table}
        onClickDelete={handleClickDelete}
        onClickUpdate={onClickUpdate}
      />
    </div>
  );
};

export default PageHistorial;
