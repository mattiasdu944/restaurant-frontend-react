import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { useQuery } from "@tanstack/react-query"


import productService from '../services/actions';


export const useProducts = () => {

    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [category, setCategory] = useState<string | null>()


    const [searchParams] = useSearchParams();
    const categoryFilter = searchParams.get('category');

    useEffect(() => {
        const pageParams = searchParams.get('page');
        const limitParams = searchParams.get('limit');

        if (pageParams) {
            setPage(+pageParams);
        }

        if (limitParams) {
            setLimit(+limitParams);
        }

        setCategory(categoryFilter);
        

    }, [searchParams])


    if (category) {
        const { data, isLoading } = useQuery({
            queryKey: ["products", "byCategory", category],
            queryFn: () => productService.getProductsByCategory(category),
            staleTime: 1000 * 60 * 60 * 24
        })

        return {
            products: data?.products,
            isLoading
        }
    }

    const { data, isLoading } = useQuery({
        queryKey: ["products", { page, limit }],
        queryFn: () => productService.getAllProducts(page, limit),
        staleTime: 1000 * 60 * 60 * 24
    })


    return {
        products: data?.products,
        meta: data?.meta,
        isLoading,
    }
}