import styles from "./Table.module.css";

const TableComponent = ({ db, tablePlace }) => {
  const nombresColumnas = Object.values(tablePlace);
  const elementos = Object.values(db);
  return (
    <table className={styles.containTable}>
      <thead>
        <tr>
          {nombresColumnas.map((name, index) => (
            <th key={index} className={styles.columnColor}>
              {name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {elementos.map((element, index) => (
          <tr key={element.id} className={styles.columnText}>
            <td>{index + 1}</td>
            <td>{element.tipo}</td>
            <td>{element.cantidad}</td>
            <td>{element.largo}</td>
            <td>{element.ancho}</td>
            <td>{element.alto}</td>
            <td>{element.resultado}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
