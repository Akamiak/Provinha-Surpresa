export default function verificarOrcamento(ganhos, gastos) {
    let gan = Number(ganhos);
    let gas = Number(gastos);

    if(gas > gan) 
        return('Orçamento comprometido! Hora de rever seus gastos!');
    else if(gas > ((81/100)*gan) && gas < gan)
        return('Cuidado, seu orçamento pode ficar comprometido!');
    else if(gas > ((51/100)*gan) && gas < ((80/100)*gan))
        return('Atenção, melhor conter seus gastos!');
    else if(gas > ((21/100)*gan) && gas < ((50/100)*gan))
        return('Muito bem, seus gastos não ultrapassaram metade dos ganhos!');
    else if(gas > (0*gan) && gas < ((20/100)*gan))
        return('Parabéns, está gerenciando bem seu orçamento!');
}