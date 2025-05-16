const conta = {
    email: 'rodrigo@gmail.com',
    password: '123456',
    name: 'Rodrigo',
    balance: 2000.00
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 5000)
})
