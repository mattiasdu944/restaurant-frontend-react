import { useEffect, useState } from "react"
import { Order } from "../interfaces/order.interface"
import { io } from "socket.io-client";


const SERVER_URL = `${ import.meta.env.VITE_SOCKET_URL }/orders`

export const useOrders = () => {

    const [orders, setOrders] = useState<Order[]>([]);


    useEffect(() => {
        const newSocket = io(SERVER_URL)

        newSocket.on('connect', () => {
            console.log("Conectados")
        })
        
        newSocket.on('refreshOrders', (data: { orders: Order[] }) => {
            setOrders(data.orders)
        });

        return () => {
            newSocket.disconnect();
        }

    }, [])
    
    return {
        orders
    }


}