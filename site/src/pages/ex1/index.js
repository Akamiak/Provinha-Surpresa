import { useState } from "react";
import { StyledAcai } from "./styles";

export default function AcaiPage() {
        const [pAcai, setPAcai] = useState(0);
        const [mAcai, setMAcai] = useState(0);
        const [gAcai, setGAcai] = useState(0);
        const [desconto, setDesconto] = useState(0);
        const [total, setTotal] = useState(0);

    function calcularAcai() {
        const calc = ((pAcai * 13.50) + (mAcai * 15.00) + (gAcai * 17.50 )) * (desconto/100 -1);
        setTotal(Math.abs(calc));
    }

    return(
        <StyledAcai>
            <div>
                LOJINHA DE AÇAÍ (vulgo Brunex)
            </div>


            <div>
                <label> Qtd. Açaí Pequeno </label>
                <input type='text' placeholder="informe a quantidade desejada" value={pAcai} onChange={e => Number(setPAcai(e.target.value))} />
            </div>
            <div>
                <label> Qtd. Açaí Médio </label>
                <input type='text' placeholder="informe a quantidade desejada" value={mAcai} onChange={e => Number(setMAcai(e.target.value))} />
            </div>
            <div>
                <label> Qtd. Açaí Grande </label>
                <input type='text' placeholder="informe a quantidade desejada" value={gAcai} onChange={e => Number(setGAcai(e.target.value))}  />
            </div>
            <div>
                <label> Percentual desconto </label>
                <input type='text' placeholder="informe se há desconto" value={desconto} onChange={e => Number(setDesconto(e.target.value))}  />
            </div>

            <div>
                <button onClick={calcularAcai}> Calcular </button>
            </div>

            <div>
                <p> O valor é: R${total} </p>
            </div>
        </StyledAcai>
    )
}