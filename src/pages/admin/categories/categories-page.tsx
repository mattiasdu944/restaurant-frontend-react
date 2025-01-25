import { TitlePage } from "../../../modules/core/components/TitlePage"
import { CategoryTable } from "../../../modules/categories/components/CategoryTable"
import { NewCategoryForm } from "../../../modules/categories/components/NewCategoryForm"


export const CategoriesPage = () => {
    return (
        <>
            <header className="categories__header">
                <div className="container">
                    <TitlePage/>
                </div>
            </header>


            <section>
                <div className="categories__form">
                    <NewCategoryForm/>
                </div>
            </section>

            <section>
                <div className="container">
                    <CategoryTable/>
                </div>
            </section>
        </>

    )
}
