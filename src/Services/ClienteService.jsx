import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;
const BEARER_TOKEN = process.env.REACT_APP_TOKEN


export const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Authorization': `Bearer ${BEARER_TOKEN}`,
    'Content-Type': 'application/json',
  },
});

export const getAllClientes = async () => {
 
  try {
    const response = await axiosInstance.get('/cliente/listall');
    return response.data.clientes;  // Retorna solo el array de clientes
  } catch (error) {
    console.error('Error al obtener los clientes:', error);
    throw error;
  }
};



export const insertCliente = async (Codigo, Nombre,Direccion,Localidad,Pcia,iva, cuit,
  Telefono, observaciones, Servicio, Dias,Vendedor,Descuento,cp,DirecEnv,Mail,isActive) => {
  

  try {
      
      const response = await axiosInstance.post(`/Cliente/create`, {
        Codigo, Nombre,Direccion,Localidad,Pcia,iva, cuit,
  Telefono, observaciones, Servicio, Dias,Vendedor,Descuento,cp,DirecEnv,Mail,isActive
      })
      if (response.status === 200) {

          alert("El cliente se creó con éxito")
          return response.data.data
      }
  }
  catch (e) {
      
      alert(e.response.data.title)
  }
}

export const deleteCliente = async (id) => {
  try {
      const response = await axiosInstance.delete(`/Cliente/delete/${id}`)
      if (response.status === 200) {
          alert("El cliente fue eliminado")
          return response.data.data
      }
  }
  catch (e) {
      alert(e.response.data.title)
  }
};

export const updateCliente = async (Id, Codigo, Nombre,Direccion,Localidad,Pcia,iva, cuit,
  Telefono, observaciones, Servicio, Dias,Vendedor,Descuento,cp,DirecEnv,Mail,isActive) => {
  try {
    const response = await axiosInstance.put('/Cliente/update', {
      Id, Codigo, Nombre,Direccion,Localidad,Pcia,iva, cuit,
      Telefono, observaciones, Servicio, Dias,Vendedor,Descuento,cp,DirecEnv,Mail,isActive
      })
      if (response.status === 200) {
          alert("El cliente fue modificado con éxito")
          return response.data.data
      }
  }
  catch (e) {
      alert(e.response.data.title)
  }
}