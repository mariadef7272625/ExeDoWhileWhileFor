//Imprima todos os números primos de 1 a 50 utilizando um laço de repetição (USANDO O DO WHILE, WHILE E FOR).
//3. Usando do while 
var numero = 2; 

do { 

var primo = true; var divisor = 2; 

do { 

if (divisor < numero && numero % divisor === 0) { 

primo = false; break;  

} 

divisor++;  

}

while (divisor < numero); 

if (primo) {  

console.log(numero);  
}

numero++;  

} 

while (numero <= 50); 

