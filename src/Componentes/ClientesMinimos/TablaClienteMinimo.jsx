import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer,TablePagination, TableHead, TableRow, Paper } from '@mui/material';
import {
  Fab,
  Tooltip,
 
  Button as MuiButton,
} from '@mui/material';
import { FaPlus } from 'react-icons/fa';

const TablaClienteMinimo = ({ headers, data, eliminar, editar,agregar }) => {

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  
  const datos = data.map((item) => [
  item.id,
  item.codigo,
  item?.nombre||null,
  item?.direccion || null,
  item?.localidad ||null,
  item?.pcia || null,
  item?.iva || null,
  item?.cuit || null,
  item?.telefono ||null,
  item?.observaciones || null,
  item?.servicio || null,
  item?.dias || null,
  item?.vendedor || null,
  item?.descuento || null,
  item?.cp || null,
  item?.direcEnv || null,
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

    <>
    
  
        <TableContainer component={Paper} style={{ flex: 1, overflow: 'auto' }}>
          <div className="d-flex justify-content-end mb-3" >
    </div>

      <Table stickyHeader>
        <TableHead>
          <TableRow>
            {headers.map((header, index) => (
              <TableCell key={index} align="center"  style={{ position: 'sticky', top: 0, backgroundColor: '#fff', zIndex: 1 }}>
                {header}
              </TableCell>
            ))}
            {/* <TableCell align="center">{'Acciones'}</TableCell> */}
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

     
    </TableContainer>
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
        style={{ position: 'sticky', bottom: 0, backgroundColor: '#fff', zIndex: 1 }}
      />

<Tooltip title="Agregar Cliente" placement="left">
        <Fab
          color="success"
          onClick={agregar}
          style={{
            position: 'fixed',
            bottom: 24,
            right: 24,
            zIndex: 1500,
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
          }}
        >
          <FaPlus />
        </Fab>
      </Tooltip>


    </>
  );
};

export default TablaClienteMinimo;


