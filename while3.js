//Imprima todos os números primos de 1 a 50 utilizando um laço de repetição (USANDO O DO WHILE, WHILE E FOR).
// 3. Usando while 

var numero = 2; 

while (numero <= 50) { 

var primo = true; var divisor = 2; while (divisor < numero) { 

if (numero % divisor === 0) { 

primo = false; break ; 

} 

Divisor ++; 

} 

If (primo); {
    console.log (numero);

} 

Numero++;  
} 
