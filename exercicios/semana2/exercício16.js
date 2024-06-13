//Copie o vetor de matérias no 4.4.Arrays.jsque você criou e
//percorra ele imprimindo cada matéria

let materias = ["MAT00A", "ELTA00A", "LET014", "ECO101A", "ELTA10A", "ECOM10", "ECOM00", "ECOP11A"];

for(let i in materias){
    console.log(i, materias[i]);
}

//DESAFIO:Caso tenha feito o desafio de objetos, percorra ele imprimindo matéria e nota

let notas = [6.7, 7.9, 9.5, 9.7, 9.8, -1, 7.1, 10];

for(let j in materias){
    console.log(notas[j] + " em " + materias[j]);
}