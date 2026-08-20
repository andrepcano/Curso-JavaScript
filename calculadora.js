// Calculadora

const soma = (...n) => {
    let res = 0

    for (let num of n) {
        res += num
    }

    return res
}

// console.log(soma(2, 6, 7));

const subtracao = (...n) => {
    let res = n[0]

    for(let i = 1; i < n.length; i++) {
        res -= n[i]
    }

    return res
}

// console.log(subtracao(2, 5, 8));


const multiplicacao = (...n) => {
    let res = 1

    for(let num of n) {
        res *= num 
    }

    return res
}

// console.log(multiplicacao(3 , 6));


const divisao = (...n) => {
    let res = n[0]

    for(let i = 1; i < n.length; i++) {
        res /= n[i]
    }

    return res
}

// console.log(divisao(10, 2));

// USAR (FOR OF) QUANDO SO QUER OS VALORES 
// USAR (FOR LET I) QUANDO QUER MANIPULAR OS INDICES

// while (true) {
//     const escolha = 
// }