import React, { Fragment, useEffect, useState } from 'react';
import { getAllClientesMinimos, deleteClienteMinimo, updateClienteMinimo, insertClienteMinimo} from '../../Services/ClienteServiceMinimo'
import TablaClienteMinimo from './TablaClienteMinimo';
import EliminarClienteMinimo from './EliminarClienteMinimo';
import EditarClienteMinimo from './EditarClienteMinimo';
import CrearClienteMinimo from './CrearClienteMinimo';
//Este es el componente de Línea Artículo de ProductosMinimos
const ClienteMinimo = () => {
  const [cargando, setCargando] = useState(false);
  const [datos, setDatos] = useState([]);
  const [clienteSeleccionado, setClienteSeleccionado] = useState();
  const [formEliminar, setFormEliminar] = useState(false);
  const [formEditar, setFormEditar] = useState(false);
  const [formCargar, setFormCargar] = useState(false);
  const [callback, setCallback] = useState(false);

  useEffect(() => {
    const fetchClientes = async () => {
      try {
       
        const data = await getAllClientesMinimos();
        const dato = await data.filter((item) =>item.nombre !== null &&  item.isActive);
        setDatos(dato);
        setCargando(true);
      } catch (error) {
        setCargando(true);
        console.error('Error al cargar los clientes:', error);
      }
    };

    fetchClientes();
  }, [callback]);

  const headers = ['Id','Código', 'Nombre','Dirección','localidad','Provincia','iva','cuit','Teléfono',
    'Observaciones','Servicio','Días','Vendedor','Descuento','cp','DirecEnv','mail', 'Editar', 'Eliminar']; 
    
  const handleEliminar = (cliente) => {
    setClienteSeleccionado(cliente); // Guarda el Cliente seleccionada para eliminar
    setCargando(false)
    setFormEliminar(true);       // Muestra el modal
  };

  const handleEditar = (cliente) => {
    setClienteSeleccionado(cliente);// Guarda la Cliente seleccionada para eliminar
    setCargando(false)
    setFormEditar(true);       // Muestra el modal
  };
  const handleAgregar = () => {
    setCargando(false)
    setFormCargar(true);       // Muestra el modal
  };
  const handleGuardarEliminar = async (cliente) => {
    setFormEliminar(false); 
    await deleteClienteMinimo(cliente[0]);
    setCallback(!callback); // Refresca los datos después de eliminar
  };

  const handleGuardarEditar = async (cliente) => {
    console.log("el handle")
    console.log(cliente)
    setFormEditar(false);     
    await updateClienteMinimo(cliente.id,cliente.codigo, cliente.nombre, cliente.direccion, cliente.localidad
      , cliente.pcia, cliente.iva, cliente.cuit, cliente.telefono, cliente.observaciones
      , cliente.servicio, cliente.dias, cliente.vendedor, cliente.descuento, cliente.cp 
      , cliente.direcEnv, cliente.mail,true);
    setCallback(!callback); // Refresca los datos después de eliminar
    setCargando(true)
  };

  const handleGuardarCrear = async (cliente) => {
   
    setFormCargar(false);   
   
    await insertClienteMinimo( cliente.codigo,cliente.nombre, cliente.direccion, cliente.localidad
      , cliente.pcia, cliente.iva, cliente.cuit, cliente.telefono, cliente.observaciones
      , cliente.servicio, cliente.dias, cliente.vendedor, cliente.descuento, cliente.cp 
      , cliente.direcEnv, cliente.mail,true);
    setCallback(!callback); // Refresca los datos después de eliminar
    setCargando(true)
  };

  return (
    <>
      {cargando ? (
        <Fragment>
          <TablaClienteMinimo headers={headers} data={datos} eliminar={handleEliminar} editar={handleEditar} agregar={handleAgregar}/>
        </Fragment>
      ) : (
        ""
      )}
      {formEliminar && (
        <EliminarClienteMinimo
          clienteActual={clienteSeleccionado}
          onGuardar={handleGuardarEliminar}
          onCancelar={() => {setFormEliminar(false),setCargando(true)}}
        />
      )}
      {formEditar && (
        <EditarClienteMinimo
          clienteActual={clienteSeleccionado}
          onGuardar={handleGuardarEditar}
          onCancelar={() => {setFormEditar(false),setCargando(true)}}
        />
      )}
      {formCargar && (
        <CrearClienteMinimo
          onGuardar={handleGuardarCrear}
          onCancelar={() => {setFormCargar(false),setCargando(true)}}
        />
      )}
    </>
  );
};

export default ClienteMinimo;