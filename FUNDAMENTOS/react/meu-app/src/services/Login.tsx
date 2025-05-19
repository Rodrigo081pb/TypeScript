import { useContext } from "react"
import { api } from "../api"
import { AppContext } from "../components/AppContext"

export const login = async(email: string): Promise<void> => {

    const { isLoggedIn } = useContext(AppContext)
    console.log(isLoggedIn)

    const data: any = await api
    
    if(email !== data.email){
        return alert('Email inválido')
    }

    alert("Bem vindo")

}

