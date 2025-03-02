export interface Order {
    orderItems: OrderItem[];
    id:         string;
    total:      number;
    clientName: string;
    createdAt:  Date;
    updatedAt:  Date;
    userId:     string;
}

export interface OrderItem {
    productId:    string;
    productName:  string;
    productPrice: number;
    quantity:     number;
    subTotal:     number;
}