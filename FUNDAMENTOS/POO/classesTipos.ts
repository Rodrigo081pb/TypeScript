// Classe abstrata que representa uma conta bancária
abstract class Conta {
    nome: string
    numeroConta: number
    saldo: number = 0  // Valor inicial do saldo

    constructor(nome: string, numeroConta: number) {
        this.nome = nome
        this.numeroConta = numeroConta
    }

    // Métodos usando arrow function
    depositar = () => {
        console.log("Você depositou")
    }

    sacar = () => {
        console.log("Você sacou")
    }

    getValue = () => {
        console.log(this.saldo)
    }
}

// Subclasse que herda de Conta
class contaAll extends Conta {
    doc_id: number  // Novo atributo específico da subclasse
    
    constructor(doc_id: number, nome: string, numeroConta: number) {
        super(nome, numeroConta)  // Chama o construtor da classe pai
        this.doc_id = doc_id
    }
}

// Criando instância da contaAll
const geralConta: contaAll = new contaAll(10, "Rodrigo", 13)
console.log(geralConta)