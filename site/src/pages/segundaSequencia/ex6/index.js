import { useState } from "react"

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
        <section>
            <div>
                AVALIE A SUA TEMPERATURA
            </div>

            <div>
                <label> Temperatura: </label>
                <input type='text' placeholder='informe sua temperatura atual' value={temperatura} onChange={e => Number(setTemperatura(e.target.value))} /> 
            </div>

            <div>
                <button onClick={checarTemperatura}> Checar </button>
            </div>

            <div> Sua situação é: {msg} </div>

        </section>
    )
}