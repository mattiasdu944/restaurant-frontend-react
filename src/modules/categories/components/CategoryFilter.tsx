
import { Button } from '@heroui/button'
import { useCategories } from '../hooks/useCategories'
import { useSearchParams } from 'react-router';

export const CategoryFilter = () => {

    const { categories, isLoading } = useCategories();
    const [ _, setSearchParams] = useSearchParams()


    if (isLoading) {
        return (
            <div className="container">
                <p>Cargando...</p>
            </div>
        )
    }

    const handleClick = (slug?: string) => {

        if (!slug) {
            setSearchParams({});
            return;
        }
        setSearchParams({ category: slug })

    }

    return (
        <section>
            <div className="container">
                <ul className='flex items-center gap-4'>
                    <Button
                        as='li'
                        className='px-4 text-lg'
                        variant='flat'
                        radius='lg'
                        onPress={() => handleClick()}
                    >
                        Todos
                    </Button>
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
