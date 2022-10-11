import { useState } from "react";

export default function ParadasAbastecimento() {
    const [tanque, setTanque] = useState();
    const [consumo, setConsumo] = useState();
    const [distancia, setDistancia] = useState();
    const [total, setTotal] = useState(0);

    function calcularParadas() {
        let calc = distancia / (tanque * consumo);
        setTotal(Math.ceil(calc))
    }

    return(
        <section>
            <div>
                PARADAS PARA ABASTECER
            </div>

            <div>
                <label> Total do Tanque </label>
                <input type='text' placeholder='Informe a capacidade em litros' value={tanque} onChange={e => Number(setTanque(e.target.value))} />
            </div>

            
            <div>
                <label> Total do Consumo </label>
                <input type='text' placeholder='Informe a consumo em litros' value={consumo} onChange={e => Number(setConsumo(e.target.value))} />
            </div>

            
            <div>
                <label> Distancia </label>
                <input type='text' placeholder='Informe a distância em KM' value={distancia} onChange={e => Number(setDistancia(e.target.value))}/>
            </div>

            
            <div>
                <button onClick={calcularParadas}> Calcular </button>
            </div>

            <div> O total de paradas necessárias são: {total}</div>
        </section>
    )
}