import { Order } from '../interfaces/order.interface'
import { formatDate } from '../../../lib/helpers';
import { OrderDetailsModal } from './OrderDetailsModal';

interface Props {
    order: Order;
}

export const OrderCard = ({ order }: Props) => {
    return (
        <div className='order__card'>
            <div>
                <h4>Orden #{order.id}</h4>
                <p>Cantidad: { order.orderItems.length }</p>
                <p>Cliente: { order.clientName }</p>
            </div>
            <div className='space-y-2'>
                <p>
                    Generado: { formatDate(order.createdAt) }
                </p>
                <p>Total: { order.total }Bs</p>
            </div>
            <OrderDetailsModal order={order}/>
        </div>
    )
}
