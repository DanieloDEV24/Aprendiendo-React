// ** ------------------------ CONSTANTES --------------------- ** //
// ** Este archivo contiene las constantes que usamos en la app ** //

// TODO_FILTERS --> Objeto de solo lectura que contiene los tipos de filtros de todo que hay
export const TODO_FILTERS = {
    ALL: 'all', 
    ACTIVE: 'active',
    COMPLETED: 'completed'  
} as const

// FILTERS_BUTTONS --> Objeto de solo lectura que contiene los botones con los tipos de filtros de todo que hay (los de arriba)
export const FILTERS_BUTTONS = {
    [TODO_FILTERS.ALL]: {
        literal: 'Todos', 
        href: `/?filter=${TODO_FILTERS.ALL}`        
    }, 
    [TODO_FILTERS.ACTIVE]: {
        literal: 'Activos', 
        href: `/?filter=${TODO_FILTERS.ACTIVE}`
    }, 
    [TODO_FILTERS.COMPLETED]: {
        literal: 'Completados', 
        href: `/?filter=${TODO_FILTERS.COMPLETED}`
    }
} as  const

export const FETCH_OPTIONS = {
    CHANGESTATE: 'ChangeState', 
    REMOVETODO: 'RemoveTodo', 
    REMOVEALLCOMPLETEDTODOS: 'RemoveAllCompletedTodos',
    ADDTODO: 'AddTodo',
    CHANGETODOTITLE : 'ChangeTodoTitle'
}