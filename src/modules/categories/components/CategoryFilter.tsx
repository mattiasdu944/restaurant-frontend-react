
import { Button } from '@heroui/button'
import { useCategories } from '../hooks/useCategories'

export const CategoryFilter = () => {

    const { categories, isLoading } = useCategories();

    if (isLoading) {
        return (
            <div className="container">
                <p>Cargando...</p>
            </div>
        )
    }

    return (
        <section>
            <div className="container">
                <ul className='flex items-center gap-4'>
                    {
                        categories?.map(category => (
                            <Button
                                as='li'
                                key={category.id}
                                className='px-4 text-lg'
                                variant='flat'
                                radius='lg'

                            >
                                {category.name}
                            </Button>
                        ))
                    }
                </ul>
            </div>

        </section>
    )
}
