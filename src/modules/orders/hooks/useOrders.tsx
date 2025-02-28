import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { Order } from '../interfaces/orders.interface';

const SERVER_URL = 'http://127.0.0.1:3000/orders'; // Ajusta a tu URL de NestJS


export function useOrders() {
    const [orders, setOrders] = useState<Order[]>([])
    const [status, setStatus] = useState<'connected' | 'disconnected'>('disconnected');


    useEffect(() => {
        // Conectamos al servidor de Socket.io
        const newSocket = io(SERVER_URL);

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
        newSocket.on('refreshOrders', (data: {orders: Order[]}) => {
            console.log('Orden creada:', data);
            setOrders(data.orders);

        });

        // Al desmontar el componente, cerramos la conexión
        return () => {
            newSocket.disconnect();
        };
    }, []);

    // Retornamos el estado de conexión, la respuesta del servidor y la función para crear la orden
    return {
        status,
        orders,
    };
}
