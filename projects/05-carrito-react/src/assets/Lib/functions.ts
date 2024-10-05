// ************************************************************ //
// ** Archivo con funciones que usaremos de ayuda por la app ** // 
// ************************************************************ //

import {Product} from './types'

/**
 * maxPrice: Función que devuelve el precio máximo de la lista de productos
 * @param products: Product[] - Lista de productos 
 * @returns maxPrice: number - Precio máximo de la lista de productos
 */
export const maxPrice = ({products} : {products: Product[]} ) => {
    return products.reduce((max, product) => Math.max(max, product.price), 0)
}

/**
 * categories: Función que devuelve las categorías de la lista de productos, sin ser duplicadas
 * @param products: Product[] - Lista de productos 
 * @returns categories: string[] - Lista de categorías sin duplicados
 */
export const categories = ({products} : {products: Product[]} ) => {
    return [...new Set(products.map(product => product.category))]
}

