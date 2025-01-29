import { Product } from "./product";

export interface ProductsResponse {
    products: Product[];
    meta:     PaginationMeta;
}

export interface PaginationMeta {
    totalItems: number;
    page:       number;
    lastPage:   number;
}

