import React, { useState } from "react";
import { Modal, Form, Button, Row, Col, Container } from "react-bootstrap";
import { FaSave, FaTimes } from "react-icons/fa";

const CrearProveedor = ({ onGuardar, onCancelar }) => {
  const [show, setShow] = useState(true);

  // Verificación de proveedor Actual para asegurarse de que id y nombre se asignen correctamente
  const [proveedor, setProveedor] = useState();

  // Función para manejar cambios en los forms
  const handleChange = (e) => {
    setProveedor({ ...proveedor, [e.target.name]: e.target.value });
  };

  const handleGuardar = () => {
    onGuardar(proveedor);
    setShow(false);
  };

  const handleCancelar = () => {
    onCancelar();
    setShow(false);
  };

  return (
    <Container>
      <Modal size="xl" show={show} onHide={handleCancelar}>
        <Modal.Header
          closeButton
          style={{ backgroundColor: "#007bff", color: "white" }}
        >
          <Modal.Title>Agregar proveedor</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Col md={2}>
                <Form.Group controlId="formId">
                  <Form.Label>Código</Form.Label>
                  <Form.Control
                    type="text"
                    name="codigo"
                    placeholder="código"
                    onChange={handleChange}
                    style={{ borderRadius: "15px", backgroundColor: "#f1f1f1" }}
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="formId">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    name="nombreProveedor"
                    placeholder="Ingrese el nombre"
                    onChange={handleChange}
                    style={{ borderRadius: "15px", backgroundColor: "#f1f1f1" }}
                  />
                </Form.Group>
              </Col>
              <Col md={5}>
                <Form.Group controlId="formDireccion">
                  <Form.Label>Dirección</Form.Label>
                  <Form.Control
                    type="text"
                    name="direccion"
                    placeholder="Ingrese la dirección"
                    onChange={handleChange}
                    style={{ borderRadius: "15px", backgroundColor: "#f1f1f1" }}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={3}>
                <Form.Group controlId="formLocalidad">
                  <Form.Label>Localidad</Form.Label>
                  <Form.Control
                    type="text"
                    name="localidad"
                    placeholder="Ingrese la localidad"
                    onChange={handleChange}
                    style={{ borderRadius: "15px", backgroundColor: "#f1f1f1" }}
                  />
                </Form.Group>
              </Col>
              <Col md={9}>
                <Form.Group controlId="formObservaciones">
                  <Form.Label>Observación</Form.Label>
                  <Form.Control
                    type="text"
                    name="observaciones"
                    placeholder="Ingrese la observación"
                    onChange={handleChange}
                    style={{ borderRadius: "15px", backgroundColor: "#f1f1f1" }}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={4}>
                <Form.Group controlId="formCP">
                  <Form.Label>CP</Form.Label>
                  <Form.Control
                    type="text"
                    name="postal"
                    placeholder="Ingrese el CP"
                    onChange={handleChange}
                    style={{ borderRadius: "15px", backgroundColor: "#f1f1f1" }}
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="formCUIT">
                  <Form.Label>CUIT</Form.Label>
                  <Form.Control
                    type="text"
                    name="cuit"
                    placeholder="Ingrese el CUIT"
                    onChange={handleChange}
                    style={{ borderRadius: "15px", backgroundColor: "#f1f1f1" }}
                  />
                </Form.Group>
              </Col>

              <Col md={4}>
                <Form.Group controlId="formTelefono">
                  <Form.Label>Teléfono</Form.Label>
                  <Form.Control
                    type="text"
                    name="telefono"
                    placeholder="Ingrese el teléfono"
                    onChange={handleChange}
                    style={{ borderRadius: "15px", backgroundColor: "#f1f1f1" }}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={4}>
                <Form.Group controlId="formIVA">
                  <Form.Label>Contacto</Form.Label>
                  <Form.Control
                    type="text"
                    name="contacto"
                    placeholder="Ingrese el contacto"
                    onChange={handleChange}
                    style={{ borderRadius: "15px", backgroundColor: "#f1f1f1" }}
                  />
                </Form.Group>
              </Col>
              <Col md={5}>
                <Form.Group controlId="formVendedor">
                  <Form.Label>Ramo</Form.Label>
                  <Form.Control
                    type="text"
                    name="ramo"
                    placeholder="Ingrese el ramo"
                    onChange={handleChange}
                    style={{ borderRadius: "15px", backgroundColor: "#f1f1f1" }}
                  />
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group controlId="formPcia">
                  <Form.Label>Pcia</Form.Label>
                  <Form.Control
                    type="text"
                    name="pcia"
                    placeholder="Ingrese la pcia"
                    onChange={handleChange}
                    style={{ borderRadius: "15px", backgroundColor: "#f1f1f1" }}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={4}>
                <Form.Group controlId="formServicio">
                  <Form.Label>Fax</Form.Label>
                  <Form.Control
                    type="text"
                    name="fax"
                    placeholder="Ingrese el fax"
                    onChange={handleChange}
                    style={{ borderRadius: "15px", backgroundColor: "#f1f1f1" }}
                  />
                </Form.Group>
              </Col>
            
              <Col md={4}>
                <Form.Group controlId="formDescuento">
                  <Form.Label>Abreviado</Form.Label>
                  <Form.Control
                    type="text"
                    name="abreviado"
                    placeholder="Ingrese el abreviado"
                    onChange={handleChange}
                    style={{ borderRadius: "15px", backgroundColor: "#f1f1f1" }}
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="formMail">
                  <Form.Label>Mail</Form.Label>
                  <Form.Control
                    type="text"
                    name="mail"
                    placeholder="Ingrese el mail"
                    onChange={handleChange}
                    style={{ borderRadius: "15px", backgroundColor: "#f1f1f1" }}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mt-3">
              <Col>
                <Button
                  variant="success"
                  onClick={handleGuardar}
                  style={{ borderRadius: "15px", width: "100%" }}
                >
                  <FaSave style={{ marginRight: "5px" }} /> Guardar
                </Button>
              </Col>
              <Col>
                <Button
                  variant="secondary"
                  onClick={handleCancelar}
                  style={{ borderRadius: "15px", width: "100%" }}
                >
                  <FaTimes style={{ marginRight: "5px" }} /> Cancelar
                </Button>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default CrearProveedor;
