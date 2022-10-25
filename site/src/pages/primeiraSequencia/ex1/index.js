import { useState } from "react";
import { Link } from 'react-router-dom'
import '../../../commom.scss'
import '../../styles.scss'
import calcularAcai from "../../../services/primeiraSequencia/ex1";

export default function AcaiPage() {
        const [pAcai, setPAcai] = useState();
        const [mAcai, setMAcai] = useState();
        const [gAcai, setGAcai] = useState();
        const [desconto, setDesconto] = useState();
        const [total, setTotal] = useState(0);

    function click() {
        const calc = calcularAcai(pAcai, mAcai, gAcai, desconto);
        setTotal(Math.abs(calc));
    }

    return(
        <section className="column wh100 jc-center al-center">
            <div>
                <Link to='/'> <img src="/images/voltar.png" /> </Link>
                <div className="container border-4d4dff al-center">
                    <div className="borda b4d4dff text jc-center al-center">
                        LOJINHA DE AÇAÍ (vulgo Brunex)
                    </div>

                    <label className="c4d4dff column padding text"> Qtd. Açaí Pequeno 
                        <input type='text' placeholder="informe a quantidade desejada" value={pAcai} onChange={e => Number(setPAcai(e.target.value))} />
                    </label>

                    <label className="c4d4dff column padding text"> Qtd. Açaí Médio 
                        <input type='text' placeholder="informe a quantidade desejada" value={mAcai} onChange={e => Number(setMAcai(e.target.value))} />
                    </label>

                    <label className="c4d4dff column padding text"> Qtd. Açaí Grande 
                        <input type='text' placeholder="informe a quantidade desejada" value={gAcai} onChange={e => Number(setGAcai(e.target.value))}  />
                    </label>

                    <label className="c4d4dff column padding text"> Percentual desconto 
                        <input type='text' placeholder="informe se há desconto" value={desconto} onChange={e => Number(setDesconto(e.target.value))}  />
                    </label>

                    <div className="padding">
                        <div>
                            <button className="text b4d4dff" onClick={click}> Calcular </button>
                        </div>

                        <div> O valor é: R$ <span className="c4d4dff text"> {total} </span> </div>
                    </div>
                </div>
            </div>
        </section>
    )
}