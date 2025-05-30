import React, { useEffect, useState } from 'react';
import MenuDesplegable from '../Componentes/MenuDesplegable';
import { getAllArticulos } from '../Services/ArticuloService';

const PaginaPrincipal = ({ onCerrar }) => {
  const [articulos, setArticulos] = useState([]);

  useEffect(() => {
    const fetchArticulos = async () => {
      try {
        const data = await getAllArticulos();
        const filtrados = data.filter((item) => item.nombre !== null && item.isActive);
        setArticulos(filtrados);
        console.log("pasaPorAcá")
      } catch (error) {
        console.error('Error al cargar los artículos:', error);
      }
    };

    fetchArticulos();
  }, []);

  return (
    <div className="container mt-4">
      
      {/* <img src="/ruta/a/tu/imagen.jpg" alt="Imagen principal" className="img-fluid mb-3" /> */}
      
      <p>Cantidad de artículos cargados: {articulos.length}</p>

      {/* Puedes pasar los artículos al menú si lo necesitas */}
      <MenuDesplegable onCerrar={onCerrar} articulos={articulos} />
    </div>
  );
};

export default PaginaPrincipal;
