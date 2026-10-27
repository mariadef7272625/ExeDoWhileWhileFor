//Implemente um programa que inverta uma string fornecida pelo usuário utilizando um laço de repetição

var texto = "Digite uma string: "
var invertida = " ";

for (var i = texto.length - 1; i >= 0; i--) {
    invertida += texto [i];
}
    console.log(invertida);


