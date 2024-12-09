import { useEffect, useState } from "react"
import { DrafProducto } from "../types"
import { useCoffee } from "../hooks/useCoffee"

export const CoffeeForm = () => {

    const {dispatch,state} = useCoffee()

    const [producto, setProducto] = useState<DrafProducto>({
        nombrePlato: "",
        cantidadPlato: null,
        precioPlato: null
    })

   useEffect(() => {
    if(state.activeID){
        const productoEdit = state.productos.find(item => item.id === state.activeID)
        if(productoEdit){
            setProducto(productoEdit)
        }
    }
   }, [state.activeID, state.productos])


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type } = e.target;
        setProducto({
            ...producto,
            [name]: type === 'number' ? (value ? parseFloat(value) : null) : value
        })
    }


    const isFormValid = () => {
        return !!(producto.nombrePlato && 
                  producto.cantidadPlato && 
                  producto.precioPlato);
    }


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()


        
        if(!producto.nombrePlato || !producto.cantidadPlato || !producto.precioPlato) return

        if(state.activeID){
            dispatch({type: "EDIT_PRODUCTO", payload: {...producto, id: state.activeID}})
        }else {
            dispatch({type: "ADD_PRODUCTO", payload: producto})
        }
        

        setProducto({
            nombrePlato: "",
            cantidadPlato: null,
            precioPlato: null
        })
    }

  return (
    <div className="bg-m-white p-5 rounded-xl">
        <h3 className="text-2xl text-m-coffee-black mb-5 font-medium">
            {state.activeID? 'Editar Producto': 'Agregar Producto'}
        </h3>
        <form onSubmit={handleSubmit}>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-m-coffee" htmlFor="nombrePlato">Nombre de plato</label>
                <input 
                    className="bg-white border border-m-coffee text-sm rounded-lg  block w-full p-2.5 text-m-coffee-black outline-none transition duration-150" 
                    type="text" 
                    id="nombrePlato" 
                    name="nombrePlato" 
                    value={producto.nombrePlato}
                    onChange={handleChange}
                    placeholder="ej. Cafe con leche, Capuchino, etc"
                    />
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-m-coffee" htmlFor="cantidadPlato">Cantidad</label>
                <input 
                    className="bg-white border border-m-coffee text-sm rounded-lg  block w-full p-2.5 text-m-coffee-black outline-none transition duration-150" 
                    type="number" 
                    id="cantidadPlato" 
                    name="cantidadPlato" 
                    value={producto.cantidadPlato?? ""}
                    onChange={handleChange}
                    placeholder="ej. 1, 2, 3, etc"
                    />
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-m-coffee" htmlFor="precioPlato">Precio</label>
                <input 
                    className="bg-white border border-m-coffee text-sm rounded-lg  block w-full p-2.5 text-m-coffee-black outline-none transition duration-150" 
                    type="number" 
                    id="precioPlato" 
                    name="precioPlato" 
                    value={producto.precioPlato ?? ""}  
                    onChange={handleChange}  
                    placeholder="ej. 1.50, 2.50, 3.50, etc"
                    />
            </div>
            <input 
                className={`cursor-pointer text-white 
                    ${!isFormValid() 
                        ? 'bg-gray-400 cursor-not-allowed opacity-50' 
                        : 'bg-m-coffee-black hover:bg-m-coffee-black/90'
                    } 
                    focus:outline-none font-medium rounded-lg text-sm w-full 
                    sm:w-auto px-5 py-2.5 text-center`}
                type="submit" 
                value={state.activeID? 'Actualizar': 'Agregar'} />
        </form>
    </div>
  )
}
