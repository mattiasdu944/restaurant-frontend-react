import restaurantDb from "../../../lib/api/restaurantDb";
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


export default {
    getAllProducts,
}