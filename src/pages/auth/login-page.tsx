import { Button } from "@heroui/button"
import { Input } from "@heroui/input"
import { useLogin } from "../../modules/auth/hooks/useLogin"


export const LoginPage = () => {

    const { handleSubmit, isPending } = useLogin();

    return (
        <div className="login">
            <form onSubmit={handleSubmit} className="login__form">
                <h1 className="text-xl">Iniciar Sesion</h1>
                <Input
                    label="Correo"
                    isRequired
                    placeholder="Correo electronico"
                    name="email"
                    type="email"
                />

                <Input
                    label="Contraseña"
                    isRequired
                    placeholder="Ingresa tu contraseña"
                    name="password"
                    type="password"
                />

                <Button
                    isLoading={isPending}
                    isDisabled={isPending}
                    type="submit"
                    color="primary"
                >
                    Iniciar Sesion
                </Button>

            </form>
        </div>
    )
}