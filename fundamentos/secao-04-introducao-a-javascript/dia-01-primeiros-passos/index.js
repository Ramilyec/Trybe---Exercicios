// Faça cinco programas, um para cada operação aritmética básica. 
// Seu programa deve ter duas constantes, a e b, definidas no começo 
// com os valores que serão operados. 

const a = 20;
const b = 34;

console.log('Adição:' + (a + b));
console.log('Subtração:' + (a - b));
console.log('Multiplicação:' + (a*b));
console.log('Divisão:' + (a / b));
console.log('Módulo:' + (a % b));

// Utilize if/else para fazer um programa que retorne o maior de dois números. Defina, no começo do programa,
// duas constantes com os valores que serão comparados.

const number1 = 87
const number2 = 58

if (number1>number2) {
console.log('O maior numero é:', number1);
    
} else {
console.log('O maior número é:' , number2);
}

// Utilize if/else para fazer um programa que retorne o maior de três números. Defina, no começo do programa, 
// três constantes com os valores que serão comparados.

const element1 = 18
const element2 = 39
const element3 = 9

if (element1 > element2 && element1 > element3) {
    console.log('O maior número é:',element1);
}
if (element2 > element1 && element2 > element3) {
    console.log('O maior número é:', element2);  

} else  {
    console.log('O maior número é:', element3);
    
}

// Utilize if/else para fazer um programa que, dado um valor recebido como parâmetro, retorne “positive” 
// se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne 
// “zero”.

let param1 = 80
let param2 = 22

if (param1 - param2 >= 70) {
  console.log('Positive');
}   
if (param1 - param2 <=70){
    console.log('Negative');
}else {
    console.log("Zero");  
}

// // 🚀 Utilize if/else para fazer um programa que defina três constantes com os valores dos 
// três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo 
// e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.Para 
// os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.Um ângulo será considerado 
// inválido se não tiver um valor positivo.

const angle1 = 100;
const angle2 = 70;
const angle3 = 30;

let sumAngle  = angle1 + angle2 + angle3

let allAnglesPositives = angle1 > 0 && angle2 > 0 && angle3 > 0 ;

if (allAnglesPositives) {
    if (sumAngle === 180) {
        console.log(true);
    } else { 
        console.log(false);
    } 
}else{
    console.log('inavlid');
}

// Utilize switch/case para fazer um programa que receba o nome de uma peça de xadrez e retorne os movimentos 
// que ela faz.Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas 
// quanto com letras minúsculas, sem aumentar a quantidade de condicionais.Como dica, você pode pesquisar uma 
// função que faz uma string ficar com todas as letras minúsculas (lower case). Se a peça passada for inválida, 
// o programa deve retornar uma mensagem de erro.Exemplo: bishop (bispo) -> diagonals (diagonais)