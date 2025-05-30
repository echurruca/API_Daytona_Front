import React, { createContext, useState, useEffect } from 'react';
import { getAllArticulos } from '../Services/ArticuloService';

export const ArticulosContext = createContext();

export const ArticulosProvider = ({ children }) => {
  const [articulos, setArticulos] = useState(null);

  const fetchArticulos = async () => {
    if (!articulos) {
      try {
        const response = await getAllArticulos();  
        console.log(response)       
        data = response.filter((item) => item.nombre !== null && item.isActive)
        setArticulos(data);
      } catch (error) {
        console.error('Error al obtener los artículos:', error);
      }
    }
  };

  // Opcional: podrías invocar fetchArticulos en el useEffect para precargar.
//   useEffect(() => {
//     fetchArticulos();
//   }, []);

  return (
    <ArticulosContext.Provider value={{ articulos, setArticulos, fetchArticulos }}>
      {children}
    </ArticulosContext.Provider>
  );
};
