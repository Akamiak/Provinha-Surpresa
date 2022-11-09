const readline = require('prompt-sync')();

function sorteio() {
    let nRandom = parseInt(Math.random() * 1001);
    let j = 0;

    for(let tentativa = 1; tentativa <= 10; tentativa++) {
        j++    
        console.log(`Alternativa ${j}`)
        let resposta = Number(readline());

        if(tentativa == 10 && resposta != nRandom) {
            console.log(`Perdeu HaHa!!! A resposta era ${nRandom}`);
        }
        
        else if(resposta > nRandom)
            console.log('Menor' + '\n');

        else if(resposta == nRandom) {
            console.log('Acertou!!' + '\n');
            break;
        }

        else if(resposta < nRandom) 
            console.log('Maior' + '\n'); 
    }
}


function Main() {
    try {
        console.log('---- SORTEIO ----');
        console.log('Chute um número:');
        sorteio();
    }
    catch(err) {
        console.log(err.massage);
    }
}

Main();