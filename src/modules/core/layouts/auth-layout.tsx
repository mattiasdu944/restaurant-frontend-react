import { ToastProvider } from "@heroui/toast"
import { Outlet } from "react-router"

export const AuthLayout = () => {
    return (
        <>
            <ToastProvider
                placement="top-center"
            />
            <Outlet />
        </>
    )
}
