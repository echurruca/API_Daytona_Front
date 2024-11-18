// import React, { useEffect, useState, Fragment } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { getAllArticulos } from '../../Services/ArticuloService';
// import './Buscador.css'; // Importa un archivo CSS personalizado
// import { BsFillInfoCircleFill } from 'react-icons/bs';

// const Buscador = () => {
//   const [datos, setDatos] = useState([]);
//   const [cargando, setCargando] = useState(false);
  
//   const [busquedaID, setBusquedaID] = useState("");
//   const [busquedaDescripcion, setBusquedaDescripcion] = useState("");
//   const [busquedaCodProve, setBusquedaCodProve] = useState("");
//   const [resultados, setResultados] = useState([]);

//   useEffect(() => {
//     const fetchArticulos = async () => {
//       try {
//         const data = await getAllArticulos();
//         const dato = data.filter((item) => item.nombre !== null && item.isActive);
//         setDatos(dato);
//         setResultados(dato);
//       } catch (error) {
//         console.error('Error al cargar los artículos:', error);
//       }
//     };
//     fetchArticulos();
//   }, []);

//   const aplicarFiltros = () => {
//     if (busquedaCodProve || busquedaDescripcion || busquedaID) {
//       const filtrados = datos.filter((item) =>
//         (busquedaID ? (item.id || "").toString().includes(busquedaID) : true) &&
//         (busquedaDescripcion ? (item.descripcion || "").toLowerCase().includes(busquedaDescripcion.toLowerCase()) : true) &&
//         (busquedaCodProve ? (item.codProve || "").toString().includes(busquedaCodProve) : true)
//       );
//       setResultados(filtrados);
//       setCargando(true);
//     } else {
//       setCargando(false);
//     }
//   };

//   const handleKeyPress = (event) => {
//     if (event.key === 'Enter') {
//       aplicarFiltros();
//     }
//   };

//   const handleBuscarClick = () => aplicarFiltros();

//   const handleRefrescarClick = () => {
//     setBusquedaID("");
//     setBusquedaCodProve("");
//     setBusquedaDescripcion("");
//     setResultados([]);
//     setCargando(false);
//   };

//   return (
//     <Fragment>
      
//       <div className="container mt-3 buscador-container">
//         <div className="row mb-3 align-items-center">
//           <div className="col">
//             <input
//               type="text"
//               className="form-control rounded-pill buscador-input"
//               placeholder="Buscar por ID"
//               value={busquedaID}
//               onChange={(e) => setBusquedaID(e.target.value)}
//               onKeyUp={handleKeyPress}
//             />
//           </div>
//           <div className="col">
//             <input
//               type="text"
//               className="form-control rounded-pill buscador-input"
//               placeholder="Buscar por Descripción"
//               value={busquedaDescripcion}
//               onChange={(e) => setBusquedaDescripcion(e.target.value)}
//               onKeyUp={handleKeyPress}
//             />
//           </div>
//           <div className="col">
//             <input
//               type="text"
//               className="form-control rounded-pill buscador-input"
//               placeholder="Buscar por CodProve"
//               value={busquedaCodProve}
//               onChange={(e) => setBusquedaCodProve(e.target.value)}
//               onKeyUp={handleKeyPress}
//             />
//           </div>
//           <div className="col-auto">
//             <button className="btn btn-primary rounded-pill buscador-btn" onClick={handleBuscarClick}>
//               Buscar
//             </button>
//           </div>
//           <div className="col-auto">
//             <button className="btn btn-secondary rounded-pill buscador-btn" onClick={handleRefrescarClick}>
//               Refrescar
//             </button>
//           </div>
//         </div>

//         {cargando ? (
//           <table className="table table-hover mt-3">
//             <thead className="table-primary">
//               <tr>
//                 <th>Código</th>
//                 <th>Descripción</th>
//                 <th>CodProve</th>
//                 <th>PrecioLista</th>
//                 <th>Precio</th>
//                 <th>Más info</th>
//               </tr>
//             </thead>
//             <tbody>
//               {resultados.map((item) => (
//                 <tr key={item.codigo}>
//                   <td>{item.id}</td>
//                   <td>{item.descripcion}</td>
//                   <td>{item.codProve}</td>
//                   <td>{item.costo}</td>
//                   <td>{item.precio1}</td>
//                   <td> <BsFillInfoCircleFill
//                   style={{ color: 'gray', fontSize: '24px'}}
//                   onClick={() => info(row)}
//                   /></td>
              
              
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         ) : (
//           <p className="text-muted">Esperando la búsqueda</p>
//         )}
//       </div>
//     </Fragment>
//   );
// };

// export default Buscador;

import React, { useEffect, useState, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getAllArticulos } from '../../Services/ArticuloService';
import './Buscador.css'; // Archivo CSS personalizado
import { BsFillInfoCircleFill } from 'react-icons/bs';
import { getArticulo } from '../../Services/ArticuloService';
import InformacionCompleta from '../Productos/Articulo/InformacionCompleta'

const Buscador = () => {
  const [datos, setDatos] = useState([]);
  const [cargando, setCargando] = useState(false);

  const [busquedaID, setBusquedaID] = useState('');
  const [busquedaDescripcion, setBusquedaDescripcion] = useState('');
  const [busquedaCodProve, setBusquedaCodProve] = useState('');
  const [resultados, setResultados] = useState([]);
  const [formInformacion, setFormInformacion] = useState(false);
  const [articuloCompleto, setArticuloCompleto] = useState({});

  useEffect(() => {
    const fetchArticulos = async () => {
      try {
        const data = await getAllArticulos();
        const dato = data.filter((item) => item.nombre !== null && item.isActive);
        setDatos(dato);
        setResultados(dato);
      } catch (error) {
        console.error('Error al cargar los artículos:', error);
      }
    };
    fetchArticulos();
  }, []);

  const aplicarFiltros = () => {
    if (busquedaCodProve || busquedaDescripcion || busquedaID) {
      const filtrados = datos.filter(
        (item) =>
          (busquedaID ? (item.id || '').toString().includes(busquedaID) : true) &&
          (busquedaDescripcion
            ? (item.descripcion || '').toLowerCase().includes(busquedaDescripcion.toLowerCase())
            : true) &&
          (busquedaCodProve ? (item.codProve || '').toString().includes(busquedaCodProve) : true)
      );
      setResultados(filtrados);
      setCargando(true);
    } else {
      setCargando(false);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      aplicarFiltros();
    }
  };

  const handleBuscarClick = () => aplicarFiltros();

  const handleRefrescarClick = () => {
    setBusquedaID('');
    setBusquedaCodProve('');
    setBusquedaDescripcion('');
    setResultados([]);
    setCargando(false);
  };

  const info = async (row) => {
    console.log(row)
    setArticuloCompleto(await getArticulo(row.id))
    setCargando(false)
    setFormInformacion(true); 
  };

  return (
    <>
    <Fragment>
      <div className="container mt-3 buscador-container">
        <div className="row mb-3 align-items-center">
          <div className="col">
            <input
              type="text"
              className="form-control rounded-pill buscador-input"
              placeholder="Buscar por ID"
              value={busquedaID}
              onChange={(e) => setBusquedaID(e.target.value)}
              onKeyUp={handleKeyPress}
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control rounded-pill buscador-input"
              placeholder="Buscar por Descripción"
              value={busquedaDescripcion}
              onChange={(e) => setBusquedaDescripcion(e.target.value)}
              onKeyUp={handleKeyPress}
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control rounded-pill buscador-input"
              placeholder="Buscar por CodProve"
              value={busquedaCodProve}
              onChange={(e) => setBusquedaCodProve(e.target.value)}
              onKeyUp={handleKeyPress}
            />
          </div>
          <div className="col-auto">
            <button className="btn btn-primary rounded-pill buscador-btn" onClick={handleBuscarClick}>
              Buscar
            </button>
          </div>
          <div className="col-auto">
            <button className="btn btn-secondary rounded-pill buscador-btn" onClick={handleRefrescarClick}>
              Refrescar
            </button>
          </div>
        </div>

        {cargando ? (
          <div className="table-responsive">
            <table className="table table-striped table-bordered mt-3">
              <thead className="table-primary">
                <tr>
                  <th style={{ position: 'sticky', top: '0', background: '#007bff', color: 'white' }}>
                    Código
                  </th>
                  <th>Descripción</th>
                  <th>CodProve</th>
                  <th>PrecioLista</th>
                  <th>Precio</th>
                  <th>Más info</th>
                </tr>
              </thead>
              <tbody>
                {resultados.map((item) => (
                  <tr key={item.codigo}>
                    <td>{item.id}</td>
                    <td>{item.descripcion}</td>
                    <td>{item.codProve}</td>
                    <td>{item.costo}</td>
                    <td>{item.precio1}</td>
                    <td>
                      <button
                        className="btn btn-info btn-sm"
                        onClick={() => info(item)}
                      >
                        <BsFillInfoCircleFill /> Ver
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          ""
        )}
      </div>

    </Fragment>
     {formInformacion && (
      <InformacionCompleta
          articulo = {articuloCompleto}
          onCancelar={() => {setFormInformacion(false),setCargando(true)}}
      />
    )}
    </>
  );
};

export default Buscador;
