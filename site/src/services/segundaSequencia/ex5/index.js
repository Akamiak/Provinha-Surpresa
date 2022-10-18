export default function calcularParadas(tanque, distancia, consumo) {
    let calc = distancia / (tanque * consumo);
    return calc;
}