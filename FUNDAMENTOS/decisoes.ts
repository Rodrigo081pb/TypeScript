// Estrutura de decisão

const num1: number = 17

if (num1 < 15) {
    console.log(`O número é menor que 15`)
} else if (num1 === 15) {
    console.log(`O número é ${num1}`)
} else {
    console.log(`O número é maior que 15`)
}

// Objetos literais

const tiposUsuarios = {
    admin: 'Olá Adm',
    estudante: 'Olá Estudante',
    curioso: 'Olá Visitante'
}

function validateUser(user: string){
    console.log(tiposUsuarios[user as keyof typeof tiposUsuarios])
}

const usuario1 = 'admin'

validateUser(usuario1)