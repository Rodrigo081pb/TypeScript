import { getAllLocalStorage } from "./storage"

describe('storage', () => {

    const getItem = jest.spyOn(Storage.prototype,'getItem')

    it('Deve retornar um objeto no localStorage', () =>{
        getAllLocalStorage()
        expect(getItem).toHaveBeenCalled()
    })
})