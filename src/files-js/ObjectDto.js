export const objectJson = (objectText) => {
  if (!objectText.elemento || !objectText.cantidad || !objectText.tipoId) {
    throw new Error("Faltan campos requeridos: elemento, cantidad o tipoId");
  }

  const oJson = {
    elemento: objectText.elemento,
    cantidad: Number(objectText.cantidad),
    tipoId: Number(objectText.tipoId),
    materialId: Number(objectText.materialId),
  };

  if (objectText.largo && objectText.ancho && objectText.alto) {
    oJson.medidas = {
      largo: Number(objectText.largo),
      ancho: Number(objectText.ancho),
      alto: Number(objectText.alto),
    };
  }

  if (objectText.areaUnidad && objectText.areaTotal) {
    oJson.areas = {
      areaUnidad: Number(objectText.areaUnidad),
      areaTotal: Number(objectText.areaTotal),
    };
  }

  return oJson;
};
