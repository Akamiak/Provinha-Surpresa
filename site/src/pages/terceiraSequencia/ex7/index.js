import { useState } from "react";
import { Link } from 'react-router-dom';
import '../../../commom.scss'
import '../../styles.scss';
import verificarOrcamento from "../../../services/terceiraSequencia/ex7";

export default function Orcamento() {
    const [ganhos, setGanhos] = useState();
    const [gastos, setGastos] = useState();
    const [msg, setMsg] = useState('');

    function click() {
        const resp = verificarOrcamento(ganhos, gastos);
        setMsg(resp);
    }


    return(
        <section className="column wh100 jc-center al-center">
            <div>
                <Link to='/'> <img src="/images/voltar.png" /> </Link>
                <div className='container border-d31949 al-center'>
                    <div className="borda bd31949 jc-center al-center text">
                        Veja sua situação financeira
                    </div>

                    <label className='cd31949 column padding text'> Ganhos:
                        <input type='text' placeholder='informe seus ganhos' value={ganhos} onChange={e => Number(setGanhos(e.target.value))} /> 
                    </label>

                    <label className='cd31949 column padding text'> Gastos:
                        <input type='text' placeholder='informe seus gastos' value={gastos} onChange={e => Number(setGastos(e.target.value))} /> 
                    </label>

                    <div className="padding">
                        <button className="text bd31949" onClick={click}> Checar </button>
                    </div>

                    <div className="padding"> Sua situação: <span className="text cd31949"> {msg} </span> </div>
                </div>
            </div>
        </section>
    )
}