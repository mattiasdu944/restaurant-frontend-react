import { TitlePage } from "../../../modules/core/components/TitlePage"
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
        </>

    )
}
