import {v4 as uuidv4} from "uuid"
import { DrafProducto, Producto } from "../types";

export type CoffeeAction = 
    {type: "ADD_PRODUCTO", payload: DrafProducto} 


export type CoffeeState = {
    productos: Producto[],
}

export const initialState: CoffeeState = {
    productos: [],
} 

const createProduct = (producto: DrafProducto) => {
    return {
        ...producto,
        id: uuidv4()
    }
}

export const CoffeeReducer = (
    state:CoffeeState = initialState,
    actions: CoffeeAction
) => {
    if(actions.type === "ADD_PRODUCTO"){
        const producto = createProduct(actions.payload)
        const productoExist = state.productos.find((item) => item.nombrePlato === producto.nombrePlato)
        
        if(state.productos.length === 0){
            return {
                ...state,   
                productos: [producto]
            }
        }


        if(productoExist){
            return{
                ...state
            }
        }

        return {
            ...state,
            productos: [...state.productos, producto]
        }


    }

    return state;
}