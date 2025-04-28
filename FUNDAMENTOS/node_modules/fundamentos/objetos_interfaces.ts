// === Definição de uma interface em TypeScript ===

// A interface 'Pessoa' descreve a forma (tipo) dos objetos Pessoa

interface Pessoa {
    nome: string;            // propriedade obrigatória: nome da pessoa (string)
    idade: number;           // propriedade obrigatória: idade da pessoa (number)
    profissao?: string;      // propriedade opcional: profissão da pessoa (string). O '?' indica que pode ou não existir
  }
  
  // === Criação de um objeto do tipo Pessoa ===
  const playerUm: Pessoa = {
    nome: 'Rodrigo',         // atribuindo o nome 'Rodrigo'
    idade: 21,               // atribuindo a idade 21
    // profissao não informada aqui, pois é opcional
  }
  
  // === Outro objeto do tipo Pessoa, desta vez com profissão ===
  const playerDois: Pessoa = {
    nome: 'Débora',          // atribuindo o nome 'Débora'
    idade: 19,               // atribuindo a idade 19
    profissao: 'Assistente'  // atribuindo a profissão 'Assistente'
  }
  
  // === Array de Pessoas usando genéricos ===
  // Array contendo apenas elementos do tipo Pessoa
  const arrayPessoa: Array<Pessoa> = [
    playerUm,                // primeiro elemento: objeto playerUm
    playerDois               // segundo elemento: objeto playerDois
  ];
  
  // === Array de números (tipo primitivo) ===
  // Sintaxe curta de array: number[]
  const arrayNumero: number[] = [
    1, 2, 3, 4               // pode conter apenas valores numéricos
  ];
  
  // === Array de strings ===
  // Outra forma de usar genéricos: Array<string>
  const arrayString: Array<string> = [
    "Um", "Dois", "Três"     // pode conter apenas valores do tipo string
  ];
  
  /*
    === Resumo Geral ===
    1. Definimos uma interface 'Pessoa' que atua como um contrato, especificando quais propriedades
       (nome, idade e opcionalmente profissão) um objeto deve ter.
    2. Criamos dois objetos (playerUm e playerDois) seguindo o contrato da interface Pessoa.
    3. Demonstramos a criação de arrays tipados:
       - arrayPessoa só aceita objetos do tipo Pessoa.
       - arrayNumero só aceita valores numéricos.
       - arrayString só aceita valores string.
    4. O uso de genéricos (Array<T>) e sintaxe de colchetes (T[]) garante segurança de tipo em tempo de
       compilação, prevenindo erros ao manipular coleções de dados.
  */


interface Profissao {
    cargo:string,
    salario:number,
    beneficios?: string,
    cargaHoraria: Number
}

const programador : Profissao = {
    cargo:"Programador",
    salario: 1.200,
    cargaHoraria: 6
}

const productOwner : Profissao = {
    cargo: "PO",
    salario: 8.000,
    beneficios:"TODOS",
    cargaHoraria: 8
}

const profissoes: Array<Profissao> = [
    programador,
    productOwner
]