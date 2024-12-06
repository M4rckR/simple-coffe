import { useCoffee } from "../hooks/useCoffee"
import { ListaDePlatos } from "./ListaDePlatos"

export const CoffeeMenu = () => {
  const {state} =useCoffee()


  const isThereProducts = state.productos.length > 0

  return (
    <section>
      {isThereProducts ? state.productos.map(item => (
        <ListaDePlatos  
              item = {item}/>
      ))
      :(
        <div className="bg-m-white p-4 rounded-lg">
            <p>No hay productos agregados aun ☹️☕</p>
        </div>
      )}
    </section>
  )
}
