import { useReducer, createContext, Dispatch, ReactNode } from "react"
import {CoffeeAction, CoffeeReducer,CoffeeState,initialState} from "../reducer/CoffeeReducer"
type CoffeeContextProps = {
    state: CoffeeState
    dispatch: Dispatch<CoffeeAction>
}

type CoffeeProviderProps = {
    children: ReactNode
}

export const CoffeeContext = createContext<CoffeeContextProps | undefined >(null!)

export const CoffeeProvider = ({children}: CoffeeProviderProps) => {
    
    const [state, dispatch] = useReducer(CoffeeReducer, initialState)

    return (
        <CoffeeContext.Provider 
            value={{
                state, 
                dispatch
            }}>
            {children}
        </CoffeeContext.Provider>
    )

}