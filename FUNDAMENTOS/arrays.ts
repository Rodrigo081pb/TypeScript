// Arrays de números e strings com tipos primitivos
const numeros: number[] = [1, 2, 3];
const textos: string[] = ['A', 'B', 'C', 'D'];

// Imprimindo o primeiro elemento
console.log(numeros[0]);           // 1

// Tamanho do array de textos
console.log(textos.length);        // 4

// Adicionando um novo elemento na última posição
console.log("Array original:", textos);
textos.push('Oi');
console.log("Array com novo elemento:", textos);
