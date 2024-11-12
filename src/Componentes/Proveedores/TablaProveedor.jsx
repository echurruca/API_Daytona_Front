import React,{useState} from 'react';
import { Table, TableBody, TableCell, TableContainer,TablePagination, TableHead, TableRow, Paper } from '@mui/material';
import { BsPencilFill, BsFillTrashFill } from 'react-icons/bs';
import { Button } from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa';

const TablaCliente = ({ headers, data, eliminar, editar,agregar }) => {

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  
  const datos = data.map((item) => [
  item.id,
  item?.codigo || null,
  item?.nombreProveedor||null,
  item?.direccion || null,
  item?.localidad ||null,
  item?.pcia || null,
  item?.observaciones || null,
  item?.postal || null,
  item?.telefono ||null,
  item?.fax || null,
  item?.cuit || null,
  item?.contacto || null,
  item?.ramo || null,
  item?.abreviado || null,
  item?.mail ||null

  ]);
 
  
  // Manejadores para la paginación
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Volver a la primera página al cambiar la cantidad de filas
  };

  // Determinamos los datos que se mostrarán en la página actual
  const paginatedData = datos.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  
  return (
    <div style={{ height: 'calc(100vh - 100px)', display: 'flex', flexDirection: 'column' }}>
    <TableContainer component={Paper} style={{ flex: 1, overflow: 'auto' }}>
       
      <div className="d-flex justify-content-end mb-3" >
      <Button
        onClick={agregar}
        variant="success"
        style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            borderRadius: '30px',
            padding: '10px 20px',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
            fontWeight: 'bold',
        }}
        >
          <FaPlus style={{ fontSize: '16px' }} />
        
        Agregar Proveedor
    </Button>
    </div>

      <Table stickyHeader>
        <TableHead>
          <TableRow>
            {headers.map((header, index) => (
              <TableCell key={index} align="center" style={{ position: 'sticky', top: 0, backgroundColor: '#fff', zIndex: 1 }}>
                {header}
              </TableCell>
            ))}
            <TableCell align="center">{'Editar'}</TableCell>
            <TableCell align="center">{'Eliminar'}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {paginatedData.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <TableCell key={cellIndex} align="center">
                  {cell}
                </TableCell>
              ))}
               <TableCell align="center">
                <BsPencilFill 
                  style={{ color: '#2c286c', fontSize: '20px' }}
                  onClick={() => editar(row )}
                />
                
              </TableCell>
              <TableCell align="center">
              <BsFillTrashFill
                  style={{ color: 'red', fontSize: '24px' }}
                  onClick={() => eliminar(row)}
                />

              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

        {/* Componente de paginación */}
        <TablePagination
        component="div"
        count={datos.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelRowsPerPage="Filas por página"
        rowsPerPageOptions={[5, 10, 15, 20, 50, 100]}
      />
     
    </TableContainer>
    </div>
  );
};

export default TablaCliente;


