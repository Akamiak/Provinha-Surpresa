export default function calcularGramas(gramas) {        
    if(Number(gramas) < 0)
        return("Peso inválido")
    else if(Number(gramas) >= 1000) {
        return((gramas * (3/100)).toFixed(2));
    }
    else
        return((gramas * (3.50/100)).toFixed(2));
}   