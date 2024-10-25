// ** ------------------------------ FUNCIONES --------------------------- ** //
// ** Este archivo contiene las funciones de utilidad que usamos en la app ** //

import { TodosType } from "./types"

/**
 * removeTodo() --> Función que devuelve los todos que son diferente al id pasado, 
 * simulando un borrado
 * @param id : number --> Numero id del elemento que queremos borrar 
 * @param todos : TodoType[] --> Lista de todos  
 * @returns 
 */
export const removeTodo = ({id, todos}: {id: number, todos: TodosType[]}) => {
    const newTodos = todos.filter(todo => todo.id !== id)
    return newTodos
}

/**
 * completedTodo() --> Función que recorre la lista de todo, cambiando la propiedad completed, 
 * del elemento cuyo id es igual al pasado como parametro, añadiendole el valor completed pasado
 * como parametro
 * @param id: number --> id del elemento a cambiar 
 * @param completed: boolean --> valor que queremos que tenga el elemento 
 * @param todos: TodosType[] --> Lista de todos
 * @returns 
 */
export const completedTodo = ({id, completed, todos}: {id: number, completed:boolean, todos: TodosType[]}) => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {...todo, completed }
      }
      return todo
    })

    return newTodos
  }