import { createLocalStorage, getAllLocalStorage } from "./storage"

const dioBank = {
    login: false
}

describe('storage', () => {

    it('Deve retornar um objeto no localStorage com a chave diobank', () =>{
        const mockGetItem = jest.spyOn(Storage.prototype,'getItem')
        getAllLocalStorage()
        expect(mockGetItem).toHaveBeenCalledWith('diobank')
    })

    it('Deve criar o objeto do localStorage', () => {
        const mockSetItem = jest.spyOn(Storage.prototype,'setItem')
        createLocalStorage()
        expect(mockSetItem).toHaveBeenCalledWith('diobank', JSON.stringify(dioBank))
    })
})