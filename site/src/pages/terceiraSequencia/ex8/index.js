import { useState } from "react";
import { Link } from 'react-router-dom';
import '../../styles.scss';
import calcularIngresso from "../../../services/terceiraSequencia/ex8";

export default function Cinema() {
    const [qtdInteiras, setQtdInteiras] = useState();
    const [qtdMeias, setQtdMeias] = useState();
    const [diaSemana, setDiaSemana] = useState();
    const [nacionalidade, setNacionalidade] = useState(false);
    const [total, setTotal] = useState();

    function click() {
        const calc = calcularIngresso(qtdInteiras, qtdMeias, diaSemana, nacionalidade);
        setTotal(calc);
    }

    return(
        <section className="column wh100 jc-center al-center">
            <div>
                <Link to='/'> <img src="/images/voltar.png" /> </Link>
                <div className='container border-d31949 al-center'>
                    <div className="borda bd31949 jc-center al-center text">
                        Calcule seus ingressos
                    </div>

                    <label className='cd31949 column padding text'> QTD. Inteiras:
                        <input type='text' placeholder='informe a quantidade' value={qtdInteiras} onChange={e => Number(setQtdInteiras(e.target.value))} /> 
                    </label>

                    <label className='cd31949 column padding text'> QTD. Meias:
                        <input type='text' placeholder='informe a quantidade' value={qtdMeias} onChange={e => Number(setQtdMeias(e.target.value))} /> 
                    </label>
                
                    <label className='cd31949 column padding text'> Dia da Semana: 
                        <input type='text' placeholder='informe o dia da semana' value={diaSemana} onChange={e => setDiaSemana(e.target.value)} /> 
                    </label>

                    <label className='cd31949 column padding text'> Brasileiro?
                        <input type='checkbox' value={nacionalidade} onChange={e => setNacionalidade(e.target.checked)} /> 
                    </label>

                    <div className="padding">
                        <button className="text bd31949" onClick={click}> Calcular </button>
                    </div>

                    <div className="padding"> O valor será de R$<span className="text cd31949"> {total} </span> </div>
                </div>
            </div>
        </section>
    )
}