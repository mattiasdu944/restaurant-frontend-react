import { create } from "zustand";
import { Product } from '../../products/interfaces/product';
import { Cart } from "../interfaces/cart.interface";



type CartStore = {
    // STATES
    total: number;
    cart: Cart[];

    // ACTIONS o METHODS
    calculateTotal: () => void;
    addProductToCart: (product: Product) => void;
    removeProductFromCart: (id: string) => void;
    incrementQuantity: (id: string) => void;
    decrementQuantity: (id: string) => void;
    clearCart: () => void;
}

export const useCartStore = create<CartStore>()((set, get) => ({

    cart: [],
    total: 0,

    addProductToCart(product: Product) {
        const { cart, calculateTotal } = get()

        const productInCart = cart.some(item => item.productId === product.id);

        if( !productInCart ){
            set({
                cart: [
                    ...cart,
                    {
                        productId: product.id,
                        productName: product.name,
                        productPrice: product.price,
                        quantity: 1,
                        subTotal: product.price
                    }
                ]
            })

            calculateTotal()
        }
        console.log(cart)

    },

    removeProductFromCart(id) {
        const { calculateTotal, cart } = get();

        const updateCartProducts = cart.filter(item => item.productId !== id);

        set({ cart: updateCartProducts });

        calculateTotal();
    },

    incrementQuantity(id) {
        const { cart, calculateTotal } = get();

        const updateCartProducts = cart.map(item => {
            if( item.productId == id ){
                return { ...item, quantity: item.quantity + 1 }
            }

            return item;
        })

        set({ cart: updateCartProducts });
        calculateTotal();

    },

    decrementQuantity(id) {
        const { cart, calculateTotal, removeProductFromCart } = get();
        
        const updateCartProducts = cart.map(item => {

            if( item.quantity == 1 ){
                return item;
            } 

            if( item.productId == id ){
                return { ...item, quantity: item.quantity - 1 }
            }

            return item;
        })

        set({ cart: updateCartProducts });
        calculateTotal();

    },

    calculateTotal() {
        const { cart } = get();
        let subTotal = 0;

        cart.forEach((item) => {
            subTotal += item.productPrice * item.quantity
        })

        set({ total: subTotal })

    },

    clearCart() {
        set({
            cart: [],
            total: 0
        })
    },
    
}))
