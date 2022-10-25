import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles.scss'
import calcularSalario from '../../../services/segundaSequencia/ex4';

export default function SalarioLiquido() {
    const [salarioBase, setSalarioBase] = useState();
    const [bonus, setBonus] = useState();
    const [desconto, setDesconto] = useState();
    const [total, setTotal] = useState(0);

    function click() {
        const calc = calcularSalario(salarioBase, bonus, desconto);
        setTotal(calc);
    }

    return(
        <section className="column wh100 jc-center al-center">
            <div>
                <Link to='/'> <img src="/images/voltar.png" /> </Link>
                <div className='container border-74c365 al-center'>
                    <div className="borda b74c365 jc-center al-center text">
                        CALCULAR SALÁRIO LÍQUIDO
                    </div>

                    <label className='c74c365 column padding text'> Salário Base 
                        <input type='text' placeholder='Informe o valor' value={salarioBase} onChange={e => Number(setSalarioBase(e.target.value))} />
                    </label>
                    
                    <label className='c74c365 column padding text'> Bonus Percentual 
                        <input type='text' placeholder='Informe o valor' value={bonus} onChange={e => Number(setBonus(e.target.value))} />
                    </label>
                    
                    <label className='c74c365 column padding text'> Desconto 
                        <input type='text' placeholder='Informe o valor' value={desconto} onChange={e => Number(setDesconto(e.target.value))} />
                    </label>

                    <div className="padding">
                        <button className="text b74c365" onClick={click}> Calcular </button>
                    </div>

                    <div className="padding"> O salário líquido é: R$ <span className="c74c365 text"> {total} </span> </div>
                </div>
            </div>
        </section>
    )   
}