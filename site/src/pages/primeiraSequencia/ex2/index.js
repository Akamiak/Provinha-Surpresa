import { useState } from "react";
import { StyledSigno } from "./styles";

export default function SignoPage() {
    const [mes, setMes] = useState('');
    const [dia, setDia] = useState();
    const [signo, setSigno] = useState(false);

    function verificarSigno() {
        if(mes === 'Setembro' && dia >= 23 || mes === 'Outubro' && dia <=23 ||
           mes === 'setembro' && dia >= 23 || mes === 'outubro' && dia <=23)
            setSigno(true);
        else
            setSigno(false);
    }

    return(
        <StyledSigno>
            <div>
                VERIFICAR SIGNO LIBRA 
            </div>

            <div>
                <label> Mês do Nascimento </label>
                <input type='text' placeholder="informe o mês" value={mes} onChange={e => setMes(e.target.value)} />
            </div>
            <div>
                <label> Dia do Nascimento </label>
                <input type='text' placeholder="informe o dia" value={dia} onChange={e => Number(setDia(e.target.value))} />
            </div>

            <div>
                <button onClick={verificarSigno}> Checar seu signo </button>
            </div>            

            <div>
                <p> Seu signo é libra? {signo ? 'Sim' : 'Não'} </p>
            </div>
        </StyledSigno>
    )
}