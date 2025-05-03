import { CompanyAccount } from './class/CompanyAccount'
import { PeapleAccount } from './class/PeapleAccount'

const peapleAccount: PeapleAccount = new PeapleAccount(679, 'Rodrigo', 19)

console.log(peapleAccount)
peapleAccount.setName("Rodrigo Brayan")

console.log(peapleAccount)
console.log(peapleAccount.getName())

const companyAccount: CompanyAccount = new CompanyAccount('Rodrigo Dev', 20)
console.log(companyAccount.deposit())
