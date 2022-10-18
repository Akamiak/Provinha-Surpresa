import { useState } from "react";
import { Link } from 'react-router-dom';
import '../../styles.scss';
import verificarOrcamento from "../../../services/terceiraSequencia/ex7";

export default function Orcamento() {
    const [gastos, setGastos] = useState();
    const [ganhos, setGanhos] = useState();
    const [msg, setMsg] = useState('');

    function click() {
        const resp = verificarOrcamento(gastos, ganhos);
        setMsg(resp);
    }


    return(
        <section className="column wh100 jc-center al-center">
            <div>
                <Link to='/'> <img src="/images/voltar.png" /> </Link>
                <div className='container-vermelho al-center'>
                    <div className="borda bd31949 jc-center al-center text">
                        Veja sua situação financeira
                    </div>

                    <div className="column padding text">
                        <label className='cd31949'> Ganhos: </label>
                        <input type='text' placeholder='informe seus ganhos' value={ganhos} onChange={e => Number(setGanhos(e.target.value))} /> 
                    </div>

                    <div className="column padding text">
                        <label className='cd31949'> Gastos: </label>
                        <input type='text' placeholder='informe seus gastos' value={gastos} onChange={e => Number(setGastos(e.target.value))} /> 
                    </div>

                    <div className="padding">
                        <button className="text bd31949" onClick={click}> Checar </button>
                    </div>

                    <div className="padding"> Sua situação: <span className="text cd31949"> {msg} </span> </div>
                </div>
            </div>
        </section>
    )
}