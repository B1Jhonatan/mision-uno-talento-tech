import React from "react";

const InputComponent = ({
  className,
  onChange,
  placeholder,
  lable,
  classNameInput,
}) => {
  return (
    <div className={className}>
      <strong>{lable + ":"}</strong>
      <input
        id={lable.toLowerCase()}
        name={lable.toLowerCase()}
        type="text"
        className={classNameInput}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputComponent;
