import React from 'react'
import { TitlePage } from '../../../modules/core/components/TitlePage'
import { OrderList } from '../../../modules/orders/components/OrderList'

export const OrdersPage = () => {
    return (
        <>
            <header className='pt-8'>
                <div className="container">
                    <TitlePage
                        title='Ordenes y comandas'
                        description='Aquí podrás ver todas las ordenes y comandas que se han realizado en tu restaurante.'
                    />
                </div>
            </header>

            <OrderList/>
        </>
    )
}
