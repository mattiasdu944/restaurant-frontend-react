import { Route, Routes } from "react-router"
import { LoginPage } from "./pages/auth/login-page"
import { NotFoundComponent } from "./modules/core/components/NotFoundComponent"
import { AuthLayout } from "./modules/core/layouts/auth-layout"
import { AdminLayout } from "./modules/core/layouts/admin-layout"
import { CategoriesPage } from "./pages/admin/categories/categories-page"
import { POSPage } from "./pages/admin/pos/pos-page"
import { OrdersPage } from "./pages/admin/orders/orders-page"
import { useAuthStore } from "./modules/auth/store/useAuthStore"
import { Navigate } from "react-router"
import { ProtectedRoutes } from "./modules/core/components/ProtectedRoutes"


const App = () => {



  return (
    <Routes>


      {/* AUTH */}
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="login" element={<LoginPage />} />
      </Route>


      <Route path="/admin" element={ <ProtectedRoutes/> }>
        <Route element={<AdminLayout />}>
          <Route path="pos" element={<POSPage />} />
          <Route path="categories" element={<CategoriesPage />} />
          <Route path="orders" element={<OrdersPage />} />
        </Route>
      </Route>



      {/* NOT FOUND */}
      <Route path="*" element={<NotFoundComponent />} />


    </Routes>

  )

}

export default App