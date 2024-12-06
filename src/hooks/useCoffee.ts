import { useContext } from 'react'
import { CoffeeContext } from '../context/CoffeContext'

export const useCoffee = () => {
    const context = useContext(CoffeeContext)

    if(!context){
        throw new Error("useCoffee must be used within a CoffeeProvider")
    }

    return context
  
}
