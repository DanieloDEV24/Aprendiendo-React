
import { CreateTodo } from "./CreateTodo"
export const Header = ({onAddTodo}: {onAddTodo: (title: string) => void}) => {
    return (
        <header className="header">
            <h1>Todos</h1>
            <CreateTodo saveTodo={onAddTodo}></CreateTodo>
        </header>

        
    )
}