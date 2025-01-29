import { Invoice01Icon, KitchenUtensilsIcon, Layers01Icon, UserGroupIcon } from "hugeicons-react";


export const adminSidebarMenu = [
    {
        name: "POS",
        path: "/admin/pos",
        icon: <KitchenUtensilsIcon size={22}/>
    },
    {
        name: "Categorias",
        path: "/admin/categories",
        icon: <Layers01Icon size={22}/>
    },
    {
        name: "Pedidos",
        path: "/admin/orders",
        icon: <Invoice01Icon size={22}/>
    },
    {
        name: "Usuarios",
        path: "/admin/users",
        icon: <UserGroupIcon size={22}/>
    }
]