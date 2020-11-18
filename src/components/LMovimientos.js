import React, { useEffect, useState } from "react";
import "./LMovimientos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Movimiento from "./Movimiento";

export default function Registro({ movimientos, removemovimientos }) {
  return (
    <>
      <div className="sizes  rounded">
        <div className="d-flex align-items-center  shadow-sm">
          <div className="ContenedorR">
            <h3>Listados de movimientos</h3>
          </div>
          <input disabled size="2" />
        </div>
        <div className="row">
          &nbsp;&nbsp;
          <div className="busqueda">
            <input className="busqueda1 form-control" />
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="gridRadios"
              id="gridRadios1"
              value="option1"
            />
            <label class="form-check-label" for="gridRadios1">
              Todos
            </label>
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="gridRadios"
              id="gridRadios2"
              value="option2"
            />
            <label class="form-check-label" for="gridRadios2">
              Ingreso
            </label>
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <div class="form-check disabled">
            <input
              class="form-check-input"
              type="radio"
              name="gridRadios"
              id="gridRadios3"
              value="option3"
            />
            <label class="form-check-label" for="gridRadios3">
              Gasto
            </label>
          </div>
        </div>
        <div className="divTabla">
          <table className="table tabla">
            {movimientos.map((movimiento) => (
              <Movimiento
                id={movimiento.id}
                Nombre={movimiento.Nombre}
                tipoMovimiento={movimiento.tipoMovimiento}
                Cantidad={movimiento.Cantidad}
                removemovimientos={removemovimientos}
              />
            ))}
          </table>
        </div>
      </div>
    </>
  );
}
