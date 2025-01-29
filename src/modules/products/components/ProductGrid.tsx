
import { useProducts } from '../hooks/useProducts'
import { ProductCard } from './ProductCard';

export const ProductGrid = () => {

    const { products, isLoading } = useProducts();

    
    if (isLoading) {
        return (
            <div className="container">
                <p>Cargando productos...</p>
            </div>
        )
    }


    return (
        <section>
            <div className="container">
                <ul className='product__list'>
                    {
                        products?.map(product => (
                            <ProductCard
                                key={ product.id }
                                product={ product }
                            />
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}
