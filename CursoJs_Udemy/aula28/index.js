// const tresHoras = 60 * 60 * 3 * 1000;
// const date = new Date(0 + tresHoras);
//const data = new Date(2019, 3, 20, 15, 14, 27); // colocando o dia 20, o mês 3 (abril, pois começa do 0) e o ano 2019, além de horas, minutos e segundos
// const data = new Date('2019-04-20 20:20:59'); // outra forma de criar a data, usando uma string
// const data = new Date('2019-04-20T20:20:59'); // outra forma de criar a data, usando uma string no formato ISO 8601
// console.log(data.toString());
// console.log('Dia', data.getDate());
// console.log('Mês', data.getMonth()); // Mês começa do 0, então é necessário somar 1 para mostrar o mês correto
// console.log('Ano', data.getFullYear());
// console.log('Hora', data.getHours());
// console.log('Minutos', data.getMinutes());
// console.log('Segundos', data.getSeconds());
// console.log('Milissegundos', data.getMilliseconds());
// console.log('Dia da semana', data.getDay()); // 0 - Domingo, 1 - Segunda, 2 - Terça, 3 - Quarta, 4 - Quinta, 5 - Sexta, 6 - Sábado


function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1); // Mês começa do 0, então é necessário somar 1 para mostrar o mês correto
    const ano = data.getFullYear();
    const hora = zeroAEsquerda(data.getHours());
    const minutos = zeroAEsquerda(data.getMinutes());
    const segundos = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${minutos}:${segundos}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);