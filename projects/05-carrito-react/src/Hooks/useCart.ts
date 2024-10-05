import { useContext } from 'react'
import { CartContext } from '../Context/cart'

export const useCart = () => {
    const contexto = useContext(CartContext)
    if(contexto === undefined) {
        throw new Error('useCart debe ser usado dentro de un contexto CartProvider')  // Si no se encuentra el contexto, lanza una excepción
    }
    return contexto 
}