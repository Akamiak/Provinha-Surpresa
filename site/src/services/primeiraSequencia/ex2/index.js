export default function verificarSigno(mes, dia) {
    if(mes === 'Setembro' && dia >= 23 || mes === 'Outubro' && dia <=23 ||
       mes === 'setembro' && dia >= 23 || mes === 'outubro' && dia <=23)
        return(true);
    else
        return(false);
}