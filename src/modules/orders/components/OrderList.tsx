import { useOrders } from "../hooks/useOrders"
import { OrderCard } from "./OrderCard"



export const OrderList = () => {
    const { orders } = useOrders();
    return (
        <section>
            <div className="container">
                <ul className='space-y-4'>

                    {
                        orders.map(order => (
                            <li key={order.id}>
                                <OrderCard order={order} />
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}
