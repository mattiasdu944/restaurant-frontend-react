import { isAxiosError } from "axios"



export const handleActionError = ( error: unknown ) => {

    console.log(error)

    if( isAxiosError(error) ){
        return {
            data: null,
            error: error.response?.data.message
        }
        
    }

    return {
        data: null,
        error: "Error desconocido"
    }

}


export const formatDate = (isoDate: Date) => {

    const date = new Date(isoDate);

    const months = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ]

    const day = date.getUTCDate();
    const month = date.getUTCMonth(); // 0-11
    const year = date.getUTCFullYear();


    return `${day} de ${ months[month] } de ${ year }`

}