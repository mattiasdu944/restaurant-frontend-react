import { Manager, Socket } from "socket.io-client";

// Se declara el socket como null inicialmente para evitar errores de undefined
export let socket: Socket | null = null;

export const connectToServer = (uri: string, cb: () => void) => {
    console.log(import.meta.env.VITE_SOCKET_URL)
    // Se define la URL base del socket (puede venir de las variables de entorno o usar un fallback)
    const baseURL = import.meta.env.VITE_SOCKET_URL || 'http://localhost:3000';
    const manager = new Manager(baseURL);

    // Si existe un socket previo, se eliminan sus listeners para evitar fugas de memoria
    socket?.removeAllListeners();
    // Se conecta al namespace especificado por "uri"
    socket = manager.socket(uri);

    // Una vez conectado, se ejecuta el callback
    socket.on('connect', () => {
        console.log('Conectado al servidor con ID:', socket?.id);
        cb();
    });

    // Se captura cualquier error en la conexión para tener retroalimentación
    socket.on('connect_error', (err) => {
        console.error('Error de conexión:', err);
    });
};
