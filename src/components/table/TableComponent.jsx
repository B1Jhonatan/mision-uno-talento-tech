import { useState } from "react";
import styles from "./Table.module.css";
import TableBodyComponent from "./TableBodyComponent";
import TableHeadComponent from "./TableHeadComponent";
import FormUpdate from "../form/FormUpdate";

const TableComponent = ({ db, tablePlace, onClickDelete, onClickUpdate }) => {
  const [showForm, setShowForm] = useState(false);
  const nombresColumnas = Object.values(tablePlace);
  const elementos = Object.values(db);
  const handleSpan = (element) => {
    setFormData(element);
    setShowForm(true);
  };
  const [formData, setFormData] = useState({
    elemento: "",
    tipo: "",
    material: "",
    cantidad: 0,
    largo: 0,
    ancho: 0,
    alto: 0,
    resultado: 0,
  });
  const handleTextInput = (event) => {
    const { name, value } = event.target;
    if (name === "tipo" || name === "elemento" || name === "material") {
      setFormData({ ...formData, [name]: value });
    } else {
      setFormData({ ...formData, [name]: Number(value) });
    }
  };

  const handleCalcBoton = () => {
    if (
      formData.largo === 0 ||
      formData.ancho === 0 ||
      formData.alto === 0 ||
      formData.cantidad === 0 ||
      formData.tipo === ""
    ) {
      return;
    }
    const result =
      formData.largo * formData.ancho * formData.alto * formData.cantidad;
    setFormData({ ...formData, ["resultado"]: Number(result) });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const newElement = {
    id: new Date().getTime(),
    elemento: formData.elemento,
    tipo: formData.tipo,
    material: formData.material,
    cantidad: formData.cantidad,
    largo: formData.largo,
    ancho: formData.ancho,
    alto: formData.alto,
    resultado: formData.resultado,
  };

  return (
    <table className={styles.containTable}>
      <TableHeadComponent nombresColumnas={nombresColumnas} />
      <TableBodyComponent
        elementos={elementos}
        onClickDelete={onClickDelete}
        handleSpan={handleSpan}
      />
      {showForm && (
        <span>
          <FormUpdate
            result={formData.resultado}
            onSubmit={handleSubmit}
            onClickCalc={handleCalcBoton}
            onChange={handleTextInput}
            onClickUpdate={() => {
              onClickUpdate(formData.id, newElement);
              setShowForm(false);
            }}
            elemento={formData}
          />
        </span>
      )}
    </table>
  );
};

export default TableComponent;
