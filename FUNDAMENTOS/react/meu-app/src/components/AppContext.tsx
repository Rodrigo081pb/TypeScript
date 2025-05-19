import { createContext, useState } from "react";

interface IAppContext {
  user: string,
  isLoggedIn: Boolean,
  setIsLoggedIn: (isLoggedIn: boolean) => void
}

export const AppContext = createContext({} as IAppContext)

export const AppContextProvider = ({ children }: any) => {

  const [isLoggedIn, setIsLoggedIn] = useState<Boolean>(false)

  const user = 'rodrigo'

  return (
    <AppContext value={{ user, isLoggedIn, setIsLoggedIn }} >
      {children}
    </AppContext>
  )

}