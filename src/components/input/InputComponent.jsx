import React from "react";

const InputComponent = ({
  className,
  onChange,
  placeholder,
  lable,
  classNameInput,
  value,
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
        value={value}
      />
    </div>
  );
};

export default InputComponent;
