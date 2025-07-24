import React from "react";

const ResultComponent = ({ className, result, name }) => {
  return (
    <div className={className}>
      <p>
        <strong>{name}</strong>
        {result}
      </p>
    </div>
  );
};

export default ResultComponent;
