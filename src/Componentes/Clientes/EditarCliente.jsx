import React, { useState } from "react";
import { Modal, Form, Button, Row, Col, Container } from "react-bootstrap";
import { FaSave, FaTimes } from "react-icons/fa";

const EditarCliente = ({ clienteActual, onGuardar, onCancelar }) => {
  const [show, setShow] = useState(true);

  // Verificación de cliente actual para asegurarse de que codigo y descripcion se asignen correctamente
  const [cliente, setCliente] = useState({
    id: clienteActual[0],
    nombre: clienteActual[1],
    direccion: clienteActual[2],
    localidad: clienteActual[3],
    pcia: clienteActual[4],
    iva: clienteActual[5],
    cuit: clienteActual[6],
    telefono: clienteActual[7],
    observaciones: clienteActual[8],
    servicio: clienteActual[9],
    dias: clienteActual[10],
    vendedor: clienteActual[11],
    descuento: clienteActual[12],
    cp: clienteActual[13],
    direcEnv: clienteActual[14],
    mail: clienteActual[15],
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
                  <Form.Label>Id</Form.Label>
                  <Form.Control
                    type="text"
                    name="id"
                    placeholder="Id"
                    value={cliente.id}
                    onChange={handleChange}
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
                <Form.Group controlId="formIVA">
                  <Form.Label>IVA</Form.Label>
                  <Form.Control
                    type="text"
                    name="iva"
                    placeholder="Ingrese el número de IVA"
                    value={cliente.IVA}
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
                    value={cliente.CUIT}
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
            <Form.Group controlId="formCP">
              <Form.Label>CP</Form.Label>
              <Form.Control
                type="text"
                name="cp"
                placeholder="Ingrese el CP"
                value={cliente.CP}
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

export default EditarCliente;
