export default function calcularSalario(salarioBase, bonus, desconto) {
    const calc = (salarioBase - desconto) + ((bonus/100) * salarioBase);
    return calc;
}