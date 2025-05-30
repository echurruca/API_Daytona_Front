// import React from 'react';
// import {  useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import MenuDesplegable from './Componentes/MenuDesplegable'
// import { login } from './Services/LoginService';
// import Login from './Componentes/Login'

// const App = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const handleLogin = async (formData) => {
    
//     try{
//       const data = await login(formData.username, formData.password)
      
//       if(data){
//           localStorage.setItem('idRol', data.data.idRol)
//           localStorage.setItem('token', data.data.token)
//           localStorage.setItem('username', data.data.username)
//           setIsAuthenticated(true);
//       }
//     }catch(error){
//       alert(error);
//     }
  
//   };
//   return (
//     <>
    
//      {!isAuthenticated ? (
//         <Login onLogin={handleLogin} />
//       ) : (
        
//         <MenuDesplegable 
//           onCerrar = {()=>setIsAuthenticated(false)}
//         />
//       )}

//     </>
   
//   );
// };

// export default App;

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { login } from './Services/LoginService';
import Login from './Componentes/Login';
import PaginaPrincipal from './Componentes/PaginaPrincipal';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = async (formData) => {
    try {
      const data = await login(formData.username, formData.password);
      if (data) {
        localStorage.setItem('idRol', data.data.idRol);
        localStorage.setItem('token', data.data.token);
        localStorage.setItem('username', data.data.username);
        setIsAuthenticated(true);
      }
    } catch (error) {
      alert('Error en login: ' + error.message);
    }
  };

  return (
    <>
      {!isAuthenticated ? (
        <Login onLogin={handleLogin} />
      ) : (
        <PaginaPrincipal onCerrar={() => setIsAuthenticated(false)} />
      )}
    </>
  );
};

export default App;


