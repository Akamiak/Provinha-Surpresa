export default function calcularAcai(pAcai, mAcai, gAcai, desconto) {
    const calc = ((pAcai * 13.50) + (mAcai * 15.00) + (gAcai * 17.50 )) * (desconto/100 -1);
    return calc;
}