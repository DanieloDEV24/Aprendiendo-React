import { useState, useRef } from "react"
import '../style.css'

// Todo --> Componente de cada uno de los elementos del todoList, este se encarga de borrar tarea, marcarla como completada...
export const Todo = ({id, title, completed, onRemoveTodo, onToggleTodo}: {id: number, title: string, completed: boolean, onRemoveTodo: (id: number) => void, onToggleTodo:({id, completed}: {id: number, completed: boolean}) => void}) => {

    const [isEditing, setIsEditing] = useState(false)
    const [newLabel, setNewLabel] = useState(title)
    const inputRef = useRef<HTMLInputElement>(null)
    
    const handleDoubleClick = () => {
        setIsEditing(true)
    }

    const handleSubmitInputNewLabel = (event: React.FormEvent) => {
        event.preventDefault()
        const valueInput = inputRef.current ? inputRef.current.value : title;
        setNewLabel(valueInput)
        setIsEditing(false)
    }

    return (
        <div className="view">
            <input 
                className="toggle" 
                type="checkbox"
                checked= {completed} // Valor que queremos comprobar en los filtros. Cuando "deschekeamos" cambia el valor de este 
                onChange= {(e) => onToggleTodo({id, completed: e.target.checked})} // Funcion de cambio de filtro
            />
            {isEditing ?
                        <form onSubmit={handleSubmitInputNewLabel}>
                            <input type="text" className="newLabelInput" defaultValue={title} ref={inputRef}/>
                        </form> 
                       : 
                        <label onDoubleClick={handleDoubleClick}>{newLabel}</label>}
            
            <input type="hidden" value={id}/>
            {!isEditing && <button className="destroy" onClick={() => onRemoveTodo(id)}></button> }
        </div>
    )
}