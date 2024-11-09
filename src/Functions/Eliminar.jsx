import React, { useState } from 'react';
import { Modal, Row, Col, Container, Button } from 'react-bootstrap'


const Eliminar = (elimina, setElimina) => {
    const [show, setShow] = useState(true);
    const handleClose = () => {
        setShow(false);
        setElimina(!elimina)
      
    }

   

    return (
        <Container>
            <Modal size="sm" show={show}>
                <Modal.Header >
                    <p> Esta seguro de eliminar</p>

                </Modal.Header>
                <Modal.Body>
                   

                    <Row>
                        <Col>
                            <Button size="sm" className="guardar" variant="secondary" type="submit" onClick={()=> eliminar(eliminarTutor.usuario.id)}>
                                Eliminar
                                    </Button>
                        </Col>
                        <Col>
                            <Button size="sm" className="cancelar" variant="danger" onClick={handleClose}>
                                Cancelar
                                    </Button>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        </Container>
    )
}
export default Eliminar;