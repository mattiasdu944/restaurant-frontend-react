import restaurantDb from "../../../lib/api/restaurantDb";
import { Product } from "../interfaces/product";
import { ProductsResponse } from "../interfaces/products-response";


const getAllProducts = async (page: number = 1, limit: number = 5) => {
    const token = localStorage.getItem('RESTAURANT_TOKEN')

    const { data } = await restaurantDb.get<ProductsResponse>('/products', {
        params: {
            page,
            limit
        },
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    return data


}


const getProductsByCategory = async (category: string) => {
    const token = localStorage.getItem('RESTAURANT_TOKEN')

    const { data } = await restaurantDb.get<{ products: Product[] }>(`/products/category/${category}`,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )

    return data

}


export default {
    getAllProducts,
    getProductsByCategory
}