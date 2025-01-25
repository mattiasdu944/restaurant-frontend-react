import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@heroui/table"


export const CategoryTable = () => {
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
                <TableRow>
                    <TableCell>#123</TableCell>
                    <TableCell>Pizzas</TableCell>
                    <TableCell width={300} >
                        <p className="line-clamp-2">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, eaque cumque quidem, eius delectus et ex illum corrupti ad debitis suscipit obcaecati impedit possimus quo quasi? Accusantium asperiores ratione quo.
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


            </TableBody>


        </Table>


    )
}
