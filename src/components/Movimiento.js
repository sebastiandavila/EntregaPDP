import React, { useEffect, useState } from "react";
import { Button, Modal, InputGroup, FormControl, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Movimiento.css";

export default function Movimiento({ id, Nombre, tipoMovimiento, Cantidad, removemovimientos }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const handleRemoveClick = () => {
        removemovimientos(id, tipoMovimiento, Cantidad);
      };

    const formatterPeso = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
    })
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
                <div className={tipoMovimiento}>
                    {formatterPeso.format(Cantidad)}
                </div>
            </td>
        </tr>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Group controlId="exampleForm.ControlSelect1">
            
    <Form.Label>Example select</Form.Label>
    
    <Form.Control as="select">
        
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>

        <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="basic-addon1"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-file-earmark-text-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M2 2a2 2 0 0 1 2-2h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm7.5 1.5v-2l3 3h-2a1 1 0 0 1-1-1zM4.5 8a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z"/>
</svg></InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
      placeholder="Nombre"
      aria-label="Username"
      aria-describedby="basic-addon1"
      value={Nombre}
    />
  </InputGroup>

  <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="basic-addon1"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-cash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M15 4H1v8h14V4zM1 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H1z"/>
  <path d="M13 4a2 2 0 0 0 2 2V4h-2zM3 4a2 2 0 0 1-2 2V4h2zm10 8a2 2 0 0 1 2-2v2h-2zM3 12a2 2 0 0 0-2-2v2h2zm7-4a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/>
</svg></InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
      placeholder="Cantidad"
      aria-label="Username"
      aria-describedby="basic-addon1"
      value={Cantidad}
    />
  </InputGroup>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </>
    )
};
