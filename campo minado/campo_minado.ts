class Square {
    row: number;
    column: number;
    state: string;
    hasMine: boolean;
    nearMines: number;

    constructor(row: number, column: number) {
        this.row = row;
        this.column = column;
        this.state = "closed"; // Pode ser: closed, opened, flagged
        this.hasMine = false;
        this.nearMines = 0; // Numero de minas em volta
    }
}

function criarMatriz(linhas: number, colunas: number): Square[][] {
    let matriz: Square[][] = [];
    for (let i = 0; i < linhas; i++) {
        let linha: Square[] = [];
        for (let j = 0; j < colunas; j++) {
            linha.push(new Square(i, j));
        }
        matriz.push(linha);
    }
    return matriz;
}

function sortearMinas(matriz: Square[][], quantidadeDeMinas: number): void {
    let linhas = matriz.length;
    let colunas = matriz[0].length;
    let minasSorteadas = 0;

    while (minasSorteadas < quantidadeDeMinas) {
        let linha = Math.floor(Math.random() * linhas);
        let coluna = Math.floor(Math.random() * colunas);
        
        if (!matriz[linha][coluna].hasMine) {
            matriz[linha][coluna].hasMine = true;
            minasSorteadas++;
        }
    }
}

function contarBombasAoRedor(matriz: Square[][], linha: number, coluna: number): void {
    let linhas = matriz.length;
    let colunas = matriz[0].length;
    let bombasAoRedor = 0;

    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            let novaLinha = linha + i;
            let novaColuna = coluna + j;

            if (novaLinha >= 0 && novaLinha < linhas && novaColuna >= 0 && novaColuna < colunas) {
                if (matriz[novaLinha][novaColuna].hasMine) {
                    bombasAoRedor++;
                }
            }
        }
    }

    matriz[linha][coluna].nearMines = bombasAoRedor;
}

function contarTodasBombas(matriz: Square[][]): void {
    let linhas = matriz.length;
    let colunas = matriz[0].length;

    for (let i = 0; i < linhas; i++) {
        for (let j = 0; j < colunas; j++) {
            contarBombasAoRedor(matriz, i, j);
        }
    }
}

function imprimirMatriz(matriz: Square[][]): void {
    let linhas = matriz.length;
    let colunas = matriz[0].length;

    for (let i = 0; i < linhas; i++) {
        let linha = "";
        for (let j = 0; j < colunas; j++) {
            if (matriz[i][j].hasMine) {
                linha += "[*] ";
            } else {
                linha += `[${matriz[i][j].nearMines}] `;
            }
        }
        console.log(linha);
    }
}

// Testando todas as funcoes
const campoMinado: Square[][] = criarMatriz(5, 5);
const gabaritoCampoMinado: Square[][] = JSON.parse(JSON.stringify(campoMinado)); // Deep copy

sortearMinas(gabaritoCampoMinado, 5);
contarTodasBombas(gabaritoCampoMinado);

console.log("Campo Minado (inicial):");
imprimirMatriz(campoMinado);

console.log("Gabarito Campo Minado:");
imprimirMatriz(gabaritoCampoMinado);
