import { useQuery } from "@tanstack/react-query"


import productService from '../services/actions';




export const useProducts = () => {

    const { data, isLoading } = useQuery({
        queryKey: ["products"],
        queryFn: () => productService.getAllProducts(),
        staleTime: 1000 * 60 * 60 * 24
    })



    return {
        products: data?.products,
        meta: data?.meta,
        isLoading
    }
}