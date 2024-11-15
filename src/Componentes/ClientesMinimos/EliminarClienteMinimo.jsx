import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Modal, Row, Col, Container } from 'react-bootstrap';
import { FaSave, FaTimes } from 'react-icons/fa';

const EliminarClienteMinimo = ({ clienteActual, onGuardar, onCancelar }) => {
  const [show, setShow] = useState(true);

  const handleGuardar = () => {
    onGuardar(clienteActual); // Ejecuta onGuardar y cierra el modal
    setShow(false);
  };

  return (
    <Container    
    className="modal show"
    style={{ display: 'block', position: 'initial' }}>
      
    
      <Modal size="sm" show={show} onHide={onCancelar} centered>
      <Modal.Header closeButton style={{ backgroundColor: '#007bff', color: 'white' }}>
          <Modal.Title>Confirmación de Eliminación</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ borderRadius: '20px', width: '100%', alignContent:'center' }}>
          <p>¿Está seguro de eliminar el cliente?</p>
       
          <Row style={{ borderRadius: '20px', width: '100%' , justifyContent: 'center'}}>
             {clienteActual[1]}</Row>
             <Row style={{ borderRadius: '20px', width: '100%' , justifyContent: 'center'}}>
             {clienteActual[2]}</Row>
          
          <Row className="mt-3">
            <Col>
              <Button  variant="danger" type="submit" onClick={handleGuardar} style={{ borderRadius: '20px', width: '100%' }}>
              <FaSave style={{ marginRight: '5px' }} /> Eliminar
              </Button>
            </Col>
            <Col>
              <Button  variant="secondary" onClick={onCancelar} style={{ borderRadius: '20px', width: '100%' }}>
              <FaTimes style={{ marginRight: '5px' }} /> Cancelar
              </Button>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
      
    </Container>
  );
};

export default EliminarClienteMinimo;
