import React, { useState } from "react";
import FormComponent from "../../components/form/FormComponent";
import styles from "./PageForm.module.css";

export default function PageForm({ db, setDb }) {
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

  const handleSaveBoton = () => {
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
    const alreadyExists = db.some((item) => item.tipo === newElement.tipo);
    const resultCorrect = () => {
      const calculatedVolume =
        formData.largo * formData.ancho * formData.alto * formData.cantidad;
      return calculatedVolume === formData.resultado;
    };

    if (alreadyExists) {
      alert("Este elemento ya existe en la base de datos");
      return;
    }

    if (!resultCorrect()) {
      alert("El calculo esta erroneo");
      return;
    }
    setDb([...db, newElement]);
  };
  console.log(formData);
  return (
    <div className={styles.contain3d}>
      <FormComponent
        result={formData.resultado}
        onSubmit={handleSubmit}
        onClickCalc={handleCalcBoton}
        onChange={handleTextInput}
        onClickSave={handleSaveBoton}
      />
    </div>
  );
}
