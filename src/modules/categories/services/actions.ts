import restaurantDb from "../../../lib/api/restaurantDb"
import { CategoriesResponse } from "../interfaces/categories-response";
import { CreateCategoryOptions } from "../interfaces/create-category-options";
import { handleActionError } from "../../../lib/helpers";
import { UpdateCategoryOptions } from "../interfaces/update-category-options";




const getAllCategories = async () => {
    const token = localStorage.getItem('RESTAURANT_TOKEN')
    
    const { data } = await restaurantDb.get<CategoriesResponse>('/categories',{
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return data.categories;

}


const createCategory = async (category: CreateCategoryOptions) => {
    const token = localStorage.getItem('RESTAURANT_TOKEN')


    try {
        const { data } = await restaurantDb.post('/categories', category, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });


        return {
            data,
            error: null
        }

    } catch (error) {
        return handleActionError(error);
    }
}



const deleteCategory = async (id: string) => {
    const token = localStorage.getItem('RESTAURANT_TOKEN')


    try {
        const { data } = await restaurantDb.delete(`/categories/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        return {
            data,
            error: null
        }

    } catch (error) {
        return handleActionError(error);
    }
}

const updateCategory = async (id: string, category: UpdateCategoryOptions) => {
    const token = localStorage.getItem('RESTAURANT_TOKEN')

    try {
        const { data } = await restaurantDb.patch(`/categories/${id}`, category, {
            headers: {
                Authorization: `Bearer ${token}`
            
            }
        });

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
    updateCategory,
}

