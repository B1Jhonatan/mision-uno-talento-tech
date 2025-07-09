import React, { useState } from "react";
import styles from "./PageHistorial.module.css";
import { ElementoComponent } from "../../components/elemento/ElementoComponent";
import FormUpdate from "../../components/form/FormUpdate";

const PageHistorial = ({ db, setDb }) => {
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
  const [showForm, setShowForm] = useState(false);

  const handleSpan = (element) => {
    setFormData(element);
    setShowForm(true);
  };

  const handleClickDelete = (id) => {
    setDb(db.filter((item) => item.id !== id));
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

  const onClickUpdate = (id, newItem) => {
    if (
      formData.largo === 0 ||
      formData.ancho === 0 ||
      formData.alto === 0 ||
      formData.cantidad === 0 ||
      formData.tipo === "" ||
      formData.elemento === "" ||
      formData.material === ""
    ) {
      alert("Ningun campo debe estar vacio");
      return;
    }
    const resultCorrect = () => {
      const calculatedVolume =
        formData.largo * formData.ancho * formData.alto * formData.cantidad;
      return calculatedVolume === formData.resultado;
    };
    if (!resultCorrect()) {
      alert("El calculo esta erroneo, no se guardaran los cambios");
      setShowForm(true);
      return;
    }
    const updatedItems = db.map((item) =>
      item.id === id ? { ...item, ...newItem } : item
    );
    setDb(updatedItems);
  };

  return (
    <section className={styles.containH}>
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
      <div className={styles.containE}>
        {db.map((elemento) => (
          <ElementoComponent
            elemento={elemento}
            onClickDelete={handleClickDelete}
            handleSpan={handleSpan}
          />
        ))}
      </div>
    </section>
  );
};

export default PageHistorial;
