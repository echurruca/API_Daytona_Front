import React, { Fragment, useEffect, useState } from 'react';
import { getAllProveedores, deleteProveedor, updateProveedor, insertProveedor} from '../../Services/ProveedorService'
import TablaProveedor from './TablaProveedor';
import EliminarProveedor from './EliminarProveedor';
import EditarProveedor from './EditarProveedor';
import CrearProveedor from './CrearProveedor';
//Este es el componente de Proveedors
const Proveedor = () => {
  const [cargando, setCargando] = useState(false);
  const [datos, setDatos] = useState([]);
  const [proveedorSeleccionado, setProveedorSeleccionado] = useState();
  const [formEliminar, setFormEliminar] = useState(false);
  const [formEditar, setFormEditar] = useState(false);
  const [formCargar, setFormCargar] = useState(false);
  const [callback, setCallback] = useState(false);

  useEffect(() => {
    const fetchProveedores = async () => {
      try {
       
        const data = await getAllProveedores();
        const dato = await data.filter((item) =>item.nombre !== null &&  item.isActive);
        setDatos(dato);
        setCargando(true);
      } catch (error) {
        console.error('Error al cargar los proveedores:', error);
      }
    };

    fetchProveedores();
  }, [callback]);

  const headers = [ 'Id','Codigo','Razón Social','Dirección','Localidad','Provincia','Observaciones','CP','Teléfono','Fax','CUIT',
    'Contacto','Ramo','Nombre abreviado','mail']; 
    
  const handleEliminar = (proveedor) => {
    setProveedorSeleccionado(proveedor); // Guarda el Proveedor seleccionada para eliminar
    setCargando(false)
    setFormEliminar(true);       // Muestra el modal
  };

  const handleEditar = (proveedor) => {
    setProveedorSeleccionado(proveedor);// Guarda el Proveedor seleccionado para eliminar
    setCargando(false)
    setFormEditar(true);       // Muestra el modal
  };
  const handleAgregar = () => {
    setCargando(false)
    setFormCargar(true);       // Muestra el modal
  };
  const handleGuardarEliminar = async (proveedor) => {
    console.log(proveedor)
    setFormEliminar(false); 
    await deleteProveedor(proveedor[0]);
    setCallback(!callback); // Refresca los datos después de eliminar
  };

  const handleGuardarEditar = async (proveedor) => {
    setFormEditar(false);     
    await updateProveedor(proveedor.id,proveedor.codigo,proveedor.nombreProveedor,  proveedor.direccion, proveedor.localidad
      , proveedor.observaciones,  proveedor.cp,  proveedor.cuit, proveedor.telefono, proveedor.contacto,proveedor.ramo, 
       proveedor.pcia, proveedor.fax, proveedor.abreviado,  proveedor.mail,true);
    setCallback(!callback); // Refresca los datos después de eliminar
    setCargando(true)
  };

  const handleGuardarCrear = async (proveedor) => {
    setFormCargar(false);   
    await insertProveedor(proveedor.codigo,proveedor.nombre,  proveedor.direccion, proveedor.localidad
      , proveedor.observaciones,  proveedor.cp,  proveedor.cuit, proveedor.telefono, proveedor.contacto,proveedor.ramo, 
       proveedor.pcia, proveedor.fax, proveedor.abreviado,  proveedor.mail,true);
    setCallback(!callback); // Refresca los datos después de eliminar
    setCargando(true)
  };

  return (
    <>
      {cargando ? (
        <Fragment>
          <TablaProveedor headers={headers} data={datos} eliminar={handleEliminar} editar={handleEditar} agregar={handleAgregar}/>
        </Fragment>
      ) : (
        ""
      )}
      {formEliminar && (
        <EliminarProveedor
          proveedorActual={proveedorSeleccionado}
          onGuardar={handleGuardarEliminar}
          onCancelar={() => {setFormEliminar(false),setCargando(true)}}
        />
      )}
      {formEditar && (
        <EditarProveedor
          proveedorActual={proveedorSeleccionado}
          onGuardar={handleGuardarEditar}
          onCancelar={() => {setFormEditar(false),setCargando(true)}}
        />
      )}
      {formCargar && (
        <CrearProveedor
          onGuardar={handleGuardarCrear}
          onCancelar={() => {setFormCargar(false),setCargando(true)}}
        />
      )}
    </>
  );
};

export default Proveedor;