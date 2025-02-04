import { createContext } from "react";


export  const  WrapperContext = createContext({})


export const WrapperProvider = ({children}) =>{
    const val1 ='peanuts';
    const val2 = 'deeznutz';
    return(

        <WrapperContext.Provider
        value={{val1,val2}}
        
        >
            {children}

        </WrapperContext.Provider>

    )
}