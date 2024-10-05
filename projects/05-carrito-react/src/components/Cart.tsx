// import carroBorrar from '../assets/images/carroBorrar.png'
import carroVacio from '../assets/img/carro-vacio.png'
import carroIcono from '../assets/img/carro.png'
import '../Cart.css'
import { useCart } from '../Hooks/useCart'


 
export const CartItem = ({name, category, price, quantity, addToCart}: {name: string, category: string, price: number, quantity: number, addToCart: () => void}) => {

    return (
        <li>
            <h2>{name} - ${price}</h2>
            <p>Categoría: {category}</p>
            <footer>
                <small>Cant: {quantity}</small>
                <button style={{ background: '#646cff' }} onClick={addToCart}>
                    +
                </button>
            </footer>
           
        </li>
    )
}

export const Cart = () => {
    const { cartItems, clearCart, addToCart } = useCart();
    return (
        <>
            <label className='cart-button' htmlFor="cart">
                <img src={carroIcono} alt="" style={{width: 30}}/>
            </label>

            <input type="checkbox"  id="cart" hidden/>

            <aside className='cart'>
                <ul>
                    {
                        cartItems.map(item => (
                            <CartItem 
                                name={item.product.title} 
                                category={item.product.category} 
                                price={item.product.price} 
                                quantity={item.quantity} 
                                addToCart={() => addToCart(item.product)}
                            />
                        ))
                    }
                </ul>
                <button style={{ background: '#646cff' }} onClick={() => clearCart()}>
                    <img src={carroVacio} alt="Vaciar Carro" style={{ width: 30 }} />
                </button>
            </aside>
            
        </>
    )
}