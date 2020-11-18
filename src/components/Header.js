import React from 'react';
import "./Header.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header({setSaldoInicial, SaldoInicial, SaldoFinal}) {
    const formatterPeso = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
      })
    const handleTaskInputChange = (e) => {
        
        setSaldoInicial(e.target.value)
      };

    return (
        <div>
            <div className="d-flex align-items-center p-2 my-2 bg-purple rounded shadow-sm">
                <img
                    className="mr-3"
                    src="https://cdn.iconscout.com/icon/free/png-512/coin-781-1093492.png"
                    alt=""
                    width="80"
                    height="70"
                />
                <h1 className="TextoH">RapidCash</h1>
                <div className="SaldoI">
                    <center>
                        <h4 className="TextoH">Saldo inicial</h4>
                    </center>
    <input className="InputSaldo" type="number" value={SaldoInicial} onChange={handleTaskInputChange}></input>
                   
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div className="SaldoF">
                    <center>
                        <h4 className="TextoH">Saldo final</h4>
                    </center>
                    <input disabled className="InputSaldo" value={formatterPeso.format(SaldoFinal)}></input>
                </div>
            </div>
        </div>
    )
}