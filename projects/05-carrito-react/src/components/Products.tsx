import { Product } from '../assets/Lib/types'
import addToCartImg from '../assets/img/add-to-cart.png';
import removeCart from '../assets/img/carroBorrar.png'
import '../Products.css'
import { useCart } from '../Hooks/useCart';
// ** Listado de los productos que obtenemos del json products.json **
export const Products = ({products} : {products: Product[]}) => {
    const { addToCart, cartItems, removeFromCart } = useCart();
    const checkCart = (product: Product) => {
        // ?? Array.some --> Recorre cada elemento del array y devuelve true si encuentra un elemento que cumpla con la condición proporcionada
        return cartItems.some(item => item.product.id === product.id);
    }
    return (
        <main className='products'>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                        <p>Caegoria: {product.category}</p>
                        <p>Precio: ${product.price}</p>
                        <div style={{display: 'flex', justifyContent:'center'}}>
                            {
                                (checkCart(product)) 
                                ? 
                                <button style={{padding: 10, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 5, background: '#ec7063'}} onClick={() => removeFromCart(product)}>
                                    <span style={{fontSize: '16px'}}>Remove from cart</span>
                                    <img src={removeCart} alt="borrar del carrito" style={{width: 30}}/>
                                </button> 
                                : 
                                <button style={{padding: 10, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 5, background: '#646cff'}} onClick={() => addToCart(product)}>
                                    <span style={{fontSize: '16px'}}>Add To Cart</span>
                                    <img src={addToCartImg} alt="añadir al carrito" style={{width: 30}}/>
                                </button>
                            }
                        </div>
                    </li>
                ))}
            </ul>
        </main>
    )
}