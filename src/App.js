import React from 'react';
import { Fragment, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuDesplegable from './Componentes/MenuDesplegable'
import { login } from './Services/LoginService';
import Login from './Componentes/Login'

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const handleLogin = async (formData) => {
    try{
      const data = await login(formData.username, formData.password)
      if(data){
          localStorage.setItem('idRol', data.data.idRol)
          localStorage.setItem('token', data.data.token)
          localStorage.setItem('username', data.data.username)
          setIsAuthenticated(true);
      }
    }catch(error){
      alert(error);
    }
  
  };
  return (
    <Fragment>
    
     {!isAuthenticated ? (
        <Login onLogin={handleLogin} />
      ) : (
        
        <MenuDesplegable 
          onCerrar = {()=>setIsAuthenticated(false)}
        />
      )}

    </Fragment>
   
  );
};

export default App;

