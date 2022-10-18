export default function calcularIngresso(qtdInteiras, qtdMeias, diaSemana, nacionalidade) {
    if(nacionalidade === true)
        return((qtdInteiras * 5) + (qtdMeias * 5));

    else if(diaSemana === 'quarta' ||
            diaSemana === 'quarta-feira')
        return((qtdInteiras * 14.25) + (qtdMeias * 14.25));

    else 
        return((qtdInteiras * 28.50) + (qtdMeias * 14.25))
}