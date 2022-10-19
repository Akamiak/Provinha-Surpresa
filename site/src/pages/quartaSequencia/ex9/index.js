import { useState } from "react";
import { Link } from 'react-router-dom'
import '../../../commom.scss'
import '../../styles.scss'
import contar from "../../../services/quartaSequencia/ex9";

export default function Contagem() {
    const [inicio, setInicio] = useState();
    const [fim, setFim] = useState();
    const [result, setResult] = useState([]);

    function click() {
        const resp = contar(inicio, fim);
        setResult(resp);
    }

    return(
        <section className="column wh100 jc-center al-center">
            <div>
                <Link to='/'> <img src="/images/voltar.png" /> </Link>
                <div className="container-azul al-center">
                    <div className="borda b4d4dff jc-center al-center text">
                        CONTAR ATÉ
                    </div>

                    <div className="column padding text">
                        <label className="c4d4dff"> Início: </label>
                        <input type='number' placeholder="informe o início" value={inicio} onChange={e => setInicio(e.target.value)} />
                    </div>

                    <div className="column padding text">
                        <label className="c4d4dff"> Fim: </label>
                        <input type='number' placeholder="informe o fim" value={fim} onChange={e => setFim(e.target.value)} />
                    </div>

                    <div className="padding">
                        <button className="text b4d4dff" onClick={click}> Contar </button>
                    </div>            

                    <div className="padding"> Contagem: <span className="c4d4dff text"> {result} </span> </div>
                </div>
            </div>
        </section>
    )
}
