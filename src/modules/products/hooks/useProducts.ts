import { useQuery } from "@tanstack/react-query"


import productService from '../services/actions';
import { useSearchParams } from "react-router";
import { useEffect, useState } from "react";




export const useProducts = () => {

    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(5);

    const [searchParams] = useSearchParams();
    // const categoryFilter = searchParams.get('category');

    useEffect(() => {
        const pageParams = searchParams.get('page');
        const limitParams = searchParams.get('limit');

        if( pageParams ){
            setPage( +pageParams );
        }

        if( limitParams ){
            setLimit( +limitParams );
        }

    }, [searchParams])

    const { data, isLoading } = useQuery({
        queryKey: ["products", { page, limit }],
        queryFn: () => productService.getAllProducts(page, limit),
        staleTime: 1000 * 60 * 60 * 24
    })



    return {
        products: data?.products,
        meta: data?.meta,
        isLoading
    }
}