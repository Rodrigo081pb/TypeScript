const conta = {
    email: 'rodrigo@gmail.com',
    password: '123456',
    name: 'Rodrigo',
    balance: 2000.00,
    id:'1'
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 2000)
})
