//Percorra o vetor de notas que voce criou em 4.4.Arrays.js e calcule a média delas
//Após sair do for imprima sua média

let notas = [6.7, 7.9, 9.5, 9.7, 9.8, -1, 7.1, 10];
let materias = ["MAT00A", "ELTA00A", "LET014", "ECO101A", "ELTA10A", "ECOM10", "ECOM00", "ECOP11A"];
let soma = 0;

for (let i=0; i < notas.length; i++){
    soma += notas[i];
}

let media = soma / notas.length; 

console.log(media); 

//DESAFIO: copie também o vetor de matérias, utilize o for para percorrer os dois vetores
//e imprimir a matéria e a nota correspondente

for (let i=0; i < notas.length; i++){
        console.log("Voce tirou " + notas[i] + " na materia " + materias[i]);
}
