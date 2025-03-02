import { Outlet } from "react-router"
import { Sidebar } from "../components/Sidebar"
import { SideCart } from "../../cart/components/SideCart"
import { ToastProvider } from "@heroui/toast"

export const AdminLayout = () => {
    return (
        <div className="flex h-screen">
            {/* TOASTER */}
            <ToastProvider
                placement="top-center"
            />

            {/* SIDEMENU */}
            <Sidebar/>

            {/* CONTENIDO */}
            <div className="flex w-full h-screen overflow-y-auto">
                <main className="w-full pb-8">
                    <Outlet/>
                </main>
                <SideCart/>
            </div>

        </div>
    )
}
