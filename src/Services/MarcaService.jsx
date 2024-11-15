import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;
const BEARER_TOKEN = process.env.REACT_APP_TOKEN


export const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Authorization': `Bearer ${BEARER_TOKEN}`,
    'Content-Type': 'application/json',
    'Accept-Language': 'es-ES', // Cambia el idioma según tus necesidades
    'Accept-Encoding': 'gzip, deflate, br', // Especifica los métodos de codificación
  },
  
});

export const getAllMarcas = async () => {
  try {
    const response = await axiosInstance.get('/marca/listall');

    return response.data.marcas;  // Retorna solo el array de marcas
  } catch (error) {
    console.error('Error al obtener las marcas:', error);
    throw error;
  }
};

export const insertMarca = async (nombre, isActive) => {
  try {
      
      const response = await axiosInstance.post(`/marca/create`, {
          nombre, isActive
      })
      if (response.status === 200) {

          alert("La marca fue creada con éxito")
          return response.data.data
      }
  }
  catch (e) {
      alert(e.response.data.title)
  }
}

export const deleteMarca = async (id) => {
  try {
      const response = await axiosInstance.delete(`/marca/delete/${id}`)
      if (response.status === 200) {
          alert("La marca fue eliminada")
          return response.data.data
      }
  }
  catch (e) {
      alert(e.response.data.title)
  }
};

export const updateMarca = async (ID, nombre,isActive) => {
 
  try {
    const response = await axiosInstance.put('/marca/update', {
          ID,nombre, isActive
      })
      if (response.status === 200) {
          alert("La marca fue modificada con éxito")
          return response.data.data
      }
  }
  catch (e) {
      alert(e.response.data.title)
  }
}