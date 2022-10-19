function printarRetanguloAsteristico(base, altura) {
    let bas = Number(base);
    let alt = Number(altura);
    let arr = [];

    for(let cont = 0; cont < alt; cont++) {
        for(let i = 1; i < bas; i++) {
            arr.push('* ' );
        }
        arr.push('* ');
    }

    return arr;
}

function printarRetanguloCirculo(base, altura) {
    let bas = Number(base);
    let alt = Number(altura);
    let arr = [];

    for(let cont = 0; cont < alt; cont++) {
        for(let i = 1; i < bas; i++) {
            arr.push('° ' );
        }
        arr.push('° ');
    }

    return arr;
}

function printarRetanguloQuadrado(base, altura) {
    let bas = Number(base);
    let alt = Number(altura);
    let arr = [];

    for(let cont = 0; cont < alt; cont++) {
        for(let i = 1; i < bas; i++) {
            arr.push('■ ' );
        }
        arr.push('■ ');
    }

    return arr;
}

// function printarRetanguloFoto(base, altura) {
//     let bas = Number(base);
//     let alt = Number(altura);
//     let arr = [];
//     var img = document.createElement("img");

//     for(let cont = 0; cont < alt; cont++) {
//         for(let i = 1; i < bas; i++) {
//             arr.push(img.setAttribute("public","images/david.png"));
//         }
//         arr.push(img.setAttribute("public","images/david.png"));
//     }

//     return arr;
// }


export  { printarRetanguloAsteristico, printarRetanguloQuadrado, printarRetanguloCirculo };