import restaurantDb from "../../../lib/api/restaurantDb"
import { CategoriesResponse } from "../interfaces/categories-response";
import { CreateCategoryOptions } from "../interfaces/create-category-options";
import { handleActionError } from "../../../lib/helpers";
import { UpdateCategoryOptions } from "../interfaces/update-category-options";




const getAllCategories = async () => {

    const { data } = await restaurantDb.get<CategoriesResponse>('/categories');

    return data.categories;

}


const createCategory = async (category: CreateCategoryOptions) => {

    try {
        const { data } = await restaurantDb.post('/categories', category);


        return {
            data,
            error: null
        }

    } catch (error) {
        return handleActionError(error);
    }
}



const deleteCategory = async (id: string) => {

    try {
        const { data } = await restaurantDb.delete(`/categories/${id}`);

        return {
            data,
            error: null
        }

    } catch (error) {
        return handleActionError(error);
    }
}

const updateCategory = async (id: string, category: UpdateCategoryOptions) => {

    try {
        const { data } = await restaurantDb.patch(`/categories/${id}`, category);

        return {
            data,
            error: null
        }

    } catch (error) {
        return handleActionError(error);
    }
}



export default {
    createCategory,
    getAllCategories,
    deleteCategory,
}

