import React from "react";

const ResultComponent = ({ className, result }) => {
  return (
    <div className={className}>
      <p>
        <strong>Area: </strong>
        {result}
      </p>
    </div>
  );
};

export default ResultComponent;
