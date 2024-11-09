import React, { Fragment, useEffect, useState } from 'react';
import { getAllLineas, deleteLinea, updateLinea, insertLinea} from '../../../Services/LineaService'
import TablaLinea from './TablaLinea';
import EliminarLinea from './EliminarLinea';
import EditarLinea from './EditarLinea';
import CrearLinea from './CrearLinea';
//Este es el componente de Línea Artículo de Productos
const LineaArtículo = () => {
  const [cargando, setCargando] = useState(false);
  const [datos, setDatos] = useState([]);
  const [lineaSeleccionada, setLineaSeleccionada] = useState(null);
  const [formEliminar, setFormEliminar] = useState(false);
  const [formEditar, setFormEditar] = useState(false);
  const [formCargar, setFormCargar] = useState(false);
  const [callback, setCallback] = useState(false);

  useEffect(() => {
    const fetchLineas = async () => {
      try {
        const data = await getAllLineas();
        const dato = data.filter((item) => item.nombre !== null && item.isActive);
        setDatos(dato);
        setCargando(true);
      } catch (error) {
        console.error('Error al cargar las lineas:', error);
      }
    };

    fetchLineas();
  }, [callback]);

  const headers = ['Id', 'Nombre'];

  const handleEliminar = (linea) => {
    setLineaSeleccionada(linea); // Guarda la linea seleccionada para eliminar
    setCargando(false)
    setFormEliminar(true);       // Muestra el modal
  };

  const handleEditar = (linea) => {
    setLineaSeleccionada(linea);// Guarda la linea seleccionada para eliminar
    setCargando(false)
    setFormEditar(true);       // Muestra el modal
  };
  const handleAgregar = () => {
    setCargando(false)
    setFormCargar(true);       // Muestra el modal
  };
  const handleGuardarEliminar = async (linea) => {
    setFormEliminar(false); 
    await deleteLinea(linea[0]);
    setCallback(!callback); // Refresca los datos después de eliminar
  };

  const handleGuardarEditar = async (linea) => {
    setFormEditar(false);     
    await updateLinea(linea.id, linea.nombre,true);
    setCallback(!callback); // Refresca los datos después de eliminar
    setCargando(true)
  };

  const handleGuardarCrear = async (linea) => {
    setFormCargar(false);     
    await insertLinea(linea.Id, linea.nombre ,true);
    setCallback(!callback); // Refresca los datos después de eliminar
    setCargando(true)
  };

  return (
    <>
      {cargando ? (
        <Fragment>
          <TablaLinea headers={headers} data={datos} eliminar={handleEliminar} editar={handleEditar} agregar={handleAgregar}/>
        </Fragment>
      ) : (
        ""
      )}
      {formEliminar && (
        <EliminarLinea
          lineaActual={lineaSeleccionada}
          onGuardar={handleGuardarEliminar}
          onCancelar={() => {setFormEliminar(false),setCargando(true)}}
        />
      )}
      {formEditar && (
        <EditarLinea
          lineaActual={lineaSeleccionada}
          onGuardar={handleGuardarEditar}
          onCancelar={() => {setFormEditar(false),setCargando(true)}}
        />
      )}
      {formCargar && (
        <CrearLinea
          onGuardar={handleGuardarCrear}
          onCancelar={() => {setFormCargar(false),setCargando(true)}}
        />
      )}
    </>
  );
};

export default LineaArtículo;