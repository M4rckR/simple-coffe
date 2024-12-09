import { useCoffee } from '../hooks/useCoffee'
import {Producto} from '../types/'
import { MdDelete, MdEdit } from "react-icons/md";


type ListaDePlatosProps = {
  item: Producto
}


export const ListaDePlatos = ({item}:ListaDePlatosProps) => {
  const {nombrePlato, cantidadPlato, precioPlato, id } = item

  const {dispatch} = useCoffee()

  const onEdit = (id:Producto["id"]) => {
    dispatch({type: "SET_ACTIVE_ID", payload: id})
  }


  const onIncrease = (id:Producto["id"]) => {
    dispatch({type: "ADD_QUANTITY", payload: id})
  }
  const onDecrease = (id:Producto["id"]) => {
    dispatch({type: "DECREASE_QUANTITY", payload: id})
  }

  const onDelete = (id:Producto["id"]) => {
    dispatch({type: "DELETE_PRODUCTO", payload: id})
  }

  return (
    <div className="bg-m-white p-5 rounded-xl mb-5 relative">
      <div  className='absolute flex right-0 top-0 p-2'>
        <div className='text-2xl text-m-coffee font-semibold cursor-pointer' onClick={() => onEdit(id)}>
          <MdEdit />
        </div>
        <div className=' text-2xl text-m-coffee font-semibold cursor-pointer' onClick={() => onDelete(id)}>
          <MdDelete />
        </div>
      </div>  
      <div className='flex items-center justify-between'>
        <div className='flex gap-4 items-center'>
          <img className='object-cover' width={90} src="https://st2.depositphotos.com/3977505/7150/v/950/depositphotos_71505219-stock-illustration-seamless-patterns-with-coffee-theme.jpg" alt="img-free" />
          <div>
            <h3 className="text-2xl text-m-coffee-black  font-medium">{nombrePlato}</h3>
            <p className="text-m-coffee-black">Precio: S/{precioPlato}</p>
          </div>
        </div>
        <div className='flex gap-2 items-center'>
          <button onClick={() => onDecrease(id)}  className='bg-m-coffee text-m-white font-semibold text-xl px-2 rounded'> - </button>
          <p className="text-m-coffee-black bg-white py-2 px-4 border rounded m-0">{cantidadPlato}</p>
          <button onClick={() => onIncrease(id)} className='bg-m-coffee text-m-white font-semibold text-xl px-2 rounded'> + </button>
        </div>
      </div>
      
    </div>  
  )
}
