import React, { useState } from "react";
import { Modal, Form, Button, Row, Col, Container } from "react-bootstrap";
import { FaSave, FaTimes } from "react-icons/fa";

const CrearArticulo = ({ onGuardar, onCancelar }) => {
  const [show, setShow] = useState(true);

  // Verificación de articuloActual para asegurarse de que id y nombre se asignen correctamente
  const [articulo, setArticulo] = useState();

  const fecha = new Date();

  // Función para manejar cambios en los forms
  const handleChange = (e) => {
    setArticulo({ ...articulo, [e.target.name]: e.target.value });
  };

  const handleGuardar = () => {
    onGuardar(articulo);
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
          <Modal.Title>Agregar Artículo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Col md={3}>
                <Form.Group controlId="formCódigo">
                  <Form.Label>Id</Form.Label>
                  <Form.Control
                    type="text"
                    name="codigo"
                    placeholder="Código"
                    onChange={handleChange}
                    style={{ borderRadius: "15px", backgroundColor: "#f1f1f1" }}
                  />
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group controlId="formDescrpción">
                  <Form.Label>Descripción</Form.Label>
                  <Form.Control
                    type="text"
                    name="descripcion"
                    placeholder="Ingrese el código"
                    onChange={handleChange}
                    style={{ borderRadius: "15px", backgroundColor: "#f1f1f1" }}
                  />
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group controlId="formMarca">
                  <Form.Label>Marca</Form.Label>
                  <Form.Control
                    type="text"
                    name="marca"
                    placeholder="Ingrese el código de la marca"
                    onChange={handleChange}
                    style={{ borderRadius: "15px", backgroundColor: "#f1f1f1" }}
                  />
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group controlId="formLinea">
                  <Form.Label>Línea</Form.Label>
                  <Form.Control
                    type="text"
                    name="linea"
                    placeholder="Ingrese el código de la línea"
                    onChange={handleChange}
                    style={{ borderRadius: "15px", backgroundColor: "#f1f1f1" }}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={3}>
                <Form.Group controlId="formProve">
                  <Form.Label>Proveedor</Form.Label>
                  <Form.Control
                    type="text"
                    name="prove"
                    placeholder="Ingrese el número del prove"
                    onChange={handleChange}
                    style={{ borderRadius: "15px", backgroundColor: "#f1f1f1" }}
                  />
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group controlId="formSublinea">
                  <Form.Label>Sub-Línea</Form.Label>
                  <Form.Control
                    type="text"
                    name="sublinea"
                    placeholder="Ingrese la sub-línea"
                    onChange={handleChange}
                    style={{ borderRadius: "15px", backgroundColor: "#f1f1f1" }}
                  />
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group controlId="formMedida">
                  <Form.Label>Medida</Form.Label>
                  <Form.Control
                    type="text"
                    name="medida"
                    placeholder="Ingrese la medida"
                    onChange={handleChange}
                    style={{ borderRadius: "15px", backgroundColor: "#f1f1f1" }}
                  />
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group controlId="formFecha">
                  <Form.Label>FechaAct</Form.Label>
                  <Form.Control
                    type="text"
                    name="fechaAct"
                    placeholder="dd/mm/aaaa ej: 05/06/2024"
                    onChange={handleChange}
                    style={{ borderRadius: "15px", backgroundColor: "#f1f1f1" }}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={3}>
                <Form.Group controlId="formCodProv">
                  <Form.Label>Cod. Prov.</Form.Label>
                  <Form.Control
                    type="text"
                    name="codProve"
                    placeholder="Ingrese el código"
                    onChange={handleChange}
                    style={{ borderRadius: "15px", backgroundColor: "#f1f1f1" }}
                  />
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group controlId="formCosto">
                  <Form.Label>Costo</Form.Label>
                  <Form.Control
                    type="text"
                    name="costo"
                    placeholder="Ingrese el costo"
                    onChange={handleChange}
                    style={{ borderRadius: "15px", backgroundColor: "#f1f1f1" }}
                  />
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group controlId="formStd">
                  <Form.Label>Std.</Form.Label>
                  <Form.Control
                    type="text"
                    name="std"
                    placeholder="Ingrese el std"
                    onChange={handleChange}
                    style={{ borderRadius: "15px", backgroundColor: "#f1f1f1" }}
                  />
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group controlId="formPrecio1">
                  <Form.Label>Precio1</Form.Label>
                  <Form.Control
                    type="text"
                    name="precio1"
                    placeholder="Ingrese el precio"
                    onChange={handleChange}
                    style={{ borderRadius: "15px", backgroundColor: "#f1f1f1" }}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={3}>
                <Form.Group controlId="formPrecio2">
                  <Form.Label>Precio2</Form.Label>
                  <Form.Control
                    type="text"
                    name="precio2"
                    placeholder="Ingrese el precio"
                    onChange={handleChange}
                    style={{ borderRadius: "15px", backgroundColor: "#f1f1f1" }}
                  />
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group controlId="formPrecio3">
                  <Form.Label>Precio3</Form.Label>
                  <Form.Control
                    type="text"
                    name="precio3"
                    placeholder="Ingrese el precio"
                    onChange={handleChange}
                    style={{ borderRadius: "15px", backgroundColor: "#f1f1f1" }}
                  />
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group controlId="formEstimado">
                  <Form.Label>Estimado</Form.Label>
                  <Form.Control
                    type="text"
                    name="estimado"
                    placeholder="Ingrese el precio estimado"
                    onChange={handleChange}
                    style={{ borderRadius: "15px", backgroundColor: "#f1f1f1" }}
                  />
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group controlId="formMargen">
                  <Form.Label>Margen</Form.Label>
                  <Form.Control
                    type="text"
                    name="margen"
                    placeholder="Ingrese el margen"
                    onChange={handleChange}
                    style={{ borderRadius: "15px", backgroundColor: "#f1f1f1" }}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={2}>
                <Form.Group controlId="formDesc1">
                  <Form.Label>Desc1</Form.Label>
                  <Form.Control
                    type="text"
                    name="desc1"
                    placeholder="Ingrese el descuento"
                    onChange={handleChange}
                    style={{ borderRadius: "15px", backgroundColor: "#f1f1f1" }}
                  />
                </Form.Group>
              </Col>
              <Col md={2}>
                <Form.Group controlId="formDesc2">
                  <Form.Label>Desc2</Form.Label>
                  <Form.Control
                    type="text"
                    name="desc2"
                    placeholder="Ingrese el descuento"
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
                  style={{ borderRadius: "20px", width: "100%" }}
                >
                  <FaSave style={{ marginRight: "5px" }} /> Guardar
                </Button>
              </Col>
              <Col>
                <Button
                  variant="secondary"
                  onClick={handleCancelar}
                  style={{ borderRadius: "20px", width: "100%" }}
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

export default CrearArticulo;
