import {v4 as uuidv4} from "uuid"
import { DrafProducto, Producto } from "../types";

export type CoffeeAction = 
    {type: "ADD_PRODUCTO", payload: DrafProducto} |
    {type: "ADD_QUANTITY", payload: Producto["id"]} |
    {type: "DECREASE_QUANTITY", payload: Producto["id"]}  |
    {type: "DELETE_PRODUCTO", payload: Producto["id"]} |
    {type: "SET_ACTIVE_ID", payload: Producto["id"]} |
    {type: "EDIT_PRODUCTO", payload: Producto}
export type CoffeeState = {
    productos: Producto[],
    activeID:string | null
}

export const initialState: CoffeeState = {
    productos: [],
    activeID: null
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
    
    if(actions.type === "ADD_QUANTITY"){
        
        const newLista = state.productos.map((item) => {
            if(item.id === actions.payload){
                
                return {
                    ...item,
                    cantidadPlato: item.cantidadPlato? item.cantidadPlato + 1 : 1
                }
            }

            else {
                return item
            }
        })


        return {
            ...state,
            productos: newLista
        }
        
        
    }
    if(actions.type === "DECREASE_QUANTITY"){
        
        const newLista = state.productos.map((item) => {
            if(item.cantidadPlato !== null){
                if(item.id === actions.payload && item.cantidadPlato > 1 ){
                    return {
                        ...item,
                        cantidadPlato: item.cantidadPlato? item.cantidadPlato - 1 : 1
                    }
                }
            }
            return item
        })

        return {
            ...state,
            productos: newLista
        }
    }

    if(actions.type === "DELETE_PRODUCTO"){
        const newLista = state.productos.filter((item) => item.id !== actions.payload)
        return {
            ...state,
            productos: newLista
        }
    }

    if(actions.type === "SET_ACTIVE_ID"){
        return {
            ...state,
            activeID: actions.payload
        }
    }

    if(actions.type === "EDIT_PRODUCTO"){
        const newLista = state.productos.map((item) => {
            if(item.id === actions.payload.id){
                return {
                    ...item,
                    ...actions.payload
                }
            }
            else {
                return item
            }
        })

        return {
            ...state,
            productos: newLista,
            activeID: null
        }
    }



    return state;
}