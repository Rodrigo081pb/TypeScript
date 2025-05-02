// Definição da classe Carro
class Carro {
    // Propriedades da classe com valores padrão
    marca: string = "FIAT"    // Valor padrão "FIAT" (será sobrescrito no construtor)
    ano: number = 2024        // Valor padrão 2024 (será sobrescrito no construtor)
    kmsRodados: number = 0    // Valor padrão 0 (será sobrescrito no construtor)

    // Construtor da classe
    constructor(marca: string, ano: number, kmsRodados: number) {
        // Sobrescreve os valores padrão com os parâmetros passados
        this.marca = marca
        this.ano = ano
        this.kmsRodados = kmsRodados
    }

    // Método para exibir informações do carro (usando arrow function)
    apresentacaoCarro = () => {
        console.log(`Olá, O meu carro é da marca ${this.marca} e o ano dele é de ${this.ano} e ele tem ${this.kmsRodados} KMs rodados.`)
    }
}

// Criando uma instância do carro
const veiculo = new Carro("Uno", 2025, 0)
veiculo.apresentacaoCarro()