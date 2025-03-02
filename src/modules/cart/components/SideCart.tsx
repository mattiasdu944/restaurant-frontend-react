import { Button } from "@heroui/button"
import { useCartStore } from "../store/useCartStore"
import { Add01Icon, Delete01Icon, MinusSignIcon } from "hugeicons-react";
import { useCreateOrder } from "../../orders/hooks/useCreateOrder";


export const SideCart = () => {

    const { createOrder, isLoading } = useCreateOrder();
    const { cart, total, decrementQuantity, incrementQuantity, removeProductFromCart } = useCartStore();

    return (
        <div className='side__cart'>
            <h2 className='text-2xl mb-6'>Carrito de compras</h2>


            {/* LISTADO DE PRODUCTOS EN EL CARRITO */}
            <ul className="space-y-4">
                {
                    cart.length === 0
                    ? (
                        <p className="text-center">No hay productos en el carrito</p>
                    )

                    : (
                        cart.map(item => (
                            <li key={item.productId} className="border-b">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-lg font-semibold">{ item.productName }</p>
                                        <p>${ item.productPrice }</p>
                                        <p>Qty. { item.quantity }</p>
                                    </div>


                                    <div className="flex items-center gap-4">
                                        <Button
                                            onPress={() => decrementQuantity(item.productId)}
                                            size="sm"
                                            isIconOnly
                                            variant="flat"
                                            startContent={ <MinusSignIcon size={15}/> }
                                        />
                                        <Button
                                            onPress={() => incrementQuantity(item.productId)}
                                            size="sm"
                                            isIconOnly
                                            variant="flat"
                                            startContent={ <Add01Icon size={15}/> }
                                        />
                                        <Button
                                            onPress={() => removeProductFromCart(item.productId)}
                                            size="sm"
                                            isIconOnly
                                            variant="flat"
                                            startContent={ <Delete01Icon size={15}/> }
                                        />
                                    </div>
                                </div>
                            </li>
                        ))
                    )
                }

            </ul>

            <div className="flex-1"></div>

            {/* INFO GENERAL DE LA ORDEN */}
            
            <div className="space-y-4">
                <p className="flex justify-between">
                    <span>Nro de items: { cart.length }u.</span>
                    <span>SubTotal: $28,00</span>
                </p>


                <p className="text-xl flex justify-between font-semibold">
                    <span className="text-black">Total:</span>
                    <span className="text-primary-500">${ total }</span>
                </p>

                <Button 
                    color="primary"
                    fullWidth
                    isLoading={ isLoading }
                    isDisabled={ cart.length === 0 || isLoading }
                    onPress={createOrder}
                >
                    Generar Orden
                </Button>

            </div>


        </div>
    )
}
