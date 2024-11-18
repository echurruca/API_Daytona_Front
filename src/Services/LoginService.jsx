import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;
//const BEARER_TOKEN = process.env.REACT_APP_TOKEN


export const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    //'Authorization': `Bearer ${BEARER_TOKEN}`,
    'Content-Type': 'application/json',
  },
});





export const login = async (username, password) => {
  

  try {
      
      const response = await axiosInstance.post(`/login/loginweb`, {
        username,password
      })
      
     
      if (response.status === 200) {

          return response
      }
  }
  catch (e) {

    if(e.name=== 'AxiosError'){
      alert("El usuario y/o la contraseña son incorrectos")
    }else{
      alert(e.response.data.title)
    }
  }
}

