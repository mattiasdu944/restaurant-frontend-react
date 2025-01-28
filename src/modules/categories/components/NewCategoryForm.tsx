import { Button } from "@heroui/button"
import { Input } from "@heroui/input"
import { useCreateCategory } from "../hooks/useCreateCategory"


export const NewCategoryForm = () => {

    const { handleSubmit, isPending } = useCreateCategory();

    return (
        <form onSubmit={ handleSubmit } className="space-y-6">
            <h2>Agrega una categoria</h2>

            <div className="flex flex-col md:flex-row items-center justify-between gap-4">

                <Input
                    name="name"
                    label="Nombre"
                    placeholder="Nombre de la categoria"

                />

                <Input
                    name="description"
                    label="Descripción"
                    placeholder="Agrega una descripcion"

                />

            </div>

            <Button
                isLoading={ isPending }
                isDisabled={ isPending }
                type="submit"
                color="primary"
            >
                Guardar
            </Button>


        </form>
    )
}
