import { Route, Routes } from "react-router"
import { LoginPage } from "./pages/auth/login-page"
import { NotFoundComponent } from "./modules/core/components/NotFoundComponent"
import { AuthLayout } from "./modules/core/layouts/auth-layout"
import { AdminLayout } from "./modules/core/layouts/admin-layout"
import { CategoriesPage } from "./pages/admin/categories/categories-page"
import { POSPage } from "./pages/admin/pos/pos-page"
import { OrdersPage } from "./pages/admin/orders/orders-page"


const App = () => {

  return (
    <Routes>

      {/* AUTH */}
      <Route path="/auth" element={ <AuthLayout/> }>
        <Route path="login" element={ <LoginPage/> } />
      </Route>

      {/* DASHBOARD */}
      <Route path="/admin" element={ <AdminLayout/> }>
        <Route path="pos" element={ <POSPage/> } />
        <Route path="categories" element={ <CategoriesPage/> } />
        <Route path="orders" element={ <OrdersPage/> } />
      </Route>

      {/* NOT FOUND */}
      <Route path="*" element={ <NotFoundComponent/> } />


    </Routes>

  )

}

export default App