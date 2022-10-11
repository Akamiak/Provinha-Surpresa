import { useState } from "react";
import { Link } from 'react-router-dom';
import '../../styles.scss'

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
        <section className="column wh100 jc-center al-center">
             <div>
                <Link to='/'> <img src="/images/voltar.png" /> </Link>
                <div className='container-verde al-center'>
                    <div className="borda b74c365 jc-center al-center text">
                        PARADAS PARA ABASTECER
                    </div>

                    <div className="column padding text">
                        <label className='c74c365'> Total do Tanque </label>
                        <input type='text' placeholder='Informe a capacidade em litros' value={tanque} onChange={e => Number(setTanque(e.target.value))} />
                    </div>

                    
                    <div className="column padding text">
                        <label className='c74c365'> Total do Consumo </label>
                        <input type='text' placeholder='Informe a consumo em litros' value={consumo} onChange={e => Number(setConsumo(e.target.value))} />
                    </div>

                    
                    <div className="column padding text">
                        <label className='c74c365'> Distancia </label>
                        <input type='text' placeholder='Informe a distância em KM' value={distancia} onChange={e => Number(setDistancia(e.target.value))}/>
                    </div>

                    
                    <div className="padding">
                        <button className="text b74c365" onClick={calcularParadas}> Calcular </button>
                    </div>

                    <div className="padding"> O total de paradas necessárias são: <span className="text c74c365"> {total} </span> </div>
                </div>
            </div>
        </section>
    )
}