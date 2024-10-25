import { Eventos } from "./const"

/**
 * navigate: Funcion que va a cambiar la url de la barra de direcciones. Funciones que se realizan: 
 * window.history.pushState --> cambia la url de la barra de direcciones
 * creacion de un nuevo evento y lanzamiento de este 
 * @param href: string --> url to navigate
 */
export function navigate (href: string) {
    // Cambiamos la url de la barra de direcciones
    window.history.pushState({}, '', href)
    // crear un evento personalizado para avisar del cambio de pagina, como en el useEffect esta creado el addEventListener
    // para su correcto funcionamiennto lo creamos aqui cada vez que navegamos es decir, cada vez que cambiamos de pagina
    const navigateEvent = new Event(Eventos.PUSHSTATE_EVENT)
    console.log('Se ha creado el evento')
    // Enviamos el evento 
    window.dispatchEvent(navigateEvent)
  }