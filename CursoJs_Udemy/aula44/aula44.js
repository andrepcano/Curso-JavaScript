// try {
//     console.log(naoExisto);
//     (naoExisto)
// } catch(err) {
//     console.log("naoExisto não Existe!");
// }

function soma(x, y) {
    if (typeof x !== "number" || typeof y !== "number") {
        throw new Error("x e y precisam ser numeros") // lança como um erro do javaScript
    }
    return x + y
}

try{
    console.log(soma(4, 7));
    console.log(soma("4", 7));
} catch(error) {
    console.log(error); // mostra apenas a mensagem sem o (new Error) na linha 10
}
