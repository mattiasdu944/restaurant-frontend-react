import restaurantDb from "../../../lib/api/restaurantDb"
import { CategoriesResponse } from "../interfaces/categories-response";




const getAllCategories = async () => {

    const { data } = await restaurantDb.get<CategoriesResponse>('/categories');

    return data.categories;

}




export default {
    getAllCategories
}

