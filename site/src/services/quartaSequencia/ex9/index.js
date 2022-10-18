export default function contar(inicio, fim) {
    let arr = [];
    for(let i = Number(inicio); i <= Number(fim); i++) {
        arr.push(i + ' ');
    }
    return arr;
}