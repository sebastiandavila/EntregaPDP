import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./Registro.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuidv4 } from "uuid";

export default function Registro({ addmovimiento, SaldoFinal, setSaldoFinal }) {
  const [movimiento, setMovimiento] = useState({
    id: "",
    tipoMovimiento: "Tipo de movimiento",
    Nombre: "",
    Cantidad: null,
  });

  const [mensaje, setMensaje] = useState("");
  const [titulo, setTitulo] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleTaskInputChange = (e) => {
    setMovimiento({ ...movimiento, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (movimiento.Nombre.trim() && movimiento.Cantidad > 0 && movimiento.tipoMovimiento !== "Tipo de movimiento") {
      if (movimiento.tipoMovimiento === "Gasto") {
        if (movimiento.Cantidad <= SaldoFinal) {
          addmovimiento({ ...movimiento, id: uuidv4() });
          //reset input
          setMovimiento({ ...movimiento, Nombre: "", Cantidad: 0, tipoMovimiento: "Tipo de movimiento" });
          setTitulo("¡Registro exitoso!");
          setMensaje("El gasto fue agregado de manera correcta.toast-body.");
          setShow(true);
        }
        else {
          setTitulo("¡Error!");
          setMensaje("No cuenta con saldo suficiente para realizar el movimiento.");
          setShow(true);
        }
      }
      else {
        addmovimiento({ ...movimiento, id: uuidv4() });
        //reset input
        setMovimiento({ ...movimiento, Nombre: "", Cantidad: 0, tipoMovimiento: "Tipo de movimiento" });
        setTitulo("¡Registro exitoso!");
        setMensaje("El ingreso se ha agregado de manera exitosa.");
        setShow(true);
      }
    }
    else {
      alert("Ingrese todos los datos requeridos")
    }
  };

  return (
    <>
      <div className="size rounded shadow-sm">
        <div className="ContenedorR">
          <h3>Registro</h3>
          &nbsp;
        </div>
        &nbsp;
        <div>
          <form onSubmit={handleSubmit}>
            <div class="form-group form row">
              <div className="col-6 label">
                <label for="TipoMovimiento" className="labelp">
                  Tipo de movimiento
                </label>
              </div>
              <div className="col-6 ">
                <select
                  class="form-control"
                  id="TipoMovimiento"
                  name="tipoMovimiento"
                  value={movimiento.tipoMovimiento}
                  onChange={handleTaskInputChange}
                >
                  <option value="Tipo de movimiento" selected>
                    Tipo de movimiento
                  </option>
                  <option value="Ingreso">Ingreso</option>
                  <option value="Gasto">Gasto</option>
                </select>
              </div>
            </div>
            <div className="form-group form row">
              <div className="col-6 label">
                <label for="Nombre" className="labelp">
                  Nombre
                </label>
              </div>
              <div className="col-6 ">
                <input
                  type="text"
                  class="form-control"
                  id="Nombre"
                  name="Nombre"
                  placeholder="Nombre"
                  value={movimiento.Nombre}
                  onChange={handleTaskInputChange}
                ></input>
              </div>
            </div>

            <div className="form-group form row">
              <div className="col-6 label">
                <label for="Cantidad" className="labelp">
                  Cantidad
                </label>
              </div>
              <div className="col-6 label">
                <input
                  type="number"
                  class="form-control"
                  id="Cantidad"
                  placeholder="Cantidad"
                  name="Cantidad"
                  value={movimiento.Cantidad}
                  onChange={handleTaskInputChange}
                ></input>
              </div>
            </div>
            <center>
              <div class="form-group row form botones">
                <div class="col-4">
                  <button type="reset" class="btn btn-primary" onClick={() => setMovimiento({ ...movimiento, Nombre: "", Cantidad: 0, tipoMovimiento: "Tipo de movimiento" })}>
                    Cancelar
                  </button>
                </div>
                <div class="col-7">
                  <button type="submit" class="btn btn-primary">
                    Agregar movimiento
                  </button>
                </div>
              </div>
            </center>
          </form>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{titulo}</Modal.Title>
            </Modal.Header>
            <Modal.Body><p>{mensaje}</p></Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
          </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </>
  );
}
