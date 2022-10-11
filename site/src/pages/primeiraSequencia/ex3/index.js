import { useState } from "react";
import { StyledSorveteria } from "./styles";

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
        <StyledSorveteria>
                <div>
                    SORVETÃO DO BRUNÃO
                </div>

                <div>
                    <label> QTD. Gramas </label>
                    <input type='text' placeholder="informe a quantidade de gramas" value={gramas} onChange={e => Number(setGramas(e.target.value))} />
                </div>

                <div>
                    <button onClick={calcularGramas}> Calcular </button>
                </div>            

                <div>
                    <p> O valor total é:R${total} </p>
                </div>
        </StyledSorveteria>
    )
}
