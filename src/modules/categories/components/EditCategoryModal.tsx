import { Category } from '../interfaces/category';

import { Edit02Icon } from 'hugeicons-react';
import { Input } from '@heroui/input';
import { Button } from '@heroui/button'
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@heroui/modal';


interface Props {
    category: Category;
}


export const EditCategoryModal = ({ category }: Props) => {

    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <Button 
                onPress={onOpen}
                startContent={ <Edit02Icon size={20}/> }
                size='sm'
                color='secondary'
                variant='light'
                isIconOnly
            />
            
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Editar categoria</ModalHeader>
                            <ModalBody>
                                <Input
                                    name="name"
                                    defaultValue={category.name}
                                    label="Nombre"
                                    placeholder="Nombre de la categoria"

                                />

                                <Input
                                    name="description"
                                    defaultValue={category.description}
                                    label="Descripción"
                                    placeholder="Agrega una descripcion"

                                />

                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={onClose}>
                                    Action
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}
