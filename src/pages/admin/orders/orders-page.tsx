import React from 'react'
import { TitlePage } from '../../../modules/core/components/TitlePage'
import { OrderList } from '../../../modules/orders/components/OrderList'

export const OrdersPage = () => {
    return (
        <>
            <header className='pt-8'>
                <div className="container">
                    <TitlePage
                        description='Gestiona las comandas'
                        title='Ordenes'
                    />
                </div>
            </header>
            {/* <OrderFilters /> */}
            <OrderList />

        </>
    )
}
