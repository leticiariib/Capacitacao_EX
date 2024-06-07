//Declare um array que contenha todas suas matérias do semestre
//e outro que contenha todas as notas que você tirou nelas.

//Transforme os dois vetores de Arrays.js em um objeto
//Cada matéria representará uma propriedade do objeto,
//com sua nota correspondente sendo o valor associado a essa propriedade.

let materias = ["MAT00A", "ELTA00A", "LET014", "ECO101A", "ELTA10A", "ECOM10", "ECOM00", "ECOP11A"];
let notas = [6.7, 7.9, 9.5, 9.7, 9.8, -1, 7.1, 10];

let NotasPorMateria = {}; 

for(let i= 0; i < materias.length; i++ ) {
    let materia = materias[i];
    let nota = notas[i]; 
    NotasPorMateria[materia] = nota;
}

console.log(NotasPorMateria);