import { useState } from "react";
import { Link } from 'react-router-dom'
import '../../../commom.scss'
import '../../styles.scss'
import verificarSigno from "../../../services/primeiraSequencia/ex2";

export default function SignoPage() {
    const [mes, setMes] = useState('');
    const [dia, setDia] = useState();
    const [signo, setSigno] = useState(false);

    function click() {
        const resp = verificarSigno(mes, dia);
        setSigno(resp);
    }

    return(
        <section className="column wh100 jc-center al-center">
            <div>
                <Link to='/'> <img src="/images/voltar.png" /> </Link>
                <div className="container-azul al-center jc-between">
                    <div className="borda b4d4dff jc-center al-center text">
                        VERIFICAR SIGNO LIBRA 
                    </div>

                    <div className="column padding text">
                        <label className="c4d4dff"> Mês do Nascimento </label>
                        <input type='text' placeholder="informe o mês" value={mes} onChange={e => setMes(e.target.value)} />
                    </div>
                    <div className="column padding text">
                        <label className="c4d4dff"> Dia do Nascimento </label>
                        <input type='text' placeholder="informe o dia" value={dia} onChange={e => Number(setDia(e.target.value))} />
                    </div>

                    <div className="padding">
                        <button className="text b4d4dff" onClick={click}> Checar seu signo </button>
                    </div>            

                    <div className="padding"> Seu signo é libra? <span className="c4d4dff text"> {signo ? 'Sim' : 'Não'} </span> </div>
                </div>
            </div>
        </section>
    )
}