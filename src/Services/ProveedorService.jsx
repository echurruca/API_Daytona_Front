import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;
const BEARER_TOKEN = localStorage.getItem('token')


export const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Authorization': `Bearer ${BEARER_TOKEN}`,
    'Content-Type': 'application/json',
  },
});

export const getAllProveedores = async () => {
 
  try {
    const response = await axiosInstance.get('/proveedor/listall');
    return response.data.proveedores;  // Retorna solo el array de proveedores
  } catch (error) {
    console.error('Error al obtener los proveedores:', error);
    throw error;
  }
};



export const insertProveedor = async (Codigo, nombreProveedor,Direccion,Localidad, observaciones,
    postal,Cuit,Telefono,Contacto,Ramo,Pcia,Fax,abreviado,Mail,isActive) => {
  
       
  try {      
      const response = await axiosInstance.post(`/proveedor/create`, {
        Codigo, nombreProveedor,Direccion,Localidad, observaciones,
    postal,Cuit,Telefono,Contacto,Ramo,Pcia,Fax,abreviado,Mail,isActive
      })
      
      if (response.status === 200) {

          alert("El proveedor se creó con éxito")
          return response.data.data
      }
      if (response.status === 400) {

        return response.data.data
    }
  }
  catch (e) {
      alert(e.response.data.title)
  }
}

export const deleteProveedor = async (id) => {
  try {
      const response = await axiosInstance.delete(`/proveedor/delete/${id}`)
      if (response.status === 200) {
          alert("El proveedor fue eliminado")
          return response.data.data
      }
  }
  catch (e) {
      alert(e.response.data.title)
  }
};

export const updateProveedor = async (Id,Codigo, nombreProveedor,Direccion,Localidad, observaciones,
  postal,Cuit,Telefono,Contacto,Ramo,Pcia,Fax,abreviado,Mail,isActive) => {
  try {
    console.log(Id,Codigo, nombreProveedor,Direccion,Localidad, observaciones,
      postal,Cuit,Telefono,Contacto,Ramo,Pcia,Fax,abreviado,Mail,isActive)
    const response = await axiosInstance.put('/proveedor/update', {
      Id,Codigo, nombreProveedor,Direccion,Localidad, observaciones,
  postal,Cuit,Telefono,Contacto,Ramo,Pcia,Fax,abreviado,Mail,isActive
      })
      if (response.status === 200) {
          alert("El proveedor fue modificado con éxito")
          return response.data.data
      }
  }
  catch (e) {
      alert(e.response.data.title)
  }
}