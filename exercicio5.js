/*
Exercício de Destructuring em JavaScript

1. Dado o seguinte array:
const numbers = [1, 2, 3, 4, 5];

a) Utilize a sintaxe de Destructuring para atribuir os valores 1, 2 e 3 às variáveis a, b e c, respectivamente.

b) Utilize a sintaxe de Destructuring para atribuir os valores 4 e 5 a uma variavel d.

2. Dado o seguinte objeto:
const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};

a) Utilize a sintaxe de Destructuring para atribuir os valores 'John', 30 e 'New York' às variáveis name, age e city, respectivamente.

b) Utilize a sintaxe de Destructuring para atribuir o valor 'John' e o valor 30 à variável PersonResume.

*/

// 1) a)

let a, b, c;
[a, b, c] = [1, 2, 3]; 

console.log(a,b,c);

//1) b)

let d;
[...d] = [4, 5];

console.log(d);

//2) a) 

const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};

const { name, age, city } = person;

//2) b)

const PersonResume = { name, age }; 

