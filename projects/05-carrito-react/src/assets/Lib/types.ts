import { ActionsReducerCartEnum } from "./enums";
export type Product = {
    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number, 
    brand: string,
    category: string,
}

export type FilterContextType = {
    filter: FilterType;
    setFilter: (filter: FilterType) => void;
}

export type FilterType = {
    category: string;
    minPrice: number;
    maxPrice: number;
}

export type CartType = {
    cartItems: CartItemsType[];
    // setCartItems: (cartItems: CartItemsType[]) => void;
    addToCart: (product: Product) => void;
    clearCart: () => void;
    removeFromCart: (product: Product) => void;
}

export type CartItemsType = {
    product: Product;
    quantity: number;
}

export type ActionType = 
| {type: ActionsReducerCartEnum.ADD_TO_CART; payload: Product}
| {type: ActionsReducerCartEnum.REMOVE_FROM_CART; payload: Product}
| {type: ActionsReducerCartEnum.CLEAR_CART; payload: object}

