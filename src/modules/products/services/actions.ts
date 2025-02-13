import restaurantDb from "../../../lib/api/restaurantDb";
import { Product } from "../interfaces/product";
import { ProductsResponse } from "../interfaces/products-response";



const getAllProducts = async (page: number = 1, limit: number = 5) => {

    const { data } = await restaurantDb.get<ProductsResponse>('/products', {
        params: {
            page,
            limit
        }
    })

    return data


}


const getProductsByCategory = async (category: string) => {

    const { data } = await restaurantDb.get<{ products: Product[] }>(`/products/category/${category}`)

    return data

}


export default {
    getAllProducts,
    getProductsByCategory
}