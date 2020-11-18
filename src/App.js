import "./App.css";
import Header from "./components/Header";
import Registro from "./components/Registro";
import "bootstrap/dist/css/bootstrap.min.css";
import LMovimientos from "./components/LMovimientos";
import React, { useEffect, useState } from "react";

function App() {
  const [movimientos, setMovimientos] = useState([]);
  const [SaldoInicial, setSaldoInicial] = useState(0);
  const [SaldoFinal, setSaldoFinal] = useState(0);



  useEffect(() => {
    let Calculo=0;
    Calculo=SaldoInicial;
    movimientos.map((movimiento) => {

      if (movimiento.tipoMovimiento === "Gasto") {

        Calculo = Calculo - movimiento.Cantidad;
      }
      else if (movimiento.tipoMovimiento === "Ingreso") {
        Calculo = parseInt(Calculo) + parseInt(movimiento.Cantidad);
      }
      
    });
    setSaldoFinal(Calculo)

  }, [movimientos, SaldoInicial, setMovimientos]);

  const addmovimiento = (movimiento) => {
    setMovimientos([...movimientos, movimiento]);

  };

  const removemovimientos = (id, tipoMovimiento, Cantidad) => {
    
    setMovimientos(movimientos.filter((movimiento) => movimiento.id !== id));

 
      
  };


  return (
    <div className="App-header">
      <Header
        setSaldoInicial={setSaldoInicial}
        SaldoInicial={SaldoInicial}
        SaldoFinal={SaldoFinal}
      />
      <div className="row">
        &nbsp;&nbsp;
      <Registro
          addmovimiento={addmovimiento}
          SaldoInicial={SaldoInicial}
          SaldoFinal={SaldoFinal}
          setSaldoFinal={setSaldoFinal}
        />
&nbsp;&nbsp;
<div className="movimientos col-7">
          <LMovimientos movimientos={movimientos}
          removemovimientos={removemovimientos}
          />
        </div>
      </div>
    </div>
  );
}

export default App;