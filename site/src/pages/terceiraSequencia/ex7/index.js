import { useState } from "react";
import { Link } from 'react-router-dom';
import '../../styles.scss'

export default function Orcamento() {
    const [gastos, setGastos] = useState();
    const [ganhos, setGanhos] = useState();
    const [msg, setMsg] = useState('');

    function verificarOrcamento() {
        if(gastos > ganhos) 
            setMsg('Orçamento comprometido! Hora de rever seus gastos!');
        else if(gastos > ((81/100)*ganhos) && gastos < ganhos)
            setMsg('Cuidado, seu orçamento pode ficar comprometido!');
        else if(gastos > ((51/100)*ganhos) && gastos < ((80/100)*ganhos))
            setMsg('Atenção, melhor conter seus gastos!');
        else if(gastos > ((21/100)*ganhos) && gastos < ((50/100)*ganhos))
            setMsg('Muito bem, seus gastos não ultrapassaram metade dos ganhos!');
        else if(gastos > (0*ganhos) && gastos < ((20/100)*ganhos))
            setMsg('Parabéns, está gerenciando bem seu orçamento!');
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
                        <button className="text bd31949" onClick={verificarOrcamento}> Checar </button>
                    </div>

                    <div className="padding"> Sua situação: <span className="text cd31949"> {msg} </span> </div>
                </div>
            </div>
        </section>
    )
}