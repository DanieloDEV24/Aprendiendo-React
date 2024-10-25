import { type TodosType } from "../assets/lib/types"
import { Todo } from "./Todo"

// Todos --> Componente que representa el listado de tareas a realizar
export const Todos = ({todos, onRemoveTodo, onToggleTodo}: {todos: TodosType[], onRemoveTodo:(id: number) => void, onToggleTodo:({id, completed}: {id: number, completed: boolean}) => void}) => {
    return (
        <ul className="todo-list">
            {todos.map((todo) => {
                return (
                    <li key={todo.id} className={ (todo.completed) ? 'completed' : '' }>
                        {/* <input type="checkbox" checked={todo.completed} readOnly /> */}
                        <Todo
                        // {...todo} 
                        id={todo.id}
                        title = {todo.title}
                        completed = {todo.completed}
                        onRemoveTodo={onRemoveTodo}
                        onToggleTodo={onToggleTodo}
                        />
                    </li>
                )
            })}
        </ul>
    )
}