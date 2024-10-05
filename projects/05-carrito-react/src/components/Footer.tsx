import '../Footer.css'
import { useFilter } from '../Hooks/useFilter'
import { useCart } from '../Hooks/useCart'

export const Footer = () => {
    const {filter} = useFilter()
    const {cartItems} = useCart()
    return (
        <footer className="footer">
            {/* <h4>Aprendiendo React: &nbsp; <span>@DanieloDEV24</span></h4>
            <h5>Shopping Cart with useContext & useReducer</h5> */}
            <small>Filtros: </small>{
                JSON.stringify(filter)
            }
            <small> &nbsp;&nbsp;| &nbsp; Cesta: </small>{
                JSON.stringify(cartItems)
            }
        </footer>
    )
}