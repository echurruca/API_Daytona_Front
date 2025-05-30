// // import { exportToExcel, exportToPDF } from '../../Utils/exportUtils'

// // //Header con los campos que haga falta
// // const headers = ['id', 'descripcion', 'codProve', 'costo', 'precio1'];



// // <div className="row mb-3">
// //   <div className="col-auto">
// //     <button
// //       className="btn btn-success rounded-pill me-2"
// //       onClick={() => exportToExcel(resultados, headers, 'articulos.xlsx')}
// //     >
// //       Exportar a Excel
// //     </button>
// //   </div>
// //   <div className="col-auto">
// //     <button
// //       className="btn btn-danger rounded-pill"
// //       onClick={() => exportToPDF(resultados, headers, 'articulos.pdf')}
// //     >
// //       Exportar a PDF
// //     </button>
// //   </div>
// // </div>

// // src/components/ExportarPorProveedorMarca.js
// import React, { useState, useEffect } from 'react';
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';
// import { obtenerArticulosPorFiltro } from '../../Services/ArticuloService';
// import { exportToExcel, exportToPDF } from '../../Utils/exportUtils';

// const ExportarPorProveedorMarca = () => {
//   const [show, setShow] = useState(false);
//   const [proveedorDesde, setProveedorDesde] = useState('');
//   const [proveedorHasta, setProveedorHasta] = useState('');
//   const [marca, setMarca] = useState('');
//   const [resultados, setResultados] = useState([]);
//   const [cargando, setCargando] = useState(false);

//   const headers = ['id', 'descripcion', 'proveedor', 'marca', 'precio'];

//   // ✅ Abrir el modal automáticamente al montar el componente
//   useEffect(() => {
//     setShow(true);
//     // Limpieza al desmontar (opcional)
//     return () => {
//       setResultados([]);
//       setProveedorDesde('');
//       setProveedorHasta('');
//       setMarca('');
//     };
//   }, []);

//   const consultar = async () => {
//     setCargando(true);
//     try {
//       const datos = await obtenerArticulosPorFiltro(proveedorDesde, proveedorHasta, marca);
//       setResultados(datos);
//     } catch (error) {
//       console.error('Error al consultar:', error);
//       alert('Error al obtener los datos.');
//     } finally {
//       setCargando(false);
//     }
//   };

//   const cerrarModal = () => {
//     setShow(false);
//     // También podés limpiar los filtros si querés reiniciar al volver a entrar
//     setProveedorDesde('');
//     setProveedorHasta('');
//     setMarca('');
//     setResultados([]);
//   };

//   return (
//     <Modal show={show} onHide={cerrarModal} size="lg" backdrop="static">
//       <Modal.Header closeButton>
//         <Modal.Title>Exportar por Proveedor y Marca</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <div className="row mb-3">
//           <div className="col">
//             <label>Proveedor desde</label>
//             <input className="form-control" value={proveedorDesde} onChange={(e) => setProveedorDesde(e.target.value)} />
//           </div>
//           <div className="col">
//             <label>Proveedor hasta</label>
//             <input className="form-control" value={proveedorHasta} onChange={(e) => setProveedorHasta(e.target.value)} />
//           </div>
//           <div className="col">
//             <label>Marca</label>
//             <input className="form-control" value={marca} onChange={(e) => setMarca(e.target.value)} />
//           </div>
//         </div>
//         <div className="mb-3">
//           <Button variant="primary" onClick={consultar} disabled={cargando}>
//             Consultar
//           </Button>
//         </div>

//         {resultados.length > 0 && (
//           <>
//             <div className="table-responsive mb-3">
//               <table className="table table-bordered table-sm">
//                 <thead>
//                   <tr>{headers.map((h) => <th key={h}>{h}</th>)}</tr>
//                 </thead>
//                 <tbody>
//                   {resultados.map((row, idx) => (
//                     <tr key={idx}>
//                       {headers.map((h) => (
//                         <td key={h}>{row[h]}</td>
//                       ))}
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//             <div className="d-flex gap-2">
//               <Button variant="success" onClick={() => exportToExcel(resultados, headers)}>
//                 Exportar a Excel
//               </Button>
//               <Button variant="danger" onClick={() => exportToPDF(resultados, headers)}>
//                 Exportar a PDF
//               </Button>
//             </div>
//           </>
//         )}
//       </Modal.Body>
//     </Modal>
//   );
// };

// export default ExportarPorProveedorMarca;

import React, { useState, useEffect } from 'react';
import { exportToExcel, exportToPDF } from '../../Utils/exportUtils';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const ExportarArticulos = ({articulos}) => {
  
  const [datos, setDatos] = useState(articulos);
  console.log(articulos[0].id)
  const [resultados, setResultados] = useState([]);
  const [showModal, setShowModal] = useState(true);
  const [proveedorDesde, setProveedorDesde] = useState('');
  const [proveedorHasta, setProveedorHasta] = useState('');
  const [marca, setMarca] = useState('');

  const headers = ['id', 'descripcion', 'codProve', 'marca', 'costo', 'precio1'];

  useEffect(() => {
      setDatos(articulos);
    
    }, [articulos]);

    const aplicarFiltros = (inicioProveedor, finProveedor, marca) => {
      const inicio = parseInt(inicioProveedor, 10);
      const fin = parseInt(finProveedor, 10);
    
      const filtrados = !marca
        ? filtrarSoloPorProveedor(inicio, fin)
        : filtrarPorProveedorYMarca(inicio, fin, marca);
    
      setResultados(filtrados);
      setShowModal(false);
    };
  const filtrarSoloPorProveedor =  (inicio, fin) => {
    return articulos.filter(
      (articulo) => articulo.prove >= inicio && articulo.prove <= fin
    );
  };
  
  const filtrarPorProveedorYMarca = async (inicio, fin, marca) => {
    return articulos.filter(
      (articulo) =>
        articulo.prove >= inicio &&
        articulo.prove <= fin &&
        articulo.marca === marca
    );
  };

  
  const limpiarYVolver = () => {
    setResultados(datos);
    setShowModal(true);
  };

  return (
    <div className="container mt-3">
      <h3>Exportar artículos filtrados</h3>
      {console.log(resultados)}
      {resultados.length > 0 && (
        <>
          <div className="mb-3">
            <Button variant="secondary" onClick={limpiarYVolver}>Volver a filtrar</Button>
          </div>

          <div className="table-responsive">
            <table className="table table-bordered table-sm">
              <thead className="table-light">
                <tr>
                  {headers.map((h) => <th key={h}>{h}</th>)}
                </tr>
              </thead>
              <tbody>
                {resultados.map((item, idx) => (
                  <tr key={idx}>
                    <td>{item.id}</td>
                    <td>{item.descripcion}</td>
                    <td>{item.codProve}</td>
                    <td>{item.marca}</td>
                    <td>{item.costo}</td>
                    <td>{item.precio1}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="d-flex gap-2">
            <Button variant="success" onClick={() => exportToExcel(resultados, headers)}>Exportar a Excel</Button>
            <Button variant="danger" onClick={() => exportToPDF(resultados, headers)}>Exportar a PDF</Button>
          </div>
        </>
      )}

      {/* Modal para elegir filtros */}
      <Modal show={showModal} onHide={() => setShowModal(false)} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Filtrar artículos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-3">
            <label>Proveedor desde:</label>
            <input
              type="text"
              className="form-control"
              value={proveedorDesde}
              onChange={(e) => setProveedorDesde(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label>Proveedor hasta:</label>
            <input
              type="text"
              className="form-control"
              value={proveedorHasta}
              onChange={(e) => setProveedorHasta(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label>Marca:</label>
            <input
              type="text"
              className="form-control"
              value={marca}
              onChange={(e) => setMarca(e.target.value)}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Cancelar</Button>
          <Button variant="primary" onClick={() => aplicarFiltros(proveedorDesde, proveedorHasta, marca)}>Filtrar</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ExportarArticulos;
