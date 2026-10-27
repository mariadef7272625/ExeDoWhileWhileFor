//Imprima todos os numeros perfeitos de 1 a 1000 utilizando um laço de repetição.
//Um numero perfeito é um numero que é igual à soma de todos os seus divisores positivos, exceto ele mesmo.
//Os divisores de 6 (sem contar o próprio 6) são 1, 2, 3 = 6

for (var i = 1; i <= 1000; i++) {
    var soma = 0;
    for (var divisor = 1; divisor < i; divisor++){
        if (i % divisor === 0) {
            soma += divisor;
        }
    }
    if (soma === i) {
        console.log (i);
    }
}

