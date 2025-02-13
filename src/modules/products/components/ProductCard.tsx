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
                <h3 className="text-center text-2xl line-clamp-1 ">
                    { product.name }
                </h3>
                
                <p className="text-center text-primary-500 font-bold text-2xl">
                    ${ product.price }
                </p>

                <p className="text-lg text-center">
                    <span>{ product.stock }u.</span> Disponibles
                </p>

        
            </CardBody>
        </Card>
    )
}

