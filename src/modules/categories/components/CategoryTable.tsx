import { useCategories } from "../hooks/useCategories";

import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@heroui/table"
import { DeleteCategoryButton } from "./DeleteCategoryButton";
import { EditCategoryModal } from "./EditCategoryModal";
import { formatDate } from '../../../lib/helpers/index';

export const CategoryTable = () => {

    const { categories, isLoading } = useCategories();


    if (isLoading) {
        return <p>Cargando...</p>
    }

    return (

        <Table
            aria-label="Tabla de categorias"
        >
            <TableHeader>
                <TableColumn>ID</TableColumn>
                <TableColumn>Nombre</TableColumn>
                <TableColumn>Descripción</TableColumn>
                <TableColumn>F. Creación</TableColumn>
                <TableColumn>F. Actualización</TableColumn>
                <TableColumn>Acciones</TableColumn>
            </TableHeader>

            <TableBody
                emptyContent={<p>No se encotraron categorias</p>}
            >
                {
                    categories!.map(category => (
                        <TableRow key={category.id}>
                            <TableCell width={20}>
                                <p>{category.id}</p>
                            </TableCell>
                            <TableCell>
                                <p>{category.name}</p>
                            </TableCell>
                            <TableCell width={300} >
                                <p className="line-clamp-2">
                                    {category.description}
                                </p>
                            </TableCell>
                            <TableCell>{ formatDate(category.createdAt) }</TableCell>
                            <TableCell>{ formatDate(category.updatedAt) }</TableCell>
                            <TableCell>
                                <EditCategoryModal category={category} />
                                <DeleteCategoryButton categoryId={ category.id }/>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    )
}
