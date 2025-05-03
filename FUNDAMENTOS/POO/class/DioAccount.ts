export abstract class DioAccount {

    private name:string
    readonly accountNumber: number
    balance: number = 0
    private status: boolean = true

    constructor(name: string, accountNumber:number){
        this.name = name
        this.accountNumber = accountNumber
    }

    // set
    setName = (name: string): void => {
        this.name = name
        console.log("Nome alterado")
    }

    // get
    getName = (): string => {
        return this.name
    }

    deposit = (): void => {
        if(this.validateStatus()){
            console.log('Você depositou')
        }
        
    }

    withdraw = (): void => {
        console.log("Você sacou")
    }

    getBalance = (): void => {
        console.log(this.balance)
    }

    private validateStatus = ():boolean => {
        if (this.status){
            return this.status
        }

        throw new Error('Erro ao criar a conta')
    }

}