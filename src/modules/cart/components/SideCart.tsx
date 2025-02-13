import { Button } from "@heroui/button"


export const SideCart = () => {
    return (
        <div className='side__cart'>
            <h2 className='text-2xl mb-6'>Carrito de compras</h2>


            {/* LISTADO DE PRODUCTOS EN EL CARRITO */}
            <ul>

            </ul>

            <div className="flex-1"></div>

            {/* INFO GENERAL DE LA ORDEN */}
            
            <div className="space-y-4">
                <p className="flex justify-between">
                    <span>Nro de item: 6u.</span>
                    <span>SubTotal: $28,00</span>
                </p>


                <p className="text-xl flex justify-between font-semibold">
                    <span className="text-black">Total:</span>
                    <span className="text-primary-500">$28,00</span>
                </p>

                <Button 
                    color="primary"
                    fullWidth
                >
                    Generar Orden
                </Button>

            </div>


        </div>
    )
}
