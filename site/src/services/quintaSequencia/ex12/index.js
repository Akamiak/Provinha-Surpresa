export default function calcularCafe(estudantes, litros, mililitros) {
    let aluno = Number(estudantes);
    let l = Number(litros * 1000);
    let ml = Number(mililitros)
    let calc = aluno * ml;

    if(calc <= l) {
        return((l/1000));
    }
    else {
        return (Math.ceil(calc/1000));
    }

}
