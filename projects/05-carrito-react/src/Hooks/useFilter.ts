import { Product } from '../assets/Lib/types'
import { categories } from '../assets/Lib/functions'
import { useContext } from 'react'
import { FiltersContext } from '../Context/filters'
export function useFilter () {
    // Estado del filtro --> Lo hacemos con estado pq de esta manera es muy cómodo ya que se queda la propiedad aunque renderice la app 
    // const [filter, setFilter] = useState({
    //   category: 'all', 
    //   minPrice: 0,
    //   maxPrice: maxPrice({products})
    // })

    const {filter, setFilter} = useContext(FiltersContext)
    
  
    // Función para filtrar los productos según el filtro de precio y categoría
    const filteredProducts = (products: Product[]): Product[] => {
      return products.filter((product) => {
        return product.price >= filter.minPrice && (filter.category === 'all' || product.category === filter.category) && product.price <= filter.maxPrice;
      })
    }

    return {filteredProducts, setFilter,  categories, filter}
}