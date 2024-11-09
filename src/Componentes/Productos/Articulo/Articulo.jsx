import React, { Fragment, useEffect, useState } from 'react';
import { getAllArticulos, deleteArticulo, updateArticulo, insertArticulo} from '../../../Services/ArticuloService'
import TablaArticulo from './TablaArticulo';
import EliminarArticulo from './EliminarArticulo';
import EditarArticulo from './EditarArticulo';
import CrearArticulo from './CrearArticulo';
//Este es el componente de Línea Artículo de Productos
const Articulo = () => {
  const [cargando, setCargando] = useState(false);
  const [datos, setDatos] = useState([]);
  const [articuloSeleccionado, setArticuloSeleccionado] = useState(null);
  const [formEliminar, setFormEliminar] = useState(false);
  const [formEditar, setFormEditar] = useState(false);
  const [formCargar, setFormCargar] = useState(false);
  const [callback, setCallback] = useState(false);

  useEffect(() => {
    const fetchArticulos = async () => {
      try {
       
        const data = await getAllArticulos();
        const dato = await data.filter((item) =>item.nombre !== null &&  item.isActive);
        setDatos(dato);
        setCargando(true);
      } catch (error) {
        console.error('Error al cargar los artículos:', error);
      }
    };

    fetchArticulos();
  }, [callback]);

  const headers = ['Código', 'Descripción','Marca','articulo','Prove','Subarticulo','Medida','FechaAct',
    'CodProve','Costo','Std','Precio1','Precio2','Precio3','Estimado','Margen','Desc1','Desc2','Observaciones']; 
    
  const handleEliminar = (articulo) => {
    setArticuloSeleccionado(articulo); // Guarda la articulo seleccionada para eliminar
    setCargando(false)
    setFormEliminar(true);       // Muestra el modal
  };

  const handleEditar = (articulo) => {
    setArticuloSeleccionado(articulo);// Guarda la articulo seleccionada para eliminar
    setCargando(false)
    setFormEditar(true);       // Muestra el modal
  };
  const handleAgregar = () => {
    setCargando(false)
    setFormCargar(true);       // Muestra el modal
  };
  const handleGuardarEliminar = async (articulo) => {
    setFormEliminar(false); 
    await deleteArticulo(articulo[0]);
    setCallback(!callback); // Refresca los datos después de eliminar
  };

  const handleGuardarEditar = async (articulo) => {
    setFormEditar(false);     
    await updateArticulo(articulo.codigo, articulo.descripcion, articulo.marca, articulo.linea
      , articulo.prove, articulo.subLinea, articulo.medida, articulo.fechaAct, articulo.codProve
      , articulo.costo, articulo.std, articulo.precio1, articulo.precio2, articulo.precio3 
      , articulo.estimado, articulo.margen, articulo.desc1, articulo.desc2, articulo.observaciones,true);
    setCallback(!callback); // Refresca los datos después de eliminar
    setCargando(true)
  };

  const handleGuardarCrear = async (articulo) => {
    console.log("articulo")
    console.log(articulo)
    console.log(articulo.codigo)
    setFormCargar(false);     
    await insertArticulo(articulo.codigo, articulo.descripcion, articulo.marca, articulo.linea
      , articulo.prove, articulo.subLinea, articulo.medida, articulo.fechaAct, articulo.codProve
      , articulo.costo, articulo.std, articulo.precio1, articulo.precio2, articulo.precio3 
      , articulo.estimado, articulo.margen, articulo.desc1, articulo.desc2, articulo.observaciones,true);
    setCallback(!callback); // Refresca los datos después de eliminar
    setCargando(true)
  };

  return (
    <>
      {cargando ? (
        <Fragment>
          <TablaArticulo headers={headers} data={datos} eliminar={handleEliminar} editar={handleEditar} agregar={handleAgregar}/>
        </Fragment>
      ) : (
        "Cargando artículos"
      )}
      {formEliminar && (
        <EliminarArticulo
          articuloActual={articuloSeleccionado}
          onGuardar={handleGuardarEliminar}
          onCancelar={() => {setFormEliminar(false),setCargando(true)}}
        />
      )}
      {formEditar && (
        <EditarArticulo
          articuloActual={articuloSeleccionado}
          onGuardar={handleGuardarEditar}
          onCancelar={() => {setFormEditar(false),setCargando(true)}}
        />
      )}
      {formCargar && (
        <CrearArticulo
          onGuardar={handleGuardarCrear}
          onCancelar={() => {setFormCargar(false),setCargando(true)}}
        />
      )}
    </>
  );
};

export default Articulo;