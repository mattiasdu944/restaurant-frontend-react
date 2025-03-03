import { create, StateCreator } from "zustand";
import { User } from "../interface/user.interface";
import { useLogin } from "../hooks/useLogin";



export interface AuthStoreState {
    user: User | undefined;
    token: string | undefined;
    authStatus: "authenticated" | "unauthenticated" | "checking";
}

export interface AuthStoreActions {
    loginUser: (user: User, token: string) => void
    setAuthStatus: (status: "authenticated" | "unauthenticated" | "checking") => void
    logoutUser: () => void
    // loginUser: (email: string, password: string) => Promise<void>
    // register: ( user: Partial<User> ) => Promise<void>

    // logout: () => Promise<void>
}



const storeApi: StateCreator<AuthStoreActions & AuthStoreState> = (set, get) => ({
    user: undefined,

    token: localStorage.getItem('RESTAURANT_TOKEN') || undefined,
    authStatus: localStorage.getItem('RESTAURANT_TOKEN') ? "authenticated" : "unauthenticated",

    
    loginUser: (user: User, token: string) => {
        localStorage.setItem('RESTAURANT_TOKEN', token);
        set({ user: user, authStatus: "authenticated" })
    },

    setAuthStatus: (status: "authenticated" | "unauthenticated" | "checking") => {
        set({ authStatus: status })
    },

    logoutUser: () => {
        localStorage.removeItem('RESTAURANT_TOKEN');
        set({ user: undefined, authStatus: "unauthenticated" })
    }


})

export const useAuthStore = create<AuthStoreActions & AuthStoreState>()(
    storeApi,
)