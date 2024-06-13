//Crie um objeto pessoa com as propriedades nome, idade e altura. Crie duas variáveis Pessoa1 e Pessoa2, e atribua valores diferentes para cada uma das propriedades.
//Compare as variáveis Pessoa1 e Pessoa2 com os operadores relacionais e mostre no console o resultado de cada comparação. 

const pessoa = {
    nome: "Leticia",
    idade: 19,
    altura: 1.67,
};

const Pessoa1 = {
    nome: "Luana",
    idade: 19,
    altura: 1.65,
};

const Pessoa2 = {
    nome: "Diogo",
    idade: 19,
    altura: 1.72,
};

if (Pessoa1.idade === Pessoa2.idade) {
    console.log("Eles tem a mesma idade!");
} else {
    console.log("As idades são diferentes.");
}


if (Pessoa1.nome === Pessoa2.nome) {
    console.log("Sao xaras!");
} else {
    console.log("Possuem nomes diferentes.");
}

if (Pessoa1.altura === Pessoa2.altura) {
    console.log("Ambos tem a mesma altura!");
} else {
    console.log("eles tem alturas diferentes!");
}
