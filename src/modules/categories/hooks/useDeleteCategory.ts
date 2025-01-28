import { useMutation } from "@tanstack/react-query"
import categoriesServices from '../services/actions'
import { queryClient } from "../../../main"



export const useDeleteCategory = () => {
    
    const { mutate, isPending } = useMutation({
        mutationFn: categoriesServices.deleteCategory,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['categories'] })
        },
    })


    return {
        mutate,
        isPending,
    }

}