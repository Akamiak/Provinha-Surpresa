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
                <div className="container border-857DB1 al-center">
                    <div className="borda b857db1 jc-center al-center text">
                        CONTAR ATÉ
                    </div>

                    <label className="c857db1 column padding text"> Início:
                        <input type='number' placeholder="informe o início" value={inicio} onChange={e => setInicio(e.target.value)} />
                    </label>

                    <label className="c857db1 column padding text"> Fim:
                        <input type='number' placeholder="informe o fim" value={fim} onChange={e => setFim(e.target.value)} />
                    </label>

                    <div className="padding">
                        <button className="text b857db1" onClick={click}> Contar </button>
                    </div>            

                    <div className="padding"> Contagem: <span className="c857db1 text"> {result} </span> </div>
                </div>
            </div>
        </section>
    )
}
