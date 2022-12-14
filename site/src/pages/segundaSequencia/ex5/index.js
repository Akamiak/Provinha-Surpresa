import { useState } from "react";
import { Link } from 'react-router-dom';
import '../../styles.scss'
import calcularParadas from "../../../services/segundaSequencia/ex5";

export default function ParadasAbastecimento() {
    const [tanque, setTanque] = useState();
    const [consumo, setConsumo] = useState();
    const [distancia, setDistancia] = useState();
    const [total, setTotal] = useState(0);

    function click() {
        const calc = calcularParadas(tanque, distancia, consumo);
        setTotal(Math.ceil(calc))
    }

    return(
        <section className="column wh100 jc-center al-center">
             <div>
                <Link to='/'> <img src="/images/voltar.png" /> </Link>
                <div className='container border-74c365 al-center'>
                    <div className="borda b74c365 jc-center al-center text">
                        PARADAS PARA ABASTECER
                    </div>

                    <label className='c74c365 column padding text'> Total do Tanque
                        <input type='text' placeholder='Informe a capacidade em litros' value={tanque} onChange={e => Number(setTanque(e.target.value))} />
                    </label>

                
                    <label className='c74c365 column padding text'> Total do Consumo
                        <input type='text' placeholder='Informe a consumo em litros' value={consumo} onChange={e => Number(setConsumo(e.target.value))} /> 
                    </label>

                
                    <label className='c74c365 column padding text'> Distancia
                        <input type='text' placeholder='Informe a distância em KM' value={distancia} onChange={e => Number(setDistancia(e.target.value))}/>
                    </label>
                    
                    <div className="padding">
                        <button className="text b74c365" onClick={click}> Calcular </button>
                    </div>

                    <div className="padding"> O total de paradas necessárias são: <span className="text c74c365"> {total} </span> </div>
                </div>
            </div>
        </section>
    )
}