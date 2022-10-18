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
                <div className="container-azul al-center">
                    <div className="borda b4d4dff jc-center al-center text">
                        LINHA
                    </div>

                    <div className="column padding text">
                        <label className="c4d4dff"> QTD. Caracteres: </label>
                        <input type='number' placeholder="informe a quantidade desejada" value={quantidade} onChange={e => setQuantidade(e.target.value)} />
                    </div>

                    <div className="padding">
                        <button className="text b4d4dff" onClick={click}> Contar </button>
                    </div>            

                    <div className="padding"> Visualizar: <span className="c4d4dff text"> {result} </span> </div>
                </div>
            </div>
        </section>
    )
}
