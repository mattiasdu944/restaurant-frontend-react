
import { Button } from '@heroui/button';
import { Delete02Icon } from 'hugeicons-react';
import { useDeleteCategory } from '../hooks/useDeleteCategory';



interface Props {
    categoryId: string;
}

export const DeleteCategoryButton = ({ categoryId }: Props  ) => {

    const { mutate, isPending } = useDeleteCategory()

    return (
        <Button
            isLoading={ isPending }
            isDisabled={ isPending }
            onPress={() => mutate(categoryId)}
            isIconOnly
            startContent={ <Delete02Icon size={20}/> }
            color='danger'
            size='sm'
            variant='light'
        />
    )
}
