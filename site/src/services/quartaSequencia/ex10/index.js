export default function linha(quantidade) {
    let qtd = Number(quantidade);
    let arr = [];
    for(let i = 0; i < qtd; i++) {
        arr.push('* ');
    }
    return arr;
}