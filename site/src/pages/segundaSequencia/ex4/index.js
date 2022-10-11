import { useState } from 'react';

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
        <section>
            <div>
                CALCULAR SALÁRIO LÍQUIDO
            </div>

            <div>
                <label> Salário Base </label>
                <input type='text' placeholder='Informe o valor' value={salarioBase} onChange={e => Number(setSalarioBase(e.target.value))} />
            </div>
            
            <div>
                <label> Bonus Percentual </label>
                <input type='text' placeholder='Informe o valor' value={bonus} onChange={e => Number(setBonus(e.target.value))} />
            </div>
            
            <div>
                <label> Desconto </label>
                <input type='text' placeholder='Informe o valor' value={desconto} onChange={e => Number(setDesconto(e.target.value))} />
            </div>

            
            <div>
                <button onClick={calcularSalario}> Calcular </button>
            </div>

            <div> O salário líquido é: R${total}</div>
        </section>
    )   
}