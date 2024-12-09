import { CofeeList } from "./CofeeList"
import { CoffeeMenu } from "./CoffeeMenu"

export const CoffeeMain = () => {
  return (
    <main >
        <div className="min-h-screen relative" >
            <div className="bg-top-image w-full h-80 absolute left-0 right-0 bg-cover top-0">
                <div className="container mx-auto bg-m-coffee mt-[120px] pt-11 pb-6 w-[90%]">
                    <div className="max-w-[480px] bg-vector-title bg-no-repeat bg-contain mx-auto bg-right-top pt-12 px-2">
                        <h1 className="text-center text-m-white text-4xl font-semibold mb-1">
                            Nuestra coleccion
                        </h1>
                        <p className="text-center text-m-gray">Descubre el lugar perfecto para disfrutar de una taza de café excepcional, donde cada sorbo te transporta a un mundo de sabores y aromas incomparables.</p>
                     
                    </div>

                    <div className="px-4 lg:px-0 mt-8 grid lg:grid-cols-12 space-y-4 lg:space-y-0 lg:space-x-8">
                        <div className="col-span-full lg:col-span-5 xl:col-start-2 xl:col-span-4">
                            <CofeeList  />
                            
                        </div>
                        <div className="col-span-full  lg:col-span-6 rounded-lg">
                            <CoffeeMenu />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}
