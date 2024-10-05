import { createContext, useReducer } from 'react';
import { Product, CartType, CartItemsType, ActionType } from '../assets/Lib/types';
import { ActionsReducerCartEnum } from '../assets/Lib/enums';

const defaultCart: CartItemsType[] = [];
// ?? useReducer --> hooks que nos permite manejar es estado de manera escalable y que recibe el estado actual 
// ?? y la función que debe hacer, devolviendonos el nuevo estado 
// ?? Se debe usar reducers para poder sacar la logica del estado fuera y que de esta manera sea mas facil testear... 
// ?? Es interesante usarlo cunado usamos muchos useState, pq estamos usando un codigo muy fragmentado

const reducer = (state: CartItemsType[], action: ActionType): CartItemsType[] => {
    const { type, payload } = action
    const product = payload as Product;
    switch(type) {
        case ActionsReducerCartEnum.ADD_TO_CART: {
            const productInCart = state.findIndex(item => item.product.id === payload.id);
            if(productInCart > -1){
                // Creamos una copia del carrito 
                // ?? Funcion structuredClone --> Copia profunda de un objeto
                const newCart = structuredClone(state);
                newCart[productInCart].quantity+=1;
                return newCart;
                
            }
            else {
                return[...state, {product, quantity: 1}];
            }
        }

        case ActionsReducerCartEnum.REMOVE_FROM_CART: {
            const newCart = [...state];
            const indexRemoveElement = newCart.findIndex(item => item.product.id === payload.id);
            newCart.splice(indexRemoveElement, 1);
            return newCart;
        }

        case ActionsReducerCartEnum.CLEAR_CART: {
            return defaultCart;
        }

        default: return state;
    }
   
}

export const CartContext = createContext<CartType>(
    {
        cartItems: defaultCart,
        addToCart: () => {},
        clearCart: () => {}, 
        removeFromCart: () => {}  
    }
);

export const CartProvider = ({ children }: {children: React.ReactNode}) => {
    const [state, dispatch] = useReducer(reducer, defaultCart);
    
    const addToCart = (product: Product) => dispatch({
        type: ActionsReducerCartEnum.ADD_TO_CART,
        payload: product
    })

    const clearCart = () => dispatch({
        type: ActionsReducerCartEnum.CLEAR_CART,
        payload: {}
    })

    const removeFromCart = (product: Product) => dispatch({
        type: ActionsReducerCartEnum.REMOVE_FROM_CART,
        payload: product
    })

   
    return (
        <CartContext.Provider value={{ cartItems: state ,addToCart, clearCart, removeFromCart}}>
            {children}
        </CartContext.Provider>
    )
}