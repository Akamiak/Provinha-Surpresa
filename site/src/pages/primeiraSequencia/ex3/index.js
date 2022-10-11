import { useState } from "react";
import { Link } from 'react-router-dom'
import '../../../commom.scss'
import '../../styles.scss'

export default function SorveteriaPage() {
    const [gramas, setGramas] = useState();
    const [total, setTotal] = useState(0);

    function calcularGramas() {        
        if(gramas < 0)
            setTotal("Peso inválido")
        else if(gramas >= 1000) {
            setTotal(gramas * (3/100));
        }
        else
            setTotal(gramas * (3.50/100));
    }

    return(
        <section className="column wh100 jc-center al-center">
            <div>
                <Link to='/'> <img src="/images/voltar.png" /> </Link>
                <div className="container-azul al-center">
                    <div className="borda b4d4dff jc-center al-center text">
                        SORVETÃO DO BRUNÃO
                    </div>

                    <div className="column padding text">
                        <label className="c4d4dff"> QTD. Gramas </label>
                        <input type='text' placeholder="informe a quantidade de gramas" value={gramas} onChange={e => Number(setGramas(e.target.value))} />
                    </div>

                    <div className="padding">
                        <button className="text b4d4dff" onClick={calcularGramas}> Calcular </button>
                    </div>            

                    <div className="padding"> O valor total é:R$ <span className="c4d4dff text"> {total} </span> </div>
                </div>
            </div>
        </section>
    )
}
