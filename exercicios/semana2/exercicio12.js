//Faça uma estrutura de switch para dado o código da sua matéria desse semestre
//ela irá imprimir no console o nome completo da materia
let materia = "MAT00A"; 

switch (materia) {
    case "MAT00A":
        console.log("Calculo A");
        break;
    case "ELTA00":
        console.log("Circuitos e Eletronica"); 
        break; 
    case "LET00":
        console.log("Comunicação oral para fins academicos");
        break;
    default: 
        console.log("Essa materia nao existe"); 
}