import React,{useState} from 'react';
import { Table, TableBody, TableCell, TableContainer,TablePagination, TableHead, TableRow, Paper } from '@mui/material';
import { BsPencilFill, BsFillTrashFill, BsFillInfoCircleFill } from 'react-icons/bs';
import { Button } from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa';

const TablaArticulo = ({ headers, data, eliminar, editar,agregar ,info}) => {

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  
  const datos = data.map((item) => [
  item.id,
  item.descripcion ,
  item?.marca || null,
  item?.linea || null,
  item?.prove || null,
  item?.sublinea || null,
  item?.medida || null,,
  item?.fechaAct || null,
  item?.codProve || null,
  item?.costo || null,
  item?.std || null,
  item?.precio1 || null,
  item?.precio2 || null,
  item?.precio3 || null,
  item?.estimado || null,
  item?.margen || null,
  item?.desc1 || null,
  item?.desc2 || null,
  item?.observaciones ||null
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
        
        Agregar Artículo
    </Button>
    </div>

      <Table stickyHeader>
        <TableHead>
          <TableRow>
            {headers.map((header, index) => (
              <TableCell key={index} align="center">
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
             <TableCell style={{ textAlign:'center' }}>
                <BsPencilFill 
                  style={{ color: '#2c286c', fontSize: '20px'}}
                  onClick={() => editar(row )}
                />
                
              </TableCell>
              <TableCell style={{ textAlign:'center' }}>
                <BsFillTrashFill
                  style={{ color: 'red', fontSize: '24px' }}
                  onClick={() => eliminar(row)}
                />
              </TableCell>
             <TableCell style={{ textAlign:'center' }}>
              
              <BsFillInfoCircleFill
                  style={{ color: 'gray', fontSize: '24px'}}
                  onClick={() => info(row)}
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
    </div>
  );
};

export default TablaArticulo;


