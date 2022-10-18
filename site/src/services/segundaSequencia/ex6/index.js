export default function checarTemperatura(temperatura) {
    if(temperatura < 36.0)
        return('Hipotermia')
    else if(temperatura < 37.6)
        return('Normal')
    else if(temperatura < 39.6)
        return('Febre')
    else if(temperatura < 41.0)
        return('Febre alta')
    else if(temperatura >= 41)
        return('Hipertermia')
}