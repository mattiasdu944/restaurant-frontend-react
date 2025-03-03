import restaurantDb from "../../../lib/api/restaurantDb";
import { User } from "../interface/user.interface";



interface LoginOptions {
    email: string;
    password: string
}

const login = async ({ email, password }: LoginOptions) => {

    const { data } = await restaurantDb.post<{ user: User, token: string }>('/auth/login', { email, password })

    return data


}


export default {
    login
}

