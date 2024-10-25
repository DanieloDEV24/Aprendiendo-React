// ** ------------------------- TIPADO ---------------------- ** //
// ** Este archivo contiene el tipado ts que usamos en la app ** //

import { TODO_FILTERS } from "./const"

// TodosType --> Tipado de cada uno de los elementos de la lista todo
export type TodosType = {
    id: number, 
    title: string,
    completed: boolean,
}

export type FilterValueType = typeof TODO_FILTERS[keyof typeof TODO_FILTERS]