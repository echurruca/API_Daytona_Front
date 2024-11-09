import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { BsPencilFill, BsFillTrashFill } from 'react-icons/bs';
import { Button } from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa';

const TablaMarca = ({ headers, data, eliminar, editar,agregar }) => {
  const datos = data.map((item) => [item.id, item.nombre]);
  
  
  return (
    <TableContainer component={Paper}>
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
        
        Agregar Marca
    </Button>
    </div>

      <Table>
        <TableHead>
          <TableRow>
            {headers.map((header, index) => (
              <TableCell key={index} align="center">
                {header}
              </TableCell>
            ))}
            <TableCell align="center">{'Acciones'}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {datos.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <TableCell key={cellIndex} align="center">
                  {cell}
                </TableCell>
              ))}
               <TableCell align="center">
                <BsPencilFill 
                  style={{ color: '#2c286c', fontSize: '20px', marginRight: '20px' }}
                  onClick={() => editar(row )}
                />
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
  );
};

export default TablaMarca;


