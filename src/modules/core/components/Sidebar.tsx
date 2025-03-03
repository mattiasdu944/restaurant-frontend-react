import { Logout01Icon, Store01Icon } from "hugeicons-react"
import { adminSidebarMenu } from "../constants"
import { Link, useLocation } from "react-router"
import { Button } from "@heroui/button";
import { useAuthStore } from "../../auth/store/useAuthStore";

export const Sidebar = () => {

    const { pathname } = useLocation();
    const { logoutUser } = useAuthStore();

    

    return (
        <nav className="sidemenu">
            <div className="sidemenu--logo">
                <Store01Icon size={28} />
            </div>

            <ul className="sidemenu--items">
                {
                    adminSidebarMenu.map(option => (
                        <li key={option.path} className="w-full">

                            <Link 
                                to={ option.path }
                                className={`sidemenu__link ${ pathname == option.path ? 'sidemenu__link--active' : '' }`}
                            >
                                {option.icon}
                                {option.name}
                            </Link>
                        </li>
                    ))
                }
            </ul>
            <div className="flex-1"></div>
            <Button
                color="danger"
                variant="light"
                onPress={logoutUser}
                startContent={ <Logout01Icon/> }
            />

        </nav>
    )
}
