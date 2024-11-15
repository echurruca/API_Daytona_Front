import React, { useState } from "react";
import { Modal, Form, Button, Row, Col, Container } from "react-bootstrap";
import { FaSave, FaTimes } from "react-icons/fa";

const EditarClienteMinimo = ({ clienteActual, onGuardar, onCancelar }) => {
  const [show, setShow] = useState(true);

  // Verificación de cliente actual para asegurarse de que codigo y descripcion se asignen correctamente
  const [cliente, setCliente] = useState({
    id: clienteActual[0],
    id: clienteActual[1],
    nombre: clienteActual[2],
    direccion: clienteActual[3],
    localidad: clienteActual[4],
    pcia: clienteActual[5],
    iva: clienteActual[6],
    cuit: clienteActual[7],
    telefono: clienteActual[8],
    observaciones: clienteActual[9],
    servicio: clienteActual[10],
    dias: clienteActual[11],
    vendedor: clienteActual[12],
    descuento: clienteActual[13],
    cp: clienteActual[14],
    direcEnv: clienteActual[15],
    mail: clienteActual[16],
  });

  // Función para manejar cambios en el formulario
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
          <Modal.Title>✏️ Editar Cliente</Modal.Title>
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
                    placeholder="Código"
                    value={cliente.id}
                    style={{ borderRadius: "15px", backgroundColor: "#f1f1f1" }}
                  />
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group controlId="formId">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    name="nombre"
                    placeholder="nombre"
                    value={cliente.nombre}
                    onChange={handleChange}
                    style={{ borderRadius: "15px", backgroundColor: "#f1f1f1" }}
                  />
                </Form.Group>
              </Col>
              <Col md={7}>
                <Form.Group controlId="formDireccion">
                  <Form.Label>Dirección</Form.Label>
                  <Form.Control
                    type="text"
                    name="direccion"
                    placeholder="Ingrese la direccion"
                    value={cliente.direccion}
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
                    placeholder="Ingrese el Id de la localidad"
                    value={cliente.localidad}
                    onChange={handleChange}
                    style={{ borderRadius: "15px", backgroundColor: "#f1f1f1" }}
                  />
                </Form.Group>
              </Col>
              <Col md={2}>
                <Form.Group controlId="formPcia">
                  <Form.Label>Pcia</Form.Label>
                  <Form.Control
                    type="text"
                    name="pcia"
                    placeholder="Ingrese el Id de la pcia"
                    value={cliente.pcia}
                    onChange={handleChange}
                    style={{ borderRadius: "15px", backgroundColor: "#f1f1f1" }}
                  />
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group controlId="formiva">
                  <Form.Label>iva</Form.Label>
                  <Form.Control
                    type="text"
                    name="iva"
                    placeholder="Ingrese el número de iva"
                    value={cliente.iva}
                    onChange={handleChange}
                    style={{ borderRadius: "15px", backgroundColor: "#f1f1f1" }}
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="formcuit">
                  <Form.Label>cuit</Form.Label>
                  <Form.Control
                    type="text"
                    name="cuit"
                    placeholder="Ingrese el cuit"
                    value={cliente.cuit}
                    onChange={handleChange}
                    style={{ borderRadius: "15px", backgroundColor: "#f1f1f1" }}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <Form.Group controlId="formTelefono">
                  <Form.Label>Teléfono</Form.Label>
                  <Form.Control
                    type="text"
                    name="telefono"
                    placeholder="Ingrese el teléfono"
                    value={cliente.telefono}
                    onChange={handleChange}
                    style={{ borderRadius: "15px", backgroundColor: "#f1f1f1" }}
                  />
                </Form.Group>
              </Col>
              <Col md={8}>
                <Form.Group controlId="formObservaciones">
                  <Form.Label>Observación</Form.Label>
                  <Form.Control
                    type="text"
                    name="observaciones"
                    placeholder="Ingrese la observación"
                    value={cliente.observaciones}
                    onChange={handleChange}
                    style={{ borderRadius: "15px", backgroundColor: "#f1f1f1" }}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={3}>
                <Form.Group controlId="formServicio">
                  <Form.Label>Servicio</Form.Label>
                  <Form.Control
                    type="text"
                    name="servicio"
                    placeholder="Ingrese el servicio"
                    value={cliente.servicio}
                    onChange={handleChange}
                    style={{ borderRadius: "15px", backgroundColor: "#f1f1f1" }}
                  />
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group controlId="formDias">
                  <Form.Label>Días</Form.Label>
                  <Form.Control
                    type="text"
                    name="dias"
                    placeholder="Ingrese los días"
                    value={cliente.dias}
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
                    value={cliente.mail}
                    onChange={handleChange}
                    style={{ borderRadius: "15px", backgroundColor: "#f1f1f1" }}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={3}>
                <Form.Group controlId="formDescuento">
                  <Form.Label>Descuento</Form.Label>
                  <Form.Control
                    type="text"
                    name="descuento"
                    placeholder="Ingrese el descuento"
                    value={cliente.descuento}
                    onChange={handleChange}
                    style={{ borderRadius: "15px", backgroundColor: "#f1f1f1" }}
                  />
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group controlId="formcp">
                  <Form.Label>cp</Form.Label>
                  <Form.Control
                    type="text"
                    name="cp"
                    placeholder="Ingrese el cp"
                    value={cliente.cp}
                    onChange={handleChange}
                    style={{ borderRadius: "15px", backgroundColor: "#f1f1f1" }}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formDirecEnv">
                  <Form.Label>DirecEnv</Form.Label>
                  <Form.Control
                    type="text"
                    name="direcEnv"
                    placeholder="Ingrese la DirecEnv"
                    value={cliente.direcEnv}
                    onChange={handleChange}
                    style={{ borderRadius: "15px", backgroundColor: "#f1f1f1" }}
                  />
                </Form.Group>
              </Col>
            </Row>

            {/* <Form.Group controlId="formVendedor">
              <Form.Label>Vendedor</Form.Label>
              <Form.Control
                type="text"
                name="vendedor"
                placeholder="Ingrese el vendedor"
                value={cliente.vendedor}
                onChange={handleChange}
                style={{ borderRadius: "15px", backgroundColor: "#f1f1f1" }}
              />
            </Form.Group> */}

            <Row className="mt-3">
              <Col>
                <Button
                  variant="success"
                  onClick={handleGuardar}
                  style={{ borderRadius: "20px", wcodigoth: "100%" }}
                >
                  <FaSave style={{ marginRight: "5px" }} /> Guardar
                </Button>
              </Col>
              <Col>
                <Button
                  variant="secondary"
                  onClick={handleCancelar}
                  style={{ borderRadius: "20px", wcodigoth: "100%" }}
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

export default EditarClienteMinimo;
