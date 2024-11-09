import React from 'react';
import { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuDesplegable from './Componentes/MenuDesplegable'

const App = () => {
  

  return (
    <Fragment>
     
  <MenuDesplegable/>

    </Fragment>
   
  );
};

export default App;

// import React, { useEffect, useState, Fragment } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import MenuDesplegable from './Componentes/MenuDesplegable';
// import { getAllArticulos } from './Services/ArticuloService'; // Asegúrate de que getAllArticulos esté correctamente importado

// const App = () => {
//   const [datos, setDatos] = useState([]);
//   const [cargando, setCargando] = useState(false);
//   const [busqueda, setBusqueda] = useState("");

//   useEffect(() => {
//     const fetchArticulos = async () => {
//       try {
//         const data = await getAllArticulos();
//         const dato = data.filter((item) => item.nombre !== null && item.isActive);
//         console.log(dato)
//         setDatos(dato);
//         setCargando(true);
//       } catch (error) {
//         console.error('Error al cargar los artículos:', error);
//       }
//     };

//     fetchArticulos();
//   }, []);

//   // Filtra los datos según el término de búsqueda
//   const datosFiltrados = datos.filter((item) => 
//     (item.id || "").toString().includes(busqueda) ||
//     (item.descripcion || "").toString().includes(busqueda) ||
//     (item.codProve || "").toString().includes(busqueda) ||
//     (item.costo || "").toString().includes(busqueda) ||
//     (item.precio1 || "").toString().includes(busqueda)
//   );

//   return (
//     <Fragment>
//       <MenuDesplegable />

//       <div className="container mt-3">
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Buscar por código, descripción o codProve"
//           value={busqueda}
//           onChange={(e) => setBusqueda(e.target.value)}
//         />

//         {cargando ? (
//           <table className="table mt-3">
//             <thead>
//               <tr>
//                 <th>Código</th>
//                 <th>Descripción</th>
//                 <th>CodProve</th>
//                 <th>PrecioLista</th>
//                 <th>Precio</th>
//               </tr>
//             </thead>
//             <tbody>
//               {datosFiltrados.map((item) => (
//                 <tr key={item.codigo}>
//                   <td>{item.id}</td>
//                   <td>{item.descripcion}</td>
//                   <td>{item.codProve}</td>
//                   <td>{item.costo}</td>
//                   <td>{item.precio1}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         ) : (
//           <p>Cargando artículos...</p>
//         )}
//       </div>
//     </Fragment>
//   );
// };

// export default App;
