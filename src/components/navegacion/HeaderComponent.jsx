import LinkComponent from "./LinkComponent";
import styles from "./Header.module.css";
import { useState } from "react";

const HeaderComponent = () => {
  const [select, setSelect] = useState("home");
  const handleOnClick = (seleccion) => {
    setSelect(seleccion);
  };
  return (
    <div className={styles.navContain}>
      <h2 className={styles.navTittle}>Navegacion</h2>
      <LinkComponent
        to="/"
        name="Home"
        className={select === "home" ? styles.select : styles.navLinks}
        onClick={() => handleOnClick("home")}
      />
      <LinkComponent
        to="elemento-3d"
        name="Elemento 3D"
        className={select === "elemento-3d" ? styles.select : styles.navLinks}
        onClick={() => handleOnClick("elemento-3d")}
      />
      <LinkComponent
        to="/historial"
        name="Historial"
        className={select === "historial" ? styles.select : styles.navLinks}
        onClick={() => handleOnClick("historial")}
      />
    </div>
  );
};

export default HeaderComponent;
