import { useQuery } from "@tanstack/react-query"
import categoriesServices from '../services/actions'


export const useCategories = () => {

    const { data: categories, isLoading, error, refetch } = useQuery({
        queryKey: ["categories"],
        queryFn: () => categoriesServices.getAllCategories(),
        staleTime: 1000 * 60 * 60 * 24
    })

    return {
        categories,
        isLoading,
        error,
        refetch
    }

}





