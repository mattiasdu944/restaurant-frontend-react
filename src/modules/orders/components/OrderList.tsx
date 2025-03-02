
import { OrderCard } from './OrderCard'
import { useOrders } from '../hooks/useOrders'

export const OrderList = () => {
    const { orders } = useOrders();

    return (
        <section className='pt-8'>
            <div className="container">
                <ul className='space-y-4'>
                    {
                        orders.map((order) => (
                            <li key={order.id}>
                                <OrderCard order={order}/>
                            </li>
                        ))
                    }

                </ul>
            </div>
        </section>
    )
}
