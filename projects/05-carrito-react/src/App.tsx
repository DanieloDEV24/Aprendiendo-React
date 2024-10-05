import './App.css'
import { products } from './mocks/products.json'
import { Products } from './components/Products'
import { Filter } from './components/Filter'
import { useFilter } from './Hooks/useFilter'
import { Footer } from './components/Footer'
import { Cart } from './components/Cart'
import { CartProvider } from './Context/cart'

function App() {
  const {filteredProducts, categories} = useFilter()
  
  return (
   <CartProvider>
        <h2>Carrito de la compra 🛒</h2>
        <Filter max={products.reduce((max, product) => Math.max(max, product.price), 0)} options={categories({products})} />
        <Cart />
        <Products products={filteredProducts(products)}></Products>
        <Footer/>
   </CartProvider>
   
  )
}

export default App
