import React, { useState } from 'react';
import { Modal, Form, Button, Row, Col, Container } from 'react-bootstrap';
import { FaSave, FaTimes } from 'react-icons/fa';

const CrearLinea = ({ onGuardar, onCancelar }) => {
    const [show, setShow] = useState(true);

    // Verificación de lineaActual para asegurarse de que id y nombre se asignen correctamente
    const [linea, setLinea] = useState();

    // Función para manejar cambios en el id
    const handleChange = (e) => {
        setLinea({ ...linea, [e.target.name]: e.target.value });
    };
   

    const handleGuardar = () => {
        onGuardar(linea); 
        setShow(false);
    };

    const handleCancelar = () => {
        onCancelar();
        setShow(false);
    };

    return (
        <Container>
        
            <Modal size="sm" show={show} onHide={handleCancelar}>
            <Modal.Header closeButton style={{ backgroundColor: '#007bff', color: 'white' }}>
                    <Modal.Title>Agregar línea</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                    <Form.Group controlId="formId">
                            <Form.Label>Id</Form.Label>
                            <Form.Control
                                type="text"
                                name="Id"
                                placeholder="Nombre del Id"
                                onChange={handleChange}
                                style={{ borderRadius: '15px', backgroundColor: '#f1f1f1' }}
                            />
                        </Form.Group>

                        <Form.Group controlId="formNombre">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                type="text"
                                name="nombre"
                                placeholder="Nombre de la línea"
                                onChange={handleChange}
                                style={{ borderRadius: '15px', backgroundColor: '#f1f1f1' }}
                            />
                        </Form.Group>
                        <Row className="mt-3">
                            <Col>
                                <Button variant="success" onClick={handleGuardar} style={{ borderRadius: '20px', width: '100%' }}>
                                <FaSave style={{ marginRight: '5px' }} /> Guardar
                                </Button>
                            </Col>
                            <Col>
                                <Button variant="secondary" onClick={handleCancelar} style={{ borderRadius: '20px', width: '100%' }}>
                                <FaTimes style={{ marginRight: '5px' }} /> Cancelar
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>
            </Modal>
        </Container>
    );
};

export default CrearLinea;

