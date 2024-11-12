import React, { useState } from "react";
import { Modal, Form, Button, Row, Col, Container } from "react-bootstrap";
import { FaSave, FaTimes } from "react-icons/fa";

const EditarArticulo = ({ articuloActual, onGuardar, onCancelar }) => {
  const [show, setShow] = useState(true);

  // Verificación de articulo actual para asegurarse de que codigo y descripcion se asignen correctamente
  const [articulo, setArticulo] = useState({
    codigo: articuloActual[0],
    descripcion: articuloActual[1],
    marca: articuloActual[2],
    linea: articuloActual[3],
    prove: articuloActual[4],
    sublinea: articuloActual[5],
    medida: articuloActual[6],
    fechaAct: articuloActual[8],
    codProve: articuloActual[9],
    costo: articuloActual[10],
    std: articuloActual[11],
    precio1: articuloActual[12],
    precio2: articuloActual[13],
    precio3: articuloActual[14],
    estimado: articuloActual[15],
    margen: articuloActual[16],
    desc1: articuloActual[17],
    desc2: articuloActual[18],
    observaciones: articuloActual[19],
  });

  // Función para manejar cambios en el formulario
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
          <Modal.Title>✏️ Editar artículo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Col md={2}>
                <Form.Group controlId="formCódigo">
                  <Form.Label>Id</Form.Label>
                  <Form.Control
                    type="text"
                    name="codigo"
                    placeholder="Código"
                    value={articulo.codigo}
                    onChange={handleChange}
                    style={{ borderRadius: "15px", backgroundColor: "#f1f1f1" }}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formDescrpción">
                  <Form.Label>Descripción</Form.Label>
                  <Form.Control
                    type="text"
                    name="descripcion"
                    placeholder="Ingrese el código"
                    value={articulo.descripcion}
                    onChange={handleChange}
                    style={{ borderRadius: "15px", backgroundColor: "#f1f1f1" }}
                  />
                </Form.Group>
              </Col>
              <Col md={2}>
                <Form.Group controlId="formMarca">
                  <Form.Label>Marca</Form.Label>
                  <Form.Control
                    type="text"
                    name="marca"
                    placeholder="Ingrese el código de la marca"
                    value={articulo.marca}
                    onChange={handleChange}
                    style={{ borderRadius: "15px", backgroundColor: "#f1f1f1" }}
                  />
                </Form.Group>
              </Col>
              <Col md={2}>
                <Form.Group controlId="formLinea">
                  <Form.Label>Línea</Form.Label>
                  <Form.Control
                    type="text"
                    name="linea"
                    placeholder="Ingrese el código de la línea"
                    value={articulo.linea}
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
                    value={articulo.prove}
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
                    value={articulo.sublinea}
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
                    value={articulo.medida}
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
                    value={articulo.fechaAct}
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
                    value={articulo.codProve}
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
                    value={articulo.costo}
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
                    value={articulo.std}
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
                    value={articulo.precio1}
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
                    value={articulo.precio2}
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
                    value={articulo.precio3}
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
                    value={articulo.estimado}
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
                    value={articulo.margen}
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
                    value={articulo.desc1}
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
                    value={articulo.desc2}
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
                    value={articulo.observaciones}
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

export default EditarArticulo;
