import { type FilterValueType } from "../assets/lib/types"
import { Filters } from "./Filter"

export const Footer = ({activeCount, completedCount, filterSelected, onClearCompleted, handleFilterChange}: {activeCount: number, completedCount: number, filterSelected: FilterValueType, onClearCompleted: () => void, handleFilterChange: (filter: FilterValueType) => void}) => {
    
    return (
        <footer className="footer">
        <span className="todo-count">
            <strong>{activeCount} </strong>tareas pendientes
        </span>

        <Filters 
            filterSelected = {filterSelected} // Filtro seleccionado
            onFilterChange = {handleFilterChange} // Funcion de cambio de filtro
        />

        {
            completedCount > 0 && (
                <button className="clear-completed" onClick={onClearCompleted}>Borrar Completadas</button>
            )
        }
    </footer>
    )
}