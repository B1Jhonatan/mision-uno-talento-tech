import React from "react";
import styles from "./Menu.module.css";

export const MenuComponent = ({
  label,
  nameSelect,
  lista,
  onChange,
  value,
}) => {
  return (
    <div className={styles.selectDiv} key={label.toLowerCase()}>
      <strong>{label}</strong>
      <select
        name={nameSelect}
        id={nameSelect}
        className={styles.selectContain}
        onChange={onChange}
        key={label.toLowerCase()}
        value={value}
      >
        {lista.map((op) => (
          <option value={op.id} key={op.id}>
            {op[nameSelect]}
          </option>
        ))}
      </select>
    </div>
  );
};
