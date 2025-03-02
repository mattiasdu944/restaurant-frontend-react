import { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import { useCartStore } from '../../cart/store/useCartStore';
import { addToast } from '@heroui/toast';

const SERVER_URL = `${ import.meta.env.VITE_SOCKET_URL }/orders`

export const useCreateOrder = () => {

    const { total, cart, clearCart } = useCartStore();
    const [isLoading, setIsLoading] = useState(false);
    const [socket, setSocket] = useState<Socket | null>(null);


    useEffect(() => {
      
        const newSocket = io(SERVER_URL)

        newSocket.on('connect', () => {
            setSocket(newSocket);
        })

        newSocket.on('disconnect', () => {
            setSocket(null);
        })

    }, [])


    const createOrder = () => {

        setIsLoading(true);

        if( !socket ){
            console.log("No existe el socket")
        }

        socket?.emit('createOrder', {
            orderItems: cart,
            total: total,
            clientName: "Mattias",
            userId: "6787d8c850ae7d8514e3eb78"
        },
        (response: any) => {
            console.log(response)
        })

        clearCart()

        addToast({
            title: "Orden creada",
            description: "La orden se ha creado correctamente",
            color: "success"
        })
        setIsLoading(false);
    }

    return {
        createOrder,
        isLoading
    }

}
