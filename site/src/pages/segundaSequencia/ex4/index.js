import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles.scss'

export default function SalarioLiquido() {
    const [salarioBase, setSalarioBase] = useState();
    const [bonus, setBonus] = useState();
    const [desconto, setDesconto] = useState();
    const [total, setTotal] = useState(0);

        function calcularSalario() {
            const calc = (salarioBase - desconto) + ((bonus/100) * salarioBase);
            setTotal(calc);
        }

    return(
        <section className="column wh100 jc-center al-center">
            <div>
                <Link to='/'> <img src="/images/voltar.png" /> </Link>
                <div className='container-verde al-center'>
                    <div className="borda b74c365 jc-center al-center text">
                        CALCULAR SALÁRIO LÍQUIDO
                    </div>

                    <div className="column padding text">
                        <label className='c74c365'> Salário Base </label>
                        <input type='text' placeholder='Informe o valor' value={salarioBase} onChange={e => Number(setSalarioBase(e.target.value))} />
                    </div>
                    
                    <div className="column padding text">
                        <label className='c74c365'> Bonus Percentual </label>
                        <input type='text' placeholder='Informe o valor' value={bonus} onChange={e => Number(setBonus(e.target.value))} />
                    </div>
                    
                    <div className="column padding text">
                        <label className='c74c365'> Desconto </label>
                        <input type='text' placeholder='Informe o valor' value={desconto} onChange={e => Number(setDesconto(e.target.value))} />
                    </div>

                    
                    <div className="padding">
                        <button className="text b74c365" onClick={calcularSalario}> Calcular </button>
                    </div>

                    <div className="padding"> O salário líquido é: R$ <span className="c74c365 text"> {total} </span> </div>
                </div>
            </div>
        </section>
    )   
}