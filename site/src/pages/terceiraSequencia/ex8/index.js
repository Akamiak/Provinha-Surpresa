import { useState } from "react";
import { Link } from 'react-router-dom';
import '../../styles.scss'

export default function Cinema() {
    const [qtdInteiras, setQtdInteiras] = useState();
    const [qtdMeias, setQtdMeias] = useState();
    const [diaSemana, setDiaSemana] = useState();
    const [nacionalidade, setNacionalidade] = useState(false);
    const [total, setTotal] = useState();

    function calcularIngresso() {
        if(nacionalidade === true)
            setTotal((qtdInteiras * 5) + (qtdMeias * 5));

        else if(diaSemana === 'quarta' ||
                diaSemana === 'quarta-feira')
            setTotal((qtdInteiras * 14.25) + (qtdMeias * 14.25));
        
        else 
            setTotal((qtdInteiras * 28.50) + (qtdMeias * 14.25))
    }

    return(
        <section className="column wh100 jc-center al-center">
            <div>
                <Link to='/'> <img src="/images/voltar.png" /> </Link>
                <div className='container-vermelho al-center'>
                    <div className="borda bd31949 jc-center al-center text">
                        Calcule seus ingressos
                    </div>

                    <div className="column padding text">
                        <label className='cd31949'> QTD. Inteiras: </label>
                        <input type='text' placeholder='informe a quantidade' value={qtdInteiras} onChange={e => Number(setQtdInteiras(e.target.value))} /> 
                    </div>

                    <div className="column padding text">
                        <label className='cd31949'> QTD. Meias: </label>
                        <input type='text' placeholder='informe a quantidade' value={qtdMeias} onChange={e => Number(setQtdMeias(e.target.value))} /> 
                    </div>
                    
                    <div className="column padding text">
                        <label className='cd31949'> Dia da Semana: </label>
                        <input type='text' placeholder='informe o dia da semana' value={diaSemana} onChange={e => setDiaSemana(e.target.value)} /> 
                    </div>

                    <div className="column padding text jc-start">
                        <label className='cd31949'> Brasileiro? </label>
                        <input type='checkbox' value={nacionalidade} onChange={e => setNacionalidade(e.target.checked)} /> 
                    </div>

                    <div className="padding">
                        <button className="text bd31949" onClick={calcularIngresso}> Calcular </button>
                    </div>

                    <div className="padding"> O valor será de R$<span className="text cd31949"> {total} </span> </div>
                </div>
            </div>
        </section>
    )
}