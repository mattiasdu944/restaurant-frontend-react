import { Outlet } from "react-router"
import { Sidebar } from "../components/Sidebar"

export const AdminLayout = () => {
    return (
        <div className="flex h-screen">
            {/* TOASTER */}


            {/* SIDEMENU */}
            <Sidebar/>

            {/* CONTENIDO */}
            <div className="flex w-full h-screen overflow-y-auto">
                <main className="w-full">
                    <Outlet/>
                </main>
            </div>

        </div>
    )
}
