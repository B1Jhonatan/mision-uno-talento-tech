export const fetchGetDelete = async (url, method) => {
  try {
    const res = await fetch(url, { method });
    if (!res.ok) {
      return;
    }
    const data = res.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
};

export const fetchPostUpdate = async (url, objeto, method) => {
  try {
    const res = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(objeto),
    });

    if (!res.ok) {
      throw new Error(`Error HTTP: ${res.status}`);
    }

    const response = await res.json();
    console.log("Respuesta:", response);
    return response;
  } catch (error) {
    console.error("Error en POST:", error);
    throw error;
  }
};
