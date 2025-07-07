import React from "react";
import styles from "./PageHistorial.module.css";
import TableComponent from "../../components/table/TableComponent";

const PageHistorial = ({ db }) => {
  const table = {
    column001: "Id",
    column002: "Tipo",
    column003: "Cantidad",
    column004: "Largo",
    column005: "Ancho",
    column006: "Alto",
    column007: "Area",
    column008: "Operaciones",
  };
  return (
    <div className={styles.containH}>
      <TableComponent db={db} tablePlace={table} />
    </div>
  );
};

export default PageHistorial;
