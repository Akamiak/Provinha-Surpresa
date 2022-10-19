import { useState } from "react";
import { Link } from 'react-router-dom'
import '../../../commom.scss'
import '../../styles.scss'
import {printarRetanguloAsteristico, printarRetanguloCirculo, printarRetanguloQuadrado} from "../../../services/quartaSequencia/ex11";

export default function Retangulo() {
    const [base, setBase] = useState();
    const [altura, setAltura] = useState();
    const [result, setResult] = useState([]);
    const [asteristico, setAsteristico] = useState(false);
    const [circulo, setCirculo] = useState(false);
    const [quadrado, setQuadrado] = useState(false);
    // const [foto, setFoto] = useState(false);

    function click() {
        if (asteristico === true) {
            const resp = printarRetanguloAsteristico(base, altura);
            setResult(resp);
            setCirculo(false);
            setQuadrado(false);

        }

        else if (circulo === true) {
            const resp = printarRetanguloCirculo(base, altura);
            setResult(resp);
            setAsteristico(false);
            setQuadrado(false);

        }

        else if (quadrado === true) {
            const resp = printarRetanguloQuadrado(base, altura);
            setResult(resp);
            setAsteristico(false);
            setCirculo(false);
        }

        // else if (foto === true) {
        //     const resp = printarRetanguloFoto(base, altura);
        //     setResult(resp);
        // }
    }


    return(
        <section className="column wh100 jc-center al-center">
            <div>
                <Link to='/'> <img src="/images/voltar.png" alt="" /> </Link>
                <div className="container-azul al-center">
                    <div className="borda b4d4dff jc-center al-center text">
                        RETÂNGULO
                    </div>

                    <div className="column padding text">
                        <label className="c4d4dff"> Base: </label>
                        <input type='number' placeholder="informe a largura" value={base} onChange={e => setBase(e.target.value)} />
                    </div>

                    <div className="column padding text">
                        <label className="c4d4dff"> Altura: </label>
                        <input type='number' placeholder="informe a largura" value={altura} onChange={e => setAltura(e.target.value)} />
                    </div>

                    <div className="column padding text">
                        <label className="c4d4dff"> Formato: </label>
                        <div className="row text c242424">
                            <div className="row al-center">
                                <h4 className="padding"> Asterístico </h4>
                                <input type='checkbox' value={asteristico}  name='check' onChange={e => setAsteristico(e.target.checked)} />
                            </div>

                            <div className="row al-center">
                                <h4 className="padding "> Circulo </h4>
                                <input type='checkbox' value={circulo}  name='check' onChange={e => setCirculo(e.target.checked)} />
                            </div>

                            <div className="row al-center">
                                <h4 className="padding"> Quadrado </h4>
                                <input type='checkbox' value={quadrado}  name='check' onChange={e => setQuadrado(e.target.checked)} />
                            </div>
                            {/* <div className="row al-center">
                                <h4 className="padding"> Foto </h4>
                                <input type='checkbox' value={foto}  name='check' onChange={e => setFoto(e.target.checked)} />
                            </div> */}
                        </div>
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
