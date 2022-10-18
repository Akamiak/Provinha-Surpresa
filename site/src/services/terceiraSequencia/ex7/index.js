export default function verificarOrcamento(gastos, ganhos) {
    if(gastos > ganhos) 
        return('Orçamento comprometido! Hora de rever seus gastos!');
    else if(gastos > ((81/100)*ganhos) && gastos < ganhos)
        return('Cuidado, seu orçamento pode ficar comprometido!');
    else if(gastos > ((51/100)*ganhos) && gastos < ((80/100)*ganhos))
        return('Atenção, melhor conter seus gastos!');
    else if(gastos > ((21/100)*ganhos) && gastos < ((50/100)*ganhos))
        return('Muito bem, seus gastos não ultrapassaram metade dos ganhos!');
    else if(gastos > (0*ganhos) && gastos < ((20/100)*ganhos))
        return('Parabéns, está gerenciando bem seu orçamento!');
}