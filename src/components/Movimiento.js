import React, { useEffect, useState } from "react";
import { Button, Modal, InputGroup, FormControl, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Movimiento.css";

export default function Movimiento({
  id,
  Nombre,
  tipoMovimiento,
  Cantidad,
  removemovimientos,
  SaldoFinal,
  SaldoInicial,
  movimientos,
  updatemovimiento,
  setMovimientos,
  setMovimientosFilter,
  movimientosFilter
  
}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [nuevo, setNuevo] = useState({
    Cod: id,
    TypeMov: tipoMovimiento,
    Name: Nombre,
    Cant: Cantidad,
  });

  let auxMov = "";
  if (tipoMovimiento === "Gasto") {
    auxMov = "Ingreso";
  } else {
    auxMov = "Gasto";
  }





  useEffect(() => {
    

    if (tipoMovimiento === "Gasto") {
      auxMov = "Ingreso";
    } else {
      auxMov = "Gasto";
    }

    setNuevo({
      Cod: id,
      TypeMov: tipoMovimiento,
      Name: Nombre,
      Cant: Cantidad,
    });
  }, [movimientos, SaldoInicial, setMovimientos, movimientosFilter, setMovimientosFilter]);

  

  const handleRemoveClick = () => {
    
    removemovimientos(id, tipoMovimiento, Cantidad);
  };

  

  const handleInputUpdate = (e) => {
    setNuevo({ ...nuevo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    console.log(
      SaldoFinal,
      "",
      Cantidad,
      "",
      nuevo.Cant,
      "",
      tipoMovimiento,
      "",
      nuevo.TypeMov
    );
    if (
      nuevo.Name.trim() &&
      nuevo.Cant > 0 &&
      nuevo.TypeMov !== "Tipo de movimiento"
    ) {
     
      let Calculo = 0;
      Calculo = SaldoInicial;
      movimientos.map((movimiento) => {
        if (nuevo.Cod !== movimiento.id) {
          if (movimiento.tipoMovimiento === "Gasto") {
            Calculo = Calculo - movimiento.Cantidad;
          } else if (movimiento.tipoMovimiento === "Ingreso") {
            Calculo = parseInt(Calculo) + parseInt(movimiento.Cantidad);
          }
        }
      });

      if (nuevo.TypeMov === "Gasto" && Calculo-nuevo.Cant>=0) {
        updatemovimiento(nuevo);
        handleClose();
      }
      else if (nuevo.TypeMov === "Ingreso" && parseInt(Calculo) + parseInt(nuevo.Cant)>=0){
        updatemovimiento(nuevo);
        handleClose();
      }
      else{
        alert("No cuenta con saldo suficiente para realizar el movimiento.")
      }
    }
  };

  const formatterPeso = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  });
  return (
    <>
      <tr>
        <td className="columna">
          {" "}
          <img
            className="lapiz"
            src="https://www.dosacordes.es/web/wp-content/uploads/2020/06/icono-lapiz.png"
            alt="Editar"
            onClick={handleShow}
          ></img>{" "}
        </td>
        <td>
          {" "}
          <img
            className="lapiz"
            src="https://www.rawshorts.com/freeicons/wp-content/uploads/2017/01/blue_prodpictxmark_1484336297-1.png"
            alt="Borrar"
            onClick={handleRemoveClick}
          ></img>{" "}
        </td>
        <td>{tipoMovimiento}</td>
        <td>{Nombre}</td>
        <td>
          <div className={tipoMovimiento}>{formatterPeso.format(Cantidad)}</div>
        </td>
      </tr>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Tipo de movimiento</Form.Label>
            <Form.Control
              as="select"
              name="TypeMov"
              onChange={handleInputUpdate}
            >
              <option value={nuevo.Type}>{nuevo.TypeMov}</option>
              <option value={auxMov}>{auxMov}</option>
            </Form.Control>
          </Form.Group>
          <Form.Label>Nombre</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  class="bi bi-file-earmark-text-fill"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 2a2 2 0 0 1 2-2h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm7.5 1.5v-2l3 3h-2a1 1 0 0 1-1-1zM4.5 8a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
              </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              type="text"
              placeholder="Nombre"
              name="Name"
              value={nuevo.Name}
              onChange={handleInputUpdate}
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <Form.Label>Cantidad</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  class="bi bi-cash"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M15 4H1v8h14V4zM1 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H1z"
                  />
                  <path d="M13 4a2 2 0 0 0 2 2V4h-2zM3 4a2 2 0 0 1-2 2V4h2zm10 8a2 2 0 0 1 2-2v2h-2zM3 12a2 2 0 0 0-2-2v2h2zm7-4a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
                </svg>
              </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              placeholder="Cantidad"
              name="Cant"
              type="number"
              value={nuevo.Cant}
              onChange={handleInputUpdate}
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={(handleClose, handleSubmit)}>
            Guardar cambios
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
