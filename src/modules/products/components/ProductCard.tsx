import { Card, CardBody } from "@heroui/card";
import { Product } from "../interfaces/product";
import { Image } from "@heroui/image";


interface Props {
    product: Product;
}


export const ProductCard = ({ product }: Props) => {
    return (
        <Card
            className="product__card"
            isPressable
            shadow="sm"
        >
            <CardBody>
                <div className="w-full mb-4">
                    <Image
                        className="product__card--image"
                        src={ product.image }
                        width='100%'
                    />
                </div>

        
            </CardBody>
        </Card>
    )
}

