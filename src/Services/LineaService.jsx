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

export const getAllLineas = async () => {
  
  try {
    const response = await axiosInstance.get('/linea/listall');
    return response.data.lineas;  // Retorna solo el array de lineas
  } catch (error) {
    console.error('Error al obtener las líneas:', error);
    throw error;
  }
};

export const insertLinea = async (id, nombre, isActive) => {
  

  try {
      
      const response = await axiosInstance.post(`/linea/create`, {
         id, nombre, isActive
      })
      if (response.status === 200) {

          alert("La linea fue creada con éxito")
          return response.data.data
      }
  }
  catch (e) {
    console.log(e)
      alert(e.response.data.title)
  }
}

export const deleteLinea = async (id) => {
  try {
      const response = await axiosInstance.delete(`/linea/delete/${id}`)
      if (response.status === 200) {
          alert("La línea fue eliminada")
          return response.data.data
      }
  }
  catch (e) {
      alert(e.response.data.title)
  }
};

export const updateLinea = async (ID, nombre,isActive) => {
 
  try {
    const response = await axiosInstance.put('/linea/update', {
          ID,nombre, isActive
      })
      if (response.status === 200) {
          alert("La línea fue modificada con éxito")
          return response.data.data
      }
  }
  catch (e) {
      alert(e.response.data.title)
  }
}