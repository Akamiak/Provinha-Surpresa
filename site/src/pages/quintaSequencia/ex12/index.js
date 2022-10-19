import { useState } from "react";
import { Link } from 'react-router-dom'
import '../../../commom.scss'
import '../../styles.scss'
import calcularCafe from "../../../services/quintaSequencia/ex12";

export default function Cafe() {
    const [estudantes, setEstudantes] = useState();
    const [litros, setLitros] = useState();
    const [mililitros, setMililitros] = useState();
    const [result, setResult] = useState(0);

    function click() {
        const calc = calcularCafe(estudantes, litros, mililitros);
        setResult(calc);
    }

    return(
        <section className="column wh100 jc-center al-center">
            <div>
                <Link to='/'> <img src="/images/voltar.png" /> </Link>
                <div className="container-azul al-center">
                    <div className="borda b4d4dff jc-center al-center text">
                        CAFÉ
                    </div>

                    <div className="column padding text">
                        <label className="c4d4dff"> QTD. Alunos: </label>
                        <input type='number' placeholder="informe a quantidade de alunos matriculados" value={estudantes} onChange={e => setEstudantes(e.target.value)} />
                    </div>

                    <div className="column padding text">
                        <label className="c4d4dff"> Litros: </label>
                        <input type='number' placeholder="informe a quantidade de litros" value={litros} onChange={e => setLitros(e.target.value)} />
                    </div>

                    <div className="column padding text">
                        <label className="c4d4dff"> ML. Alunos: </label>
                        <input type='number' placeholder="informe a quantidade de mililitros" value={mililitros} onChange={e => setMililitros(e.target.value)} />
                    </div>

                    <div className="padding">
                        <button className="text b4d4dff" onClick={click}> Calcular </button>
                    </div>            

                    <div className="padding"> Será necessário: <span className="c4d4dff text"> {result} litros </span> </div>
                </div>
            </div>
        </section>
    )
}
