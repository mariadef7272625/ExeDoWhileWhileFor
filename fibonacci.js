//Imprima os primeiros 10 numeros da sequencia de Fibonacci utilizando um laço de repetição.
//A sequencia de Fibonacci é uma sequencia numerica em que vada numero é a soma dos anteriores.
//Ela começa assim: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...
//A razão entre termos consecutivos se aproxima do numero aureo(~ 1,618)


var a = 0;
var b = 1;

for(var i = 0; i < 10; i++) {
    console.log(a); [a, b] = [b, a + b]
}
