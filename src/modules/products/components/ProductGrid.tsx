import { useNavigate } from 'react-router';

import { ProductCard } from './ProductCard';
import { useProducts } from '../hooks/useProducts'
import { Pagination } from '@heroui/pagination';

export const ProductGrid = () => {

    const navigate = useNavigate()
    const { products, isLoading, meta } = useProducts();


    if (isLoading) {
        return (
            <div className="container">
                <p>Cargando productos...</p>
            </div>
        )
    }

    const handleNavigate = (page: number) => {
        navigate(`?page=${ page }`)
    }

    return (
        <section className='pb-8'>
            <div className="container">
                <ul className='product__list'>
                    {
                        products?.map(product => (
                            <ProductCard
                                key={product.id}
                                product={product}
                            />
                        ))
                    }
                </ul>

                <div className='w-full flex justify-center pt-8'>

                    <Pagination
                        color='primary'
                        className='mx-auto'
                        onChange={handleNavigate}
                        initialPage={meta?.page}
                        total={meta?.lastPage ?? 0}
                    />;
                </div>
            </div>
        </section>
    )
}
