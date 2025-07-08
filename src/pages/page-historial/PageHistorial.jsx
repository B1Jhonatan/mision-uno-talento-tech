import React from "react";
import styles from "./PageHistorial.module.css";
import TableComponent from "../../components/table/TableComponent";

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
  return (
    <div className={styles.containH}>
      <TableComponent
        db={db}
        tablePlace={table}
        onClickDelete={handleClickDelete}
      />
    </div>
  );
};

export default PageHistorial;
