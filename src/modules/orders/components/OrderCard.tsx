import { Order } from '../interfaces/orders.interface'
import { formatDate } from '../../../lib/helpers'


interface Props {
    order: Order
}

export const OrderCard = ({ order }: Props) => {
    return (
        <div className='order__card'>
            <div>
                <h4 className='text-2xl'>Order: #{ order.id }</h4>
                <p className='text-lg'>Cantidad: { order.orderItems.length }</p>
                <p className='text-lg'>Cliente: { order.clientName }</p>
            </div>
            <div className='space-y-2'>
                <p className='text-2xl text-end'>
                    { formatDate(order.createdAt) }
                </p>
                <div className='flex items-center justify-end gap-4'>
                    <p className='text-2xl font-bold'>${ order.total }</p>
                </div>
            </div>
        </div>
    )
}
