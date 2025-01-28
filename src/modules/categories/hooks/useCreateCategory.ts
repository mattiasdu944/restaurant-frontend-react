import { useMutation } from "@tanstack/react-query"
import categoriesServices from '../services/actions'
import { queryClient } from "../../../main"

export const useCreateCategory = () => {


    const { mutate, isPending } = useMutation({
        mutationFn: categoriesServices.createCategory,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['categories'] })
        },
    })

    const handleSubmit = async ( e: React.FormEvent<HTMLFormElement> ) => {

        e.preventDefault();

        const form = e.target as HTMLFormElement;

        const name = form.elements.namedItem('name') as HTMLInputElement;
        const description = form.elements.namedItem('description') as HTMLInputElement;

        mutate({
            name: name.value,
            description: description.value
        });

        form.reset();

    }



    return {
        isPending,
        handleSubmit
    }



}
