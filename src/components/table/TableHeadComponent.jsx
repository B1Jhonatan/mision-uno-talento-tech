import React from "react";
import styles from "./Table.module.css";

const TableHeadComponent = ({ nombresColumnas }) => {
  return (
    <thead>
      <tr>
        {nombresColumnas.map((name, index) => (
          <th key={index} className={styles.columnColor}>
            {name}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeadComponent;
