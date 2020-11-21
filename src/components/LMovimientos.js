import React, { useEffect, useState } from "react";
import "./LMovimientos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Movimiento from "./Movimiento";

export default function Registro({
  movimientos,
  removemovimientos,
  SaldoFinal,
  SaldoInicial,
  updatemovimiento,
  setMovimientos,
}) {
  const [cantidadMov, setCantidadmov] = useState(movimientos.length);
  const [radio, setRadio] = useState("Todos");
  const [movimientosFilter, setMovimientosFilter] = useState([]);
  const [buscar, setBuscar] = useState("")

  const handleChange = (e) => {
    setRadio(e.target.value);
  };
  const handleChangeInput = (e) => {
    setBuscar(e.target.value);
  };
 
  useEffect(() => {
    let AuxMovFilter = [];
    let AuxBuscar = [];
    
    if (radio === "Todos") {
      AuxMovFilter = [...movimientos];
    } else if (radio === "Ingreso") {
      AuxMovFilter = movimientos.filter(
        (movimiento) => movimiento.tipoMovimiento === "Ingreso"

      );
    } else if (radio === "Gasto") {
      AuxMovFilter = movimientos.filter(
        (movimiento) => movimiento.tipoMovimiento === "Gasto"
      );
    }
    setMovimientosFilter(AuxMovFilter);

    if(buscar!=="" || buscar!==" ")
    {
     AuxBuscar = AuxMovFilter.filter(
      (movimiento) => movimiento.Nombre.includes(buscar)
     
    );
    setMovimientosFilter(AuxBuscar);
    setCantidadmov(AuxBuscar.length);
    }   
    else{
      setCantidadmov( AuxMovFilter.length);
    }
   
   

  }, [radio, setRadio, movimientos, buscar]);

 

  return (
    <>
      <div className="sizes  rounded">
        <div className="d-flex align-items-center  shadow-sm">
          <div className="ContenedorR">
            <h3>Listados de movimientos</h3>
          </div>
          <input value={cantidadMov} disabled size="2" />
        </div>
        <div className="row">
          &nbsp;&nbsp;
          <div className="busqueda">
            <input className="busqueda1 form-control" onChange={handleChangeInput}/>
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="gridRadios2"
              id="gridRadios1"
              value="Todos"
              onChange={handleChange}
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
              name="gridRadios2"
              id="gridRadios2"
              value="Ingreso"
              onChange={handleChange}
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
              name="gridRadios2"
              id="gridRadios3"
              value="Gasto"
              onChange={handleChange}
            />
            <label class="form-check-label" for="gridRadios3">
              Gasto
            </label>
          </div>
        </div>
        <div className="divTabla">
          <table className="table tabla">
            {movimientosFilter.map((movimiento) => (
              <Movimiento
                id={movimiento.id}
                Nombre={movimiento.Nombre}
                tipoMovimiento={movimiento.tipoMovimiento}
                Cantidad={movimiento.Cantidad}
                removemovimientos={removemovimientos}
                SaldoFinal={SaldoFinal}
                SaldoInicial={SaldoInicial}
                movimientos={movimientos}
                updatemovimiento={updatemovimiento}
                setMovimientos={setMovimientos}
                setMovimientosFilter={setMovimientosFilter}
                movimientosFilter={movimientosFilter}
                
              />
            ))}
          </table>
        </div>
      </div>
    </>
  );
}
