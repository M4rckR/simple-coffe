import { CofeeList } from "./CofeeList"
import { CoffeeMenu } from "./CoffeeMenu"

export const CoffeeMain = () => {
  return (
    <main >
        <div className="min-h-screen relative" >
            <div className="bg-top-image w-full h-96 absolute left-0 right-0 bg-cover top-0">
                <div className="container mx-auto bg-m-coffee mt-[240px] pt-11 pb-6 w-[90%]">
                    <div className="max-w-[480px] bg-vector-title bg-no-repeat bg-contain mx-auto bg-right-top pt-12 px-2">
                        <h1 className="text-center text-m-white text-4xl font-semibold mb-1">
                            Our Collection
                        </h1>
                        <p className="text-center text-m-gray">Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
                    </div>

                    <div className="mt-8 grid lg:grid-cols-12 space-x-8">
                        <div className="lg:col-span-5 xl:col-start-2 xl:col-span-4">
                            <CofeeList  />
                            
                        </div>
                        <div className="col-span-6 rounded-lg">
                            <CoffeeMenu />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}
