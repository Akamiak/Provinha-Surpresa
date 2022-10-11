import { useState } from "react";
import { Link } from 'react-router-dom'
import '../../../commom.scss'
import '../../styles.scss'

export default function AcaiPage() {
        const [pAcai, setPAcai] = useState();
        const [mAcai, setMAcai] = useState();
        const [gAcai, setGAcai] = useState();
        const [desconto, setDesconto] = useState();
        const [total, setTotal] = useState(0);

    function calcularAcai() {
        const calc = ((pAcai * 13.50) + (mAcai * 15.00) + (gAcai * 17.50 )) * (desconto/100 -1);
        setTotal(Math.abs(calc));
    }

    return(
        <section className="column wh100 jc-center al-center">
            <div>
                <Link to='/'> <img src="/images/voltar.png" /> </Link>
                <div className="container-azul al-center">
                    <div className="borda b4d4dff text jc-center al-center">
                        LOJINHA DE AÇAÍ (vulgo Brunex)
                    </div>


                    <div className="column padding text">
                        <label className="c4d4dff"> Qtd. Açaí Pequeno </label>
                        <input type='text' placeholder="informe a quantidade desejada" value={pAcai} onChange={e => Number(setPAcai(e.target.value))} />
                    </div>
                    <div className="column padding text">
                        <label className="c4d4dff"> Qtd. Açaí Médio </label>
                        <input type='text' placeholder="informe a quantidade desejada" value={mAcai} onChange={e => Number(setMAcai(e.target.value))} />
                    </div>
                    <div className="column padding text">
                        <label className="c4d4dff"> Qtd. Açaí Grande </label>
                        <input type='text' placeholder="informe a quantidade desejada" value={gAcai} onChange={e => Number(setGAcai(e.target.value))}  />
                    </div>
                    <div className="column padding text ">
                        <label className="c4d4dff"> Percentual desconto </label>
                        <input type='text' placeholder="informe se há desconto" value={desconto} onChange={e => Number(setDesconto(e.target.value))}  />
                    </div>

                    <div className="padding">
                        <div>
                            <button className="text b4d4dff" onClick={calcularAcai}> Calcular </button>
                        </div>

                        <div> O valor é: R$ <span className="c4d4dff text"> {total} </span> </div>
                    </div>
                </div>
            </div>
        </section>
    )
}