import { Route, Routes } from "react-router"
import { LoginPage } from "./pages/auth/login-page"
import { NotFoundComponent } from "./modules/core/components/NotFoundComponent"
import { AuthLayout } from "./modules/core/layouts/auth-layout"
import { AdminLayout } from "./modules/core/layouts/admin-layout"
import { CategoriesPage } from "./pages/admin/categories/categories-page"
import { ProductsPage } from "./pages/admin/products/products-page"


const App = () => {

  return (
    <Routes>

      {/* AUTH */}
      <Route path="/auth" element={ <AuthLayout/> }>
        <Route path="login" element={ <LoginPage/> } />
      </Route>

      {/* DASHBOARD */}
      <Route path="/admin" element={ <AdminLayout/> }>
        <Route path="categories" element={ <CategoriesPage/> } />
        <Route path="products" element={ <ProductsPage/> } />
      </Route>

      {/* NOT FOUND */}
      <Route path="*" element={ <NotFoundComponent/> } />


    </Routes>

  )

}

export default App