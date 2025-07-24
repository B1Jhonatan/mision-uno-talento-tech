import React, { useState } from "react";
import FormComponent from "../../components/form/FormComponent";
import styles from "./PageForm.module.css";
import { objectJson } from "../../files-js/ObjectDto.js";
import { fetchPostUpdate } from "../../files-js/FetchFile.js";

export default function PageForm() {
  const [formData, setFormData] = useState({
    elemento: "",
    tipo: 0,
    material: 0,
    cantidad: 0,
    largo: 0,
    ancho: 0,
    alto: 0,
    areaUnidad: 0,
    areaTotal: 0,
  });

  const handleTextInput = (event) => {
    const { name, value } = event.target;
    if (name === "elemento") {
      setFormData({ ...formData, [name]: value });
    } else {
      setFormData({ ...formData, [name]: Number(value) });
    }
  };

  const handleCalcBoton = () => {
    if (
      formData.largo <= 0 ||
      formData.ancho <= 0 ||
      formData.alto <= 0 ||
      formData.cantidad <= 0 ||
      formData.tipo === 0 ||
      formData.elemento === "" ||
      formData.material === 0
    ) {
      alert("Ningun campo debe estar vacio ni negativo");
      return;
    }

    const unidad = formData.largo * formData.ancho * formData.alto;
    const total =
      formData.largo * formData.ancho * formData.alto * formData.cantidad;

    setFormData({
      ...formData,
      ["areaUnidad"]: Number(unidad),
      ["areaTotal"]: Number(total),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleSaveBoton = () => {
    const newElement = {
      elemento: formData.elemento,
      tipoId: formData.tipo,
      materialId: formData.material,
      cantidad: formData.cantidad,
      largo: formData.largo,
      ancho: formData.ancho,
      alto: formData.alto,
      areaUnidad: formData.areaUnidad,
      areaTotal: formData.areaTotal,
    };

    const resultCorrect = () => {
      const calculatedVolume =
        formData.largo * formData.ancho * formData.alto * formData.cantidad;
      return calculatedVolume === formData.areaTotal;
    };

    if (!resultCorrect()) {
      alert("El calculo esta erroneo");
      return;
    }

    const objeto = objectJson(newElement);
    console.log(objeto);
    fetchPostUpdate("https://api-elementos.onrender.com/api/elemento", objeto);
  };

  return (
    <div className={styles.contain3d}>
      <FormComponent
        areaUnidad={formData.areaUnidad}
        areaTotal={formData.areaTotal}
        onSubmit={handleSubmit}
        onClickCalc={handleCalcBoton}
        onChange={handleTextInput}
        onClickSave={handleSaveBoton}
      />
    </div>
  );
}
