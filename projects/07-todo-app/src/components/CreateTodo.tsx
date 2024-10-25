import { useState } from "react"
export const CreateTodo = ({saveTodo} : {saveTodo: (title: string) => void}) => {
    const [inputValue, setInputValue] = useState('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        saveTodo(inputValue)
        setInputValue('')
    }


    return (
       <form onSubmit={handleSubmit}>
         <input
        className="new-todo"
        value={inputValue}
        onChange={(e) => {
            setInputValue(e.target.value)
        }}
        placeholder="¿Qué quieres hacer?"
        autoFocus
        type="text" />
       </form>
    )
} 