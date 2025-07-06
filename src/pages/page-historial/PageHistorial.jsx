import React from "react";

const PageHistorial = ({ db }) => {
  return (
    <div>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Tipo</th>
            <th>Cantidad</th>
            <th>Largo</th>
            <th>Ancho</th>
            <th>Alto</th>
            <th>Resultado</th>
          </tr>
        </thead>
        <tbody>
          {db.map((element) => (
            <tr key={element.id}>
              <td>{element.tipo}</td>
              <td>{element.cantidad}</td>
              <td>{element.largo}</td>
              <td>{element.ancho}</td>
              <td>{element.alto}</td>
              <td>{element.resultado}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PageHistorial;
