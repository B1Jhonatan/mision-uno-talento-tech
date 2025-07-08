import styles from "./Table.module.css";
import TableBodyComponent from "./TableBodyComponent";
import TableHeadComponent from "./TableHeadComponent";

const TableComponent = ({ db, tablePlace, onClickDelete }) => {
  const nombresColumnas = Object.values(tablePlace);
  const elementos = Object.values(db);
  return (
    <table className={styles.containTable}>
      <TableHeadComponent nombresColumnas={nombresColumnas} />
      <TableBodyComponent elementos={elementos} onClickDelete={onClickDelete} />
    </table>
  );
};

export default TableComponent;
