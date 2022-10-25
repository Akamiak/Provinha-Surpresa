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
                <div className="container border-F9E76D al-center">
                    <div className="borda bF9E76D jc-center al-center text">
                        CAFÉ
                    </div>

                    <label className="column padding text cF9E76D"> QTD. Alunos:
                        <input type='number' placeholder="informe a quantidade de alunos matriculados" value={estudantes} onChange={e => setEstudantes(e.target.value)} />
                    </label>

                    <label className="column padding text cF9E76D"> Litros:
                        <input type='number' placeholder="informe a quantidade de litros" value={litros} onChange={e => setLitros(e.target.value)} />
                    </label>

                    <label className="column padding text cF9E76D"> ML. Alunos:
                        <input type='number' placeholder="informe a quantidade de mililitros" value={mililitros} onChange={e => setMililitros(e.target.value)} />
                    </label>

                    <div className="padding">
                        <button className="text bF9E76D" onClick={click}> Calcular </button>
                    </div>            

                    <div className="padding"> Será necessário: <span className="cF9E76D text"> {result} litros </span> </div>
                </div>
            </div>
        </section>
    )
}
