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

export const getAllArticulos = async () => {
 
  try {
    const response = await axiosInstance.get('/articulo/listall');

    return response.data.articulosComp;  // Retorna solo el array de artículos
  } catch (error) {
    console.error('Error al obtener los artículos:', error);
    throw error;
  }
};
export const getArticulo = async (id) => {
   
  try {
    const response = await axiosInstance.get(`/articulo/listbyid/${id}`);
    
    return response.data;  // Devuelve el artículo completo
  } catch (error) {
    console.error('Error al obtener los artículos:', error);
    throw error;
  }
};

export const insertArticulo = async (id, descripcion,marca,linea,prove,sublinea,medida,
    fechaAct,codProve,costo,std,precio1,precio2,precio3,estimado,margen,desc1,desc2,observaciones,isActive) => {
  

  try {
      console.log("en la función")
      console.log(codProve)
      const response = await axiosInstance.post(`/articulo/create`, {
        id, descripcion,marca,linea,prove,sublinea,medida,fechaAct,
        codProve,costo,std,precio1,precio2,precio3,estimado,margen,
        desc1,desc2,observaciones,isActive
      })
      if (response.status === 200) {

          alert("El artículo fue creado con éxito")
          return response.data.data
      }
  }
  catch (e) {

      alert(e.response.data.message)
  }
}

export const deleteArticulo = async (id) => {
  try {
      const response = await axiosInstance.delete(`/articulo/delete/${id}`)
      if (response.status === 200) {
          alert("El artículo fue eliminado")
          return response.data.data
      }
  }
  catch (e) {
      alert(e.response.data.message)
  }
};

export const updateArticulo = async (id, descripcion,marca,linea,prove,sublinea,medida,
    fechaAct,codProve,costo,std,precio1,precio2,precio3,estimado,margen,desc1,desc2,observaciones,isActive) => {
  
  try {
   
    
    const response = await axiosInstance.put('/articulo/update', {
        id, descripcion,marca,linea,prove,sublinea,medida,fechaAct,
        codProve,costo,std,precio1,precio2,precio3,estimado,margen,
        desc1,desc2,observaciones,isActive
      })
      if (response.status === 200) {
          alert("El artículo fue modificado con éxito")
          return response.data.data
      }
  }
  catch (e) {
      alert(e.response.data.message)
  }
}