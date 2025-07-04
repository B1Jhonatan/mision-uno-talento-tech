import React, { useState } from "react";
import FormComponent from "../../components/form/FormComponent";

export default function PageForm() {
  const [formData, setFormData] = useState({
    tipo: "",
    cantidad: 0,
    largo: 0,
    ancho: 0,
    alto: 0,
    resultado: 0,
  });
  const handleTextInput = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: Number(value) });
    console.log(name, value);
  };
  console.log(formData);
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
  return (
    <div>
      <FormComponent
        result={formData.resultado}
        onSubmit={handleSubmit}
        onClickCalc={handleCalcBoton}
        onChange={handleTextInput}
      />
    </div>
  );
}
