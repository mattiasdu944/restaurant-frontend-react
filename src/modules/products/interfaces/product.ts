export interface Product {
    id: string;
    name: string;
    slug: string;
    description: string;
    stock: number;
    price: number;
    enable: boolean;
    image: string;
    categoryId: string;
    createdAt: Date;
    updatedAt: Date;
    category: ProductCategory;
}


export interface ProductCategory {
    name: string;
    slug: string;
}

