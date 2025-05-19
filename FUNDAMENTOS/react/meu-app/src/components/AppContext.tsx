import { createContext } from "react";

interface IAppContext {
  user:string;
  isLoggedIn: Boolean;
}

export const AppContext = createContext({} as IAppContext) 

export const AppContextProvider = ({children}: any) => {
  const user = 'rodrigo'
  const isLoggedIn = false

  return(
    <AppContext value = {{ user, isLoggedIn }} >
      {children}
    </AppContext>
  )
}