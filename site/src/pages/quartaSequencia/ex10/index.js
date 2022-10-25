import { useState } from "react";
import { Link } from 'react-router-dom'
import '../../../commom.scss'
import '../../styles.scss'
import linha from "../../../services/quartaSequencia/ex10";

export default function Linha() {
    const[quantidade, setQuantidade] = useState();
    const[result, setResult]= useState([]);

    function click() {
        const resp = linha(quantidade);
        setResult(resp);
    }

    return(
        <section className="column wh100 jc-center al-center">
            <div>
                <Link to='/'> <img src="/images/voltar.png" /> </Link>
                <div className="container border-857DB1 al-center">
                    <div className="borda b857db1 jc-center al-center text">
                        LINHA
                    </div>

                    <label className="c857db1 column padding text"> QTD. Caracteres:
                        <input type='number' placeholder="informe a quantidade desejada" value={quantidade} onChange={e => setQuantidade(e.target.value)} />
                    </label>

                    <div className="padding">
                        <button className="text b857db1" onClick={click}> Contar </button>
                    </div>            

                    <div className="padding"> Visualizar: <span className="c857db1 text"> {result} </span> </div>
                </div>
            </div>
        </section>
    )
}
