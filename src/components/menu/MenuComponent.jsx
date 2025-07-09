import React from "react";
import styles from "./Menu.module.css";

export const MenuComponent = ({
  label,
  nameSelect,
  options,
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
        {options.map((op) => (
          <option value={op} key={op}>
            {op}
          </option>
        ))}
      </select>
    </div>
  );
};
