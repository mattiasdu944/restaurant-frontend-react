import { Button } from "@heroui/button";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@heroui/modal";
import { Order } from "../interfaces/order.interface";


interface Props {
    order: Order;
}

export const OrderDetailsModal = ({ order }: Props) => {

    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    return (
        <>
            <Button onPress={onOpen} color="primary">Ver orden</Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader>Detalles de la orden</ModalHeader>
                            <ModalBody>
                                <div>
                                    <h3>Cliente</h3>
                                    <p>Nombre: { order.clientName }</p>
                                    <h3>Productos</h3>
                                    <ul>
                                        {
                                            order.orderItems.map((item) => (
                                                <li key={item.productId}>
                                                    <p className="font-medium">{ item.productName }</p>
                                                    <p>{ item.quantity } x { item.productPrice }Bs</p>
                                                    <p>Total: { order.total }</p>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
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
