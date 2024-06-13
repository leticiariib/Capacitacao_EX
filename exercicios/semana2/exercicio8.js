//a) Escreva um programa que verifica se um número digitado pelo usuário é positivo e par.
//Se o número atender a essas duas condições, exiba a mensagem 'O número é positivo e par', caso contrário, exiba a mensagem 'O número não é positivo e par'.


//b) Agora, teste se ele é positivo ou par, mas não ambos. Se o número atender a uma das condições, exiba a mensagem 'O número é positivo ou par', caso contrário, exiba a mensagem 'O número não é positivo ou par'.


//c) Por fim, teste se as variáveis do da letra a e b são iguais. Se forem, exiba a mensagem 'Os números são iguais', caso contrário, exiba a mensagem 'Os números são diferentes'.

let numero = parseInt(prompt("Digite um numero:"));

if (numero > 0 && numero % 2 === 0) {
    console.log("O numero e positivo e par");
} else {
    console.log("O numero nao e positivo e par");
}

if ((numero > 0 && numero % 2 === 0) || (numero < 0 && numero % 2 !== 0)) {
    console.log("O numero e positivo ou par");
} else {
    console.log("O numero nao e positivo ou par");
}

let numeroDigitado = numero;
if (numeroDigitado === numero) {
    console.log("Os numeros sao iguais");
} else {
    console.log("Os numeros sao diferentes");
}
