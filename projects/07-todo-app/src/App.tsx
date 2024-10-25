import { todosSave } from './server/todos.json'
import { useState } from 'react'
import { Todos } from './components/Todos'
//import { addTodo, removeAllCompletedTodos, removeTodo } from './assets/lib/fetching'
import { TODO_FILTERS } from './assets/lib/const'
import { FilterValueType } from './assets/lib/types'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
// import { changeStateTodo } from './assets/lib/fetching'
import { removeTodo, completedTodo } from './assets/lib/functions'

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(todosSave) // Estado que se encarga de actializar el valor de los todos
  const [filterSelected, setFilterSelected] = useState<FilterValueType>(TODO_FILTERS.ALL) // Estado que se encarga de actualizar los filtros

  // Función para eliminar un todo de la lista y actualizar el estado de los todos
  // const handleRemove = async (id: number) => {
  //   removeTodo({id: id}) // removeTodos --> Función del archivo functions.ts
  //   setTodos(todosSave);
  // }

  const handleRemove = (id: number) => {
    const newTodos = removeTodo({id: id, todos: todos});
    setTodos(newTodos);
  }

  // Función para cambiar el estado de completado de un todo y actualizar el estado de los todos
  // const handleCompleted = async ({id, completed}: {id: number, completed:boolean}) => {
  //   changeStateTodo({id: id, state: completed}) // completedTodo --> Función del archivo functions.ts
  //   setTodos(todosSave);
  // }

  const handleCompleted = ({id, completed}: {id: number, completed:boolean}) => {
    const newTodos = completedTodo({id: id, completed: completed, todos: todos});
    setTodos(newTodos);
  }

  // Función para cambiar el filtro de la lista y actualizar el estado del filtro
  const handleFilterChange = (filter: FilterValueType): void => {
    console.log(filter)
    setFilterSelected(filter)
  }

  const filteredTodos = todos.filter(todo => {
    console.log(filterSelected)
    if(filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if(filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })

  const handleRemoveAllCompleted = () => {
    const newTodos = todosSave.filter(todo => !todo.completed)
    setTodos(newTodos)
  }

  const handleAddTodo = (title: string) => {
    const newTodos = [...todosSave,
      {
        id: (todosSave[todosSave.length - 1].id) + 1,
        title: title,
        completed: false,
      }
    ]
    setTodos(newTodos)
  }

  return (
    <div className='todoapp'>
      <Header onAddTodo={handleAddTodo}></Header>
      <Todos onRemoveTodo={handleRemove} onToggleTodo ={handleCompleted} todos={filteredTodos}/>
      <Footer 
        activeCount={todos.filter(todo => !todo.completed).length}
        completedCount={todos.filter(todo => todo.completed).length}
        onClearCompleted={handleRemoveAllCompleted}
        filterSelected={filterSelected}
        handleFilterChange={handleFilterChange}  
      />
    </div>
  )
}

export default App
