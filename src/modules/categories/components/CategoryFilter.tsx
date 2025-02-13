
import { Button } from '@heroui/button'
import { useCategories } from '../hooks/useCategories'
import { useNavigate } from 'react-router';

export const CategoryFilter = () => {

    const navigate = useNavigate()
    const { categories, isLoading } = useCategories();


    if (isLoading) {
        return (
            <div className="container">
                <p>Cargando...</p>
            </div>
        )
    }

    const handleClick = (slug: string) => {
        navigate(`/admin/pos?category=${ slug }`)
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
                                onPress={() => handleClick(category.slug)}
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
