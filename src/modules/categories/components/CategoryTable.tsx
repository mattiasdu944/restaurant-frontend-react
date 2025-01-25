import { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@heroui/table"

import categoriesServices from '../services/actions'
import { Category } from "../interfaces/category";

export const CategoryTable = () => {

    const [isLoading, setisLoading] = useState(false);
    const [categories, setCategories] = useState<Category[]>([]);


    const getCategories = async () => {

        setisLoading(true);
        const data = await categoriesServices.getAllCategories();
        console.log(data)
        setisLoading(false);
        setCategories(data);
    }

    useEffect(() => {
        getCategories();
    }, [])


    if( isLoading ){
        return (
            <section className="min-h-[80vh] flex items-center justify-center">
                <p>Cargando...</p>
            </section>
        )
    }

    return (
        <Table>
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
                    categories.map(category => (
                        <TableRow>
                            <TableCell width={20}>{ category.id }</TableCell>
                            <TableCell>{ category.name }</TableCell>
                            <TableCell width={300} >
                                <p className="line-clamp-2">
                                    { category.description }
                                </p>
                            </TableCell>
                            <TableCell>2024-02-02</TableCell>
                            <TableCell>2024-02-02</TableCell>
                            <TableCell>
                                <div className="flex gap-2">
                                    <button className="btn btn-primary">Editar</button>
                                    <button className="btn btn-danger">Eliminar</button>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    )
}
