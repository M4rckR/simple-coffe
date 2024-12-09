import { useMemo } from "react"
import { useCoffee } from "../hooks/useCoffee"
import { ListaDePlatos } from "./ListaDePlatos"

export const CoffeeMenu = () => {
  const {state} =useCoffee()

  const isThereProducts = state.productos.length > 0

  const montoTotal = useMemo(() => {
    return state.productos.reduce((acc, item) => acc + (item.precioPlato ?? 0) * (item.cantidadPlato ?? 0), 0)
  }, [state.productos])
   
  

  return (
    <section className="space-y-2">
      {isThereProducts ? state.productos.map(item => (
        <ListaDePlatos  
              key = {item.id}
              item = {item}/>
      ))
      :(
        <div className="bg-m-white p-4 rounded-lg">
            <p>No hay productos agregados aun ☹️☕</p>
        </div>
      )}

      
      {montoTotal > 0? 
      <div className="bg-m-white p-4 rounded-lg border-2 border-m-coffee-black">
        <p className="font-semibold text-2xl">Precio total: <span className="text-lg">{montoTotal}</span> </p>
      </div>
      : null}

      
    </section>

  )
}
