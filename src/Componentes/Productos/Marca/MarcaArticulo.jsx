import React, { Fragment, useEffect, useState } from 'react';
import { getAllMarcas, deleteMarca, updateMarca, insertMarca } from '../../../Services/MarcaService';
import TablaMarca from './TablaMarca';
import EliminarMarca from './EliminarMarca';
import EditarMarca from './EditarMarca'
import CrearMarca from './CrearMarca'

const MarcaArticulo = () => {
  const [cargando, setCargando] = useState(false);
  const [datos, setDatos] = useState([]);
  const [marcaSeleccionada, setMarcaSeleccionada] = useState(null);
  const [formEliminar, setFormEliminar] = useState(false);
  const [formEditar, setFormEditar] = useState(false);
  const [formCargar, setFormCargar] = useState(false);
  const [callback, setCallback] = useState(false);

  useEffect(() => {
    const fetchMarcas = async () => {
      try {
        const data = await getAllMarcas();
        const dato = data.filter((item) => item.nombre !== null && item.isActive);
        setDatos(dato);
        setCargando(true);
      } catch (error) {
        console.error('Error al cargar las marcas:', error);
      }
    };

    fetchMarcas();
  }, [callback]);

  const headers = ['Id', 'Nombre'];

  const handleEliminar = (marca) => {
    setMarcaSeleccionada(marca); // Guarda la marca seleccionada para eliminar
    setCargando(false)
    setFormEliminar(true);       // Muestra el modal
  };

  const handleEditar = (marca) => {
    setMarcaSeleccionada(marca);// Guarda la marca seleccionada para eliminar
    setCargando(false)
    setFormEditar(true);       // Muestra el modal
  };
  const handleAgregar = () => {
    setCargando(false)
    setFormCargar(true);       // Muestra el modal
  };

  const handleGuardarEliminar = async (marca) => {
    setFormEliminar(false); 
    await deleteMarca(marca[0]);
    setCallback(!callback); // Refresca los datos después de eliminar
  };

  const handleGuardarEditar = async (marca) => {
    setFormEditar(false);     
    await updateMarca(marca.id, marca.nombre,true);
    setCallback(!callback); // Refresca los datos después de eliminar
    setCargando(true)
  };

  const handleGuardarCrear = async (marca) => {
    setFormCargar(false);     
    await insertMarca( marca.nombre,true);
    setCallback(!callback); // Refresca los datos después de eliminar
    setCargando(true)
  };

  return (
    <>
      {cargando ? (
        <Fragment>
          <TablaMarca headers={headers} data={datos} eliminar={handleEliminar} editar={handleEditar} agregar={handleAgregar}/>
        </Fragment>
      ) : (
        ""
      )}
      {formEliminar && (
        <EliminarMarca
          marcaActual={marcaSeleccionada}
          onGuardar={handleGuardarEliminar}
          onCancelar={() => {setFormEliminar(false),setCargando(true)}}
        />
      )}
      {formEditar && (
        <EditarMarca
          marcaActual={marcaSeleccionada}
          onGuardar={handleGuardarEditar}
          onCancelar={() => {setFormEditar(false),setCargando(true)}}
        />
      )}
      {formCargar && (
        <CrearMarca
          onGuardar={handleGuardarCrear}
          onCancelar={() => {setFormCargar(false),setCargando(true)}}
        />
      )}
    </>
  );
};

export default MarcaArticulo;
