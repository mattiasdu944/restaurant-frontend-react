
import { CategoryFilter } from '../../../modules/categories/components/CategoryFilter'
import { TitlePage } from '../../../modules/core/components/TitlePage'
import { ProductGrid } from '../../../modules/products/components/ProductGrid'

export const POSPage = () => {
    return (
        <>
            <header className='pt-8'>
                <div className="container">
                    <TitlePage
                        title='Punto de venta'
                        description='Menu vitrual para realizar ventas y ordenes'
                    />
                </div>
            </header>

            {/* MENU DE CATEGORIAS */}
            <CategoryFilter/>

            {/* GRID DE PRODUCTS */}
            <ProductGrid/>

        </>
    )
}
