import React, { useEffect, useState } from "react";
import styles from "./PageHistorial.module.css";
import { ElementoComponent } from "../../components/elemento/ElementoComponent";
import FormUpdate from "../../components/form/FormUpdate";
import { fetchGetDelete, fetchPostUpdate } from "../../files-js/FetchFile";
import { objectJson } from "../../files-js/ObjectDto";

const PageHistorial = () => {
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

  const [showForm, setShowForm] = useState(false);
  const [datosDb, setDatosDb] = useState([]);

  const fetchData = async () => {
    try {
      const datosFetch = await fetchGetDelete(
        "https://api-elementos.onrender.com/api/tipos-elementos",
        "GET"
      );
      setDatosDb(datosFetch);
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    fetchData();
  }, [datosDb]);

  const handleSpan = (element) => {
    setFormData({
      id: element.id,
      elemento: element.elemento,
      tipo: element.tipoId,
      material: element.materialId,
      cantidad: element.cantidad,
      largo: element.medidas?.largo || 0,
      ancho: element.medidas?.ancho || 0,
      alto: element.medidas?.alto || 0,
      areaUnidad: element.areas?.areaUnidad || 0,
      areaTotal: element.areas?.areaTotal || 0,
    });
    setShowForm(true);
  };

  const handleClickDelete = async (id) => {
    try {
      const res = await fetchGetDelete(
        `https://api-elementos.onrender.com/api/elemento/${id}`,
        "DELETE"
      );
      // Actualiza el estado eliminando el elemento con ese id
      setDatosDb((prevDatos) => prevDatos.filter((el) => el.id !== id));

      
    } catch (error) {
      console.error("Error al eliminar:", error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
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
      formData.largo <= 0 ||
      formData.ancho <= 0 ||
      formData.alto <= 0 ||
      formData.cantidad <= 0 ||
      formData.tipo === 0 ||
      formData.elemento === "" ||
      formData.material === 0
    ) {
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

  const onClickUpdate = (id) => {
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
    if (
      formData.largo <= 0 ||
      formData.ancho <= 0 ||
      formData.alto <= 0 ||
      formData.cantidad <= 0 ||
      formData.tipo === 0 ||
      formData.elemento === "" ||
      formData.material === 0
    ) {
      alert("Ningun campo debe estar vacio");
      return;
    }
    const resultCorrect = () => {
      const calculatedVolume =
        formData.largo * formData.ancho * formData.alto * formData.cantidad;
      return calculatedVolume === formData.areaTotal;
    };
    if (!resultCorrect()) {
      alert("El calculo esta erroneo, no se guardaran los cambios");
      setShowForm(true);
      return;
    }

    const objeto = objectJson(newElement);

    fetchPostUpdate(
      `https://api-elementos.onrender.com/api/elemento/${id}`,
      objeto,
      "PUT"
    );

    fetchData();
    
  };

  return (
    <section className={styles.containH}>
      {showForm && (
        <span>
          <FormUpdate
            onSubmit={handleSubmit}
            onClickCalc={handleCalcBoton}
            onChange={handleTextInput}
            onClickUpdate={() => {
              onClickUpdate(formData.id);
              setShowForm(false);
            }}
            elemento={formData}
          />
        </span>
      )}
      <div className={styles.containE}>
        {datosDb.map((elemento) => (
          <ElementoComponent
            key={elemento.id}
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
