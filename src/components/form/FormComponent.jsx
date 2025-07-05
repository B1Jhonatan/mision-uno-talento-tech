import React from "react";
import InputComponent from "../input/InputComponent";
import style from "./Form.module.css";
import BotonComponent from "../boton/BotonComponent";
import ResultComponent from "../resultado/ResultComponent";

const FormComponent = ({
  result,
  onSubmit,
  onChange,
  onClickCalc,
  onClickSave,
}) => {
  return (
    <form onSubmit={onSubmit} className={style.inputForm}>
      <div className={style.inputDiv}>
        <InputComponent
          className={style.inputElementos}
          onChange={onChange}
          placeholder="Nombre del elemento"
          lable="Tipo"
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
        placeholder="Ingrese el largo del objeto"
        lable="Largo"
        classNameInput={style.inputMedidas}
      />
      <InputComponent
        className={style.inputDiv}
        onChange={onChange}
        placeholder="Ingrese el ancho del objeto"
        lable="Ancho"
        classNameInput={style.inputMedidas}
      />
      <InputComponent
        className={style.inputDiv}
        onChange={onChange}
        placeholder="Ingrese el alto del objeto"
        lable="Alto"
        classNameInput={style.inputMedidas}
      />
      <ResultComponent className={style.inputDiv} result={result} />
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
