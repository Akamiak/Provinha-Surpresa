import { useState } from "react";
import { Link } from 'react-router-dom';
import '../../styles.scss'

export default function Temperatura() {
    const [temperatura, setTemperatura] = useState();
    const [msg, setMsg] = useState('');

    function checarTemperatura() {
        if(temperatura < 36.0)
            setMsg('Hipotermia')
        else if(temperatura < 37.6)
            setMsg('Normal')
        else if(temperatura < 39.6)
            setMsg('Febre')
        else if(temperatura < 41.0)
            setMsg('Febre alta')
        else if(temperatura >= 41)
            setMsg('Hipertermia')
    }

    return(
        <section className="column wh100 jc-center al-center">
            <div>
                <Link to='/'> <img src="/images/voltar.png" /> </Link>
                <div className='container-verde al-center'>
                    <div className="borda b74c365 jc-center al-center text">
                        AVALIE A SUA TEMPERATURA
                    </div>

                    <div className="column padding text     ">
                        <label className='c74c365'> Temperatura: </label>
                        <input type='text' placeholder='informe sua temperatura atual' value={temperatura} onChange={e => Number(setTemperatura(e.target.value))} /> 
                    </div>

                    <div className="padding">
                        <button className="text b74c365" onClick={checarTemperatura}> Checar </button>
                    </div>

                    <div className="padding"> Sua situação é: <span className="text c74c365"> {msg} </span> </div>
                </div>
            </div>
        </section>
    )
}