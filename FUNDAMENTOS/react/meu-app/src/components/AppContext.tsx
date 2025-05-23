import { createContext, useEffect, useState } from "react";
import { getAllLocalStorage } from "../services/storage";

interface IAppContext {
  user: string,
  isLoggedIn: Boolean,
  setIsLoggedIn: (isLoggedIn: boolean) => void
}

export const AppContext = createContext({} as IAppContext)

export const AppContextProvider = ({ children }: any) => {

  const [isLoggedIn, setIsLoggedIn] = useState<Boolean>(false)

  const storage = getAllLocalStorage()

  useEffect(() => {
    if (storage) {
      const { login } = JSON.parse(storage)
      setIsLoggedIn(login)
    }
  }, [])

  const user = 'rodrigo'

  return (
    <AppContext value={{ user, isLoggedIn, setIsLoggedIn }} >
      {children}
    </AppContext>
  )

}