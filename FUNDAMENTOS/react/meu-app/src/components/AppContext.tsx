import { createContext, useState } from "react";

interface IAppContext {
  user:string;
  isLoggedIn: Boolean;
}

export const AppContext = createContext({} as IAppContext) 

export const AppContextProvider = ({children}: any) => {
  
  const [ isLoggedIn ] = useState<boolean>(false)
  
  const user = 'rodrigo'

  return(
    <AppContext value = {{ user, isLoggedIn }} >
      {children}
    </AppContext>
  )
  
}