import React, { useEffect, useState } from "react";
import InputComponent from "../input/InputComponent";
import style from "./Form.module.css";
import BotonComponent from "../boton/BotonComponent";
import ResultComponent from "../resultado/ResultComponent";
import { MenuComponent } from "../menu/MenuComponent";
import { fetchGetDelete } from "../../files-js/FetchFile";

const FormUpdate = ({
  onSubmit,
  onChange,
  onClickCalc,
  onClickUpdate,
  elemento,
}) => {
  const [tipos, setTipos] = useState([{ id: 0, tipo: "--select--" }]);
  const [materiales, serMateriales] = useState([
    { id: 0, material: "--select--" },
  ]);
  useEffect(() => {
    const fetchInit = async () => {
      try {
        const tiposDb = await fetchGetDelete(
          "https://api-elementos.onrender.com/api/tipos",
          "GET"
        );
        setTipos([{ id: 0, tipo: "--select--" }, ...tiposDb]);
        const materialesDb = await fetchGetDelete(
          "https://api-elementos.onrender.com/api/materieles",
          "GET"
        );
        serMateriales([{ id: 0, material: "--select--" }, ...materialesDb]);
      } catch (error) {
        return error;
      }
    };
    fetchInit();
  }, []);
  return (
    <form onSubmit={onSubmit} className={style.inputForm}>
      <h2>Actualizar elemento</h2>
      <div className={style.inputDiv}>
        <MenuComponent
          label="Tipos"
          nameSelect="tipo"
          lista={tipos}
          onChange={onChange}
          value={elemento.tipo}
        />
        <MenuComponent
          label="Materiales"
          nameSelect="material"
          lista={materiales}
          onChange={onChange}
          value={elemento.material}
        />
      </div>
      <div className={style.inputDiv}>
        <InputComponent
          className={style.inputElementos}
          onChange={onChange}
          placeholder="Nombre del elemento"
          lable="Elemento"
          classNameInput={style.inputMedidas}
          value={elemento.elemento}
        />
        <InputComponent
          className={style.inputElementos}
          onChange={onChange}
          placeholder="Cuantos elementos"
          lable="Cantidad"
          classNameInput={style.inputMedidas}
          value={elemento.cantidad}
        />
      </div>
      <InputComponent
        className={style.inputDiv}
        onChange={onChange}
        placeholder="Ingrese el largo del objeto"
        lable="Largo"
        classNameInput={style.inputMedidas}
        value={elemento.largo}
      />
      <InputComponent
        className={style.inputDiv}
        onChange={onChange}
        placeholder="Ingrese el ancho del objeto"
        lable="Ancho"
        classNameInput={style.inputMedidas}
        value={elemento.ancho}
      />
      <InputComponent
        className={style.inputDiv}
        onChange={onChange}
        placeholder="Ingrese el alto del objeto"
        lable="Alto"
        classNameInput={style.inputMedidas}
        value={elemento.alto}
      />
      <ResultComponent
        className={style.inputDiv}
        result={elemento.areaUnidad}
        name={"Area unidad: "}
      />
      <ResultComponent
        className={style.inputDiv}
        result={elemento.areaTotal}
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
          texto="Actualizar"
          onClick={onClickUpdate}
        />
      </div>
    </form>
  );
};

export default FormUpdate;
