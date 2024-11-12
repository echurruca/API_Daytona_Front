import React, { useState } from "react";
import { Modal, Form, Button, Row, Col, Container } from "react-bootstrap";
import { FaSave, FaTimes } from "react-icons/fa";

const EditarProveedor = ({ proveedorActual, onGuardar, onCancelar }) => {
  const [show, setShow] = useState(true);

  // Verificación de proveedor actual para asegurarse de que codigo y descripcion se asignen correctamente
  const [proveedor, setProveedor] = useState({
    id: proveedorActual[0],
    codigo: proveedorActual[1],
    nombreProveedor: proveedorActual[2],
    direccion: proveedorActual[3],
    localidad: proveedorActual[4],
    pcia: proveedorActual[5],
    observaciones: proveedorActual[6],
    postal: proveedorActual[7],
    telefono: proveedorActual[8],
    fax: proveedorActual[9],
    cuit: proveedorActual[10],
    contacto: proveedorActual[11],
    ramo: proveedorActual[12],
    abreviado: proveedorActual[13],
    mail: proveedorActual[14],
  });

  // Función para manejar cambios en el formulario
  const handleChange = (e) => {
    setProveedor({ ...proveedor, [e.target.name]: e.target.value });
  };

  const handleGuardar = () => {
    console.log("después de guardar")
    console.log(proveedor)
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
          <Modal.Title>✏️ Editar proveedor</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Row>
              
              <Col md={2}>
                <Form.Group controlId="formId">
                  <Form.Label>Id</Form.Label>
                  <Form.Control
                    type="text"
                    name="codigo"
                    placeholder="código"
                    value={proveedor.id}
                    
                    style={{ borderRadius: "15px", backgroundColor: "#f1f1f1" }}
                  />
                </Form.Group>
              </Col>
              <Col md={2}>
                <Form.Group controlId="formId">
                  <Form.Label>Código</Form.Label>
                  <Form.Control
                    type="text"
                    name="codigo"
                    placeholder="código"
                    value={proveedor.codigo}
                    
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
                    value={proveedor.nombreProveedor}
                    onChange={handleChange}
                    style={{ borderRadius: "15px", backgroundColor: "#f1f1f1" }}
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="formDireccion">
                  <Form.Label>Dirección</Form.Label>
                  <Form.Control
                    type="text"
                    name="direccion"
                    placeholder="Ingrese la dirección"
                    value={proveedor.direccion}
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
                    value={proveedor.localidad}
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
                    value={proveedor.observaciones}
                    onChange={handleChange}
                    style={{ borderRadius: "15px", backgroundColor: "#f1f1f1" }}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={4}>
                <Form.Group controlId="formCP">
                  <Form.Label>C.P.</Form.Label>
                  <Form.Control
                    type="text"
                    name="postal"
                    placeholder="Ingrese el CP"
                    value={proveedor.postal}
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
                    value={proveedor.cuit}
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
                    value={proveedor.telefono}
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
                    value={proveedor.contacto}
                    onChange={handleChange}
                    style={{ borderRadius: "15px", backgroundColor: "#f1f1f1" }}
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="formVendedor">
                  <Form.Label>Ramo</Form.Label>
                  <Form.Control
                    type="text"
                    name="ramo"
                    placeholder="Ingrese el ramo"
                    value={proveedor.ramo}
                    onChange={handleChange}
                    style={{ borderRadius: "15px", backgroundColor: "#f1f1f1" }}
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="formPcia">
                  <Form.Label>Pcia</Form.Label>
                  <Form.Control
                    type="text"
                    name="pcia"
                    placeholder="Ingrese la pcia"
                    value={proveedor.pcia}
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
                    value={proveedor.fax}
                    onChange={handleChange}
                    style={{ borderRadius: "15px", backgroundColor: "#f1f1f1" }}
                  />
                </Form.Group>
              </Col>
           
              <Col md={3}>
                <Form.Group controlId="formDescuento">
                  <Form.Label>Abreviado</Form.Label>
                  <Form.Control
                    type="text"
                    name="abreviado"
                    placeholder="Ingrese el abreviado"
                    value={proveedor.abreviado}
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
                    value={proveedor.mail}
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

export default EditarProveedor;
