//Imprima todos os números primos de 1 a 50 utilizando um laço de repetição (USANDO O DO WHILE, WHILE E FOR).
// 3. Usando while 

var i = 2;

while (i <= 50) {
    var divisor = 2;
    
    // O loop continua enquanto não achar um divisor exato
    while (divisor < i && i % divisor !== 0) {
        divisor++;
    }
    
    // Se o divisor chegou até o próprio número 'i', significa que nenhum outro número o dividiu
    if (divisor === i) {
        console.log(i);
    }
    
    i++;
}

