import { useMutation } from "@tanstack/react-query"
import authService from '../services/actions'
import { handleActionError } from "../../../lib/helpers"
import { addToast } from "@heroui/toast"
import { useAuthStore } from "../store/useAuthStore"
import { useNavigate } from "react-router"

export const useLogin = () => {

    const { loginUser } = useAuthStore();
    const navigate = useNavigate()


    const { mutate, isPending } = useMutation({
        mutationFn: authService.login,
        onSuccess: ({ token, user }) => {
            loginUser(user, token)
            addToast({
                title: "Inicio de sesion correcto",
                color: "success",
            });
            navigate('/admin/pos');
        },
        onError: (error) => {
            const response = handleActionError(error)
            addToast({
                title: response.error,
                color: "danger",
            })
        }

    })

    const handleSubmit = async ( e: React.FormEvent<HTMLFormElement> ) => {

        e.preventDefault();

        const form = e.target as HTMLFormElement;

        const email = form.elements.namedItem('email') as HTMLInputElement;
        const password = form.elements.namedItem('password') as HTMLInputElement;

        mutate({
            email: email.value,
            password: password.value
        });

        form.reset();

    }


    return {
        isPending,
        handleSubmit
    }

}