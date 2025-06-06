// Tipos de váriáveis

var a = 'a' // De escopo global
let b = 'b' // alterar o valor dessa variável ao longo do código
const c = 'c' // Constante = imutavel e o valor dela vai ser sempre esse valor.

/* Tipos primitivos do Typescript

os tipos primitivos abaixo tem 3 tipos que são os de 

- String = caractere = letra
- Number = inteiro = numero
- Booleam = boleano = verdadeiro ou falso

Ao declarar uma váriável é interessante a gente declarar o seu tipo para 
aumentar a segurança do qual tipo essa variável vai aceitar e até mesmo defirnir o tipo
delas por isso o uso do typescript.

O que é interessante citar também é a versatilidade, que quando usada da maneira correta
faz sentido usar. 

também podemos verificar o uso do tipo any que é para aceitar qualquer tipo primitivo.

*/

let saudacao: string = "Hello World" // Tipo primitivo de string
let numero: number = 100 // inteiro
let boleano: boolean = true // boleano

let multi: string | number = 2 // multi uso de tipos ao declarar o valor de uma váriavel
multi = 'Rodrigo'