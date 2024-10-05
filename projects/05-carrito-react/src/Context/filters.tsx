import { createContext, useState } from 'react';
import { maxPrice } from '../assets/Lib/functions'
import { products } from '../mocks/products.json'
import { FilterContextType, FilterType } from '../assets/Lib/types';

const defaultFilter: FilterType = {
    category: 'all', 
    minPrice: 0, 
    maxPrice: maxPrice({products})
}
// 1. Creamos el contexto 
export const FiltersContext = createContext<FilterContextType>(
    {
        filter: defaultFilter,
        setFilter: () => {}
    }
);

// 2. Creamos el Provider, para proveer el contexto 
export const FiltersProvider = ({ children }: {children: React.ReactNode}) => {
    const [filter, setFilter] = useState(
        {
            category: 'all', 
            minPrice: 0, 
            maxPrice: maxPrice({products})}
    )
    return (
        
        <FiltersContext.Provider value={{
            filter, 
            setFilter
        }}
        >
            {children}
        </FiltersContext.Provider>
    )
}