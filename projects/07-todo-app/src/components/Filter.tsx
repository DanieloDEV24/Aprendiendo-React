import { FILTERS_BUTTONS } from "../assets/lib/const"
import { type FilterValueType } from "../assets/lib/types"


export const Filters = ({filterSelected, onFilterChange}: {filterSelected: FilterValueType, onFilterChange: (param: FilterValueType) => void}) => {
    return (
        <ul className="filters">
           {
            // Como es un onjeto (FILTERS_BUTTONS), debemos de usar propiedad de js Object.entries
            // convirtiendolo de esta manera en un array y pudiendo así recorrerlo con map
                Object.entries(FILTERS_BUTTONS).map(([key, {href, literal}]) => {
                    const className = (key === filterSelected) ? 'selected' : ''
                    return (
                        <li key={key}>
                            <a 
                                href={href}
                                className={className}
                                onClick={(event) => {
                                    event.preventDefault()
                                    onFilterChange(key as FilterValueType)
                                }}
                                >{literal}</a>
                        </li>
                    )
                })
           }
           
        </ul>
    )
}