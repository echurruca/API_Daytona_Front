import React, { useState } from "react";
import { Modal, Form, Button, Row, Col, Container } from "react-bootstrap";
import { FaSave, FaTimes } from "react-icons/fa";

const CrearClienteMinimo = ({ onGuardar, onCancelar }) => {
  const [show, setShow] = useState(true);

  // Verificación de Cliente Actual para asegurarse de que id y nombre se asignen correctamente
  const [cliente, setCliente] = useState();

  // Función para manejar cambios en los forms
  const handleChange = (e) => {
    setCliente({ ...cliente, [e.target.name]: e.target.value });
  };

  const handleGuardar = () => {
    onGuardar(cliente);
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
          <Modal.Title>Agregar Cliente</Modal.Title>
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
                    placeholder="Ingrese el código"
                    onChange={handleChange}
                    style={{ borderRadius: "15px", backgroundColor: "#f1f1f1" }}
                  />
                </Form.Group>
              </Col>
              
              <Col md={5}>
                <Form.Group controlId="formId">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    name="nombre"
                    placeholder="Ingrese el nombre"
                    onChange={handleChange}
                    style={{ borderRadius: "15px", backgroundColor: "#f1f1f1" }}
                  />
                </Form.Group>
              </Col>
              <Col md={5}>
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
              <Col md={4}>
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
              
              <Col md={5}>
                <Form.Group controlId="formiva">
                  <Form.Label>iva</Form.Label>
                  <Form.Control
                    type="text"
                    name="iva"
                    placeholder="Ingrese el número de iva"
                    onChange={handleChange}
                    style={{ borderRadius: "15px", backgroundColor: "#f1f1f1" }}
                  />
                </Form.Group>
              </Col>
              <Col md={5}>
                <Form.Group controlId="formcuit">
                  <Form.Label>cuit</Form.Label>
                  <Form.Control
                    type="text"
                    name="cuit"
                    placeholder="Ingrese el cuit"
                    onChange={handleChange}
                    style={{ borderRadius: "15px", backgroundColor: "#f1f1f1" }}
                  />
                </Form.Group>
              </Col>
              <Col md={2}>
                <Form.Group controlId="formDias">
                  <Form.Label>Días</Form.Label>
                  <Form.Control
                    type="text"
                    name="dias"
                    placeholder="Cantidad de días"
                    onChange={handleChange}
                    style={{ borderRadius: "15px", backgroundColor: "#f1f1f1" }}
                  />
                </Form.Group>
              </Col>
            </Row>

           

            <Row>
              <Col md={12}>
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
             
              <Col md={6}>
                <Form.Group controlId="formVendedor">
                  <Form.Label>Vendedor</Form.Label>
                  <Form.Control
                    type="text"
                    name="vendedor"
                    placeholder="Ingrese el vendedor"
                    onChange={handleChange}
                    style={{ borderRadius: "15px", backgroundColor: "#f1f1f1" }}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formServicio">
                  <Form.Label>Servicio</Form.Label>
                  <Form.Control
                    type="text"
                    name="servicio"
                    placeholder="Ingrese el servicio"
                    onChange={handleChange}
                    style={{ borderRadius: "15px", backgroundColor: "#f1f1f1" }}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group controlId="formDescuento">
                  <Form.Label>Descuento</Form.Label>
                  <Form.Control
                    type="text"
                    name="descuento"
                    placeholder="Ingrese el descuento"
                    onChange={handleChange}
                    style={{ borderRadius: "15px", backgroundColor: "#f1f1f1" }}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formcp">
                  <Form.Label>cp</Form.Label>
                  <Form.Control
                    type="text"
                    name="cp"
                    placeholder="Ingrese el cp"
                    onChange={handleChange}
                    style={{ borderRadius: "15px", backgroundColor: "#f1f1f1" }}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group controlId="formDirecEnv">
                  <Form.Label>DirecEnv</Form.Label>
                  <Form.Control
                    type="text"
                    name="direcEnv"
                    placeholder="Ingrese la DirecEnv"
                    onChange={handleChange}
                    style={{ borderRadius: "15px", backgroundColor: "#f1f1f1" }}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
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

export default CrearClienteMinimo;
