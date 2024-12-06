import {Producto} from '../types/'

type ListaDePlatosProps = {
  item: Producto
}


export const ListaDePlatos = ({item}:ListaDePlatosProps) => {
  const {nombrePlato, cantidadPlato, precioPlato} = item

  return (
    <div className="bg-m-white p-5 rounded-xl mb-5 relative">

      <div className='flex items-center justify-between'>
        <div className='flex gap-4 items-center'>
          <img className='object-cover' width={90} src="https://img.freepik.com/foto-gratis/taza-desechable-delicioso-cafe_23-2148892889.jpg?t=st=1733465694~exp=1733469294~hmac=ffd64f6b99f224d8c98c572492e2edd735cdc8806b5efe68814757d6ddf1be39&w=740" alt="img-free" />
          <div>
            <h3 className="text-2xl text-m-coffee-black  font-medium">{nombrePlato}</h3>
            <p className="text-m-coffee-black">Precio: S/{precioPlato}</p>
          </div>
        </div>
        <div className='flex gap-2 items-center'>
          <button className='bg-m-coffee text-m-white font-semibold text-xl px-2 rounded'> - </button>
          <p className="text-m-coffee-black bg-white py-2 px-4 border rounded m-0">{cantidadPlato}</p>
          <button className='bg-m-coffee text-m-white font-semibold text-xl px-2 rounded'> + </button>
        </div>
      </div>
      
    </div>  
  )
}
