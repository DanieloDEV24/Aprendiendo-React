// ** ---------------------------------- FETCHING -------------------------------- ** //
// ** Este archivo contiene las funciones en la que actualizamos el back de la app ** //
import { FETCH_OPTIONS } from "./const"

export const changeStateTodo = async ({id, state}: {id: number, state: boolean}) => {
    const data = {
        id: id, 
        state: state, 
        opcion: FETCH_OPTIONS.CHANGESTATE
    }
   
    try {
        const response = await fetch('http://localhost/Aprendiendo/React/projects/07-todo-app/src/server/server.php', 
            {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json'
                }, 
                body: JSON.stringify(data)
            }
        );
    
        const result = await response.json()
        console.log(result)
    }
    catch(error) {
        console.error('Error:', error)
    }



}


export const removeTodo = async ({id}: {id: number}) => {
    // Mandamos al archivo del servidor las nuevas propieadades
    fetch(`${window.location.href}src/server/server.php`, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify({id, opcion: FETCH_OPTIONS.REMOVETODO})
    })
    .then(response => {
        if(response.ok){
            response.json().then(data => {
                console.log(data)
            })
        }
    })
    .catch(function (e) {
        console.log("ERROR " + e);
    })

}

export const removeAllCompletedTodos = async () => {
    // Mandamos al archivo del servidor las nuevas propieadades
    fetch(`${window.location.href}src/server/server.php`, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify({opcion: FETCH_OPTIONS.REMOVEALLCOMPLETEDTODOS})
    })
    .then(response => {
        if(response.ok){
            response.json().then(data => {
                console.log(data)
            })
        }
    })
    .catch(function (e) {
        console.log("ERROR " + e);
    })

}

export const addTodo = async (title: string) => {
    // Mandamos al archivo del servidor las nuevas propieadades
    fetch(`${window.location.href}src/server/server.php`, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify({title, opcion: FETCH_OPTIONS.ADDTODO})
    })
    .then(response => {
        if(response.ok){
            response.json().then(data => {
                console.log(data)
            })
        }
    })
    .catch(function (e) {
        console.log("ERROR " + e);
    })

}

export const changeTitleTodo = async ({id, title}: {id: number, title: string}) => {

  

    // Mandamos al archivo del servidor las nuevas propieadades
    fetch(`${window.location.href}src/server/server.php`, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify({id, title, opcion: FETCH_OPTIONS.CHANGETODOTITLE})
    })
    .then(response => {
        if(response.ok){
            response.json().then(data => {
                console.log(data)
            })
        }
    })
    .catch(function (e) {
        console.log("ERROR " + e);
    })
}

