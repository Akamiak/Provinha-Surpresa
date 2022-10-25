import { useState } from "react";
import { Link } from 'react-router-dom'
import '../../../commom.scss'
import '../../styles.scss'
import calcularCafe from "../../../services/quintaSequencia/ex12";

export default function Alunos() {
    const [aluno, setAluno] = useState('');
    const [alunoListagem, setAlunoListagem] = useState([]);
    const [notas, setNotas] = useState([]);
    const [media, setMedia] = useState(0);
    const [maior, setMaior] = useState(0);
    const [menor, setMenor] = useState(0);

    return(
        <section className="column wh100 jc-center al-center">
            <div>
                <Link to='/'> <img src="/images/voltar.png" /> </Link>
                <div className="container border-F4A23E al-center">
                    <div className="borda bF4A23E jc-center al-center text">
                        Alunos
                    </div>

                    <label className="column padding text cF4A23E"> QTD. Alunos:
                        <div>
                            <input type='number' placeholder="informe a quantidade de alunos matriculados" />
                            <button className="bF4A23E"> Adicionar </button>
                        </div>
                    </label>

                    <div className="padding">
                        <button className="text bF4A23E"> Calcular </button>
                    </div>            

                    {/* <div className="padding"> Será necessário: <span className="cF9E76D text"> { litros </span> </div> */}
                </div>
            </div>
        </section>
    )
}
