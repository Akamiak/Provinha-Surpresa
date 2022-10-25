import { useState } from "react";
import { Link } from 'react-router-dom';
import '../../styles.scss';
import checarTemperatura from "../../../services/segundaSequencia/ex6";

export default function Temperatura() {
    const [temperatura, setTemperatura] = useState();
    const [msg, setMsg] = useState('');

    function click() {
        const resp = checarTemperatura(temperatura);
        setMsg(resp);
    }

    return(
        <section className="column wh100 jc-center al-center">
            <div>
                <Link to='/'> <img src="/images/voltar.png" /> </Link>
                <div className='container border-74c365 al-center'>
                    <div className="borda b74c365 jc-center al-center text">
                        AVALIE A SUA TEMPERATURA
                    </div>

                    <label className='c74c365 column padding text'> Temperatura:
                        <input type='text' placeholder='informe sua temperatura atual' value={temperatura} onChange={e => Number(setTemperatura(e.target.value))} /> 
                    </label>

                    <div className="padding">
                        <button className="text b74c365" onClick={click}> Checar </button>
                    </div>

                    <div className="padding"> Sua situação é: <span className="text c74c365"> {msg} </span> </div>
                </div>
            </div>
        </section>
    )
}