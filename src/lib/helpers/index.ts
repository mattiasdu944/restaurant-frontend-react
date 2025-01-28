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