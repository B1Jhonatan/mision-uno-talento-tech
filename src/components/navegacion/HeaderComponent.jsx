import LinkComponent from "./LinkComponent";
import styles from "./Header.module.css";

const HeaderComponent = () => {
  return (
    <div className={styles.navContain}>
      <h2 className={styles.navTittle}>Navegacion</h2>
      <LinkComponent to="/" name="Home" className={styles.navLinks} />
      <LinkComponent
        to="elemento-3d"
        name="Elemento 3D"
        className={styles.navLinks}
      />
      <LinkComponent
        to="/historial"
        name="Historial"
        className={styles.navLinks}
      />
    </div>
  );
};

export default HeaderComponent;
