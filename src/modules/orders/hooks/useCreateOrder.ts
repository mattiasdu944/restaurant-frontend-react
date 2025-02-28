import { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import { useCartStore } from '../../cart/store/useCartStore';

const SERVER_URL = 'http://127.0.0.1:3000/orders'; // Ajusta a tu URL de NestJS


export function useCreateOrder() {
    // Estado para almacenar el socket
    const [socket, setSocket] = useState<Socket | null>(null);
    // Estado para indicar si estamos conectados o no
    const [status, setStatus] = useState<'connected' | 'disconnected'>('disconnected');
    // Estado para almacenar cualquier respuesta que mande el servidor al crear la orden
    const [response, setResponse] = useState<any>(null);

    const { cart, total } = useCartStore();

    useEffect(() => {
        // Conectamos al servidor de Socket.io
        const newSocket = io(SERVER_URL);

        setSocket(newSocket);

        // Al conectar, actualizamos el estado
        newSocket.on('connect', () => {
            setStatus('connected');
            console.log('Conectado al servidor Socket.io');
        });

        // Al desconectarse, actualizamos el estado
        newSocket.on('disconnect', () => {
            setStatus('disconnected');
            console.log('Desconectado del servidor Socket.io');
        });

        // Escuchamos un evento que, por ejemplo, confirme que la orden se creó
        newSocket.on('refreshOrders', (data) => {
            console.log('Orden creada:', data);
            setResponse(data);
        });

        // Al desmontar el componente, cerramos la conexión
        return () => {
            newSocket.disconnect();
        };
    }, []);

    // Función para emitir el evento "createOrder" al servidor
    const createOrder = () => {
        if (!socket) {
            console.error('Socket no está inicializado');
            return;
        }

        if (!socket.connected) {
            console.error('Socket no está conectado');
            return;
        }

        // Emitimos el evento con los datos de la orden
        // El callback se ejecutará si el servidor manda una respuesta de confirmación
        socket.emit('createOrder', { 
            orderItems: cart, 
            total, 
            clientName: "Mattias", 
            userId: "6787d8c850ae7d8514e3eb78"
        }, (serverResponse: any) => {
            console.log('Respuesta del servidor al crear orden:', serverResponse);
            setResponse(serverResponse);
        });
    };

    // Retornamos el estado de conexión, la respuesta del servidor y la función para crear la orden
    return {
        status,
        response,
        createOrder,
    };
}
