import React, { useEffect, useState } from "react";
import InputComponent from "../input/InputComponent";
import style from "./Form.module.css";
import BotonComponent from "../boton/BotonComponent";
import ResultComponent from "../resultado/ResultComponent";
import { MenuComponent } from "../menu/MenuComponent";
import { fetchGetDelete } from "../../files-js/FetchFile";

const FormComponent = ({
  areaUnidad,
  areaTotal,
  onSubmit,
  onChange,
  onClickCalc,
  onClickSave,
}) => {
  const [tipos, setTipos] = useState([{ id: 0, tipo: "--select--" }]);
  const [materiales, serMateriales] = useState([
    { id: 0, material: "--select--" },
  ]);

  useEffect(() => {
    const fetchInit = async () => {
      try {
        const tiposDb = await fetchGetDelete(
          "https://api-elementos.onrender.com/api/tipos"
        );
        setTipos([{ id: 0, tipo: "--select--" }, ...tiposDb]);
        const materialesDb = await fetchGetDelete(
          "https://api-elementos.onrender.com/api/materieles"
        );
        serMateriales([{ id: 0, material: "--select--" }, ...materialesDb]);
      } catch (error) {
        return error;
      }
    };
    fetchInit();
  }, []);
  console.log(tipos);
  console.log(materiales);
  return (
    <form onSubmit={onSubmit} className={style.inputForm}>
      <h2>Crear elementos</h2>
      <div className={style.inputDiv}>
        <MenuComponent
          label="Tipos"
          nameSelect="tipo"
          lista={tipos}
          onChange={onChange}
        />
        <MenuComponent
          label="Materiales"
          nameSelect="material"
          lista={materiales}
          onChange={onChange}
        />
      </div>
      <div className={style.inputDiv}>
        <InputComponent
          className={style.inputElementos}
          onChange={onChange}
          placeholder="Nombre del elemento"
          lable="Elemento"
          classNameInput={style.inputMedidas}
        />
        <InputComponent
          className={style.inputElementos}
          onChange={onChange}
          placeholder="Cuantos elementos"
          lable="Cantidad"
          classNameInput={style.inputMedidas}
        />
      </div>
      <InputComponent
        className={style.inputDiv}
        onChange={onChange}
        placeholder="Ingrese el largo del objeto en 'Centimetros'"
        lable="Largo"
        classNameInput={style.inputMedidas}
      />
      <InputComponent
        className={style.inputDiv}
        onChange={onChange}
        placeholder="Ingrese el ancho del objeto 'Centimetros'"
        lable="Ancho"
        classNameInput={style.inputMedidas}
      />
      <InputComponent
        className={style.inputDiv}
        onChange={onChange}
        placeholder="Ingrese el alto del objeto 'Centimetros'"
        lable="Alto"
        classNameInput={style.inputMedidas}
      />
      <ResultComponent
        className={style.inputDiv}
        result={areaUnidad}
        name={"Area unidad: "}
      />
      <ResultComponent
        className={style.inputDiv}
        result={areaTotal}
        name={"Area total: "}
      />
      <div className={style.inputDiv}>
        <BotonComponent
          className={style.botonForm}
          texto="Calcular"
          onClick={onClickCalc}
        />
        <BotonComponent
          className={style.botonForm}
          texto="Agregar"
          onClick={onClickSave}
        />
      </div>
    </form>
  );
};

export default FormComponent;
