// TABUADA

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Escolha um número: ", (numero) => {
    numero = Number(numero);

    console.log("\n#TABUADA#\n");

    for (let i = 1; i < 10; i++) {
    console.log(`${numero} + ${i} = ${i * numero}`);
    }
    rl.close()
});







