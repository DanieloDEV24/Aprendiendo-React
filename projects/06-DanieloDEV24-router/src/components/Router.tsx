import { Eventos } from "../assets/Lib/const"
import { Error404Page } from "./Error404Page"
//import { AboutPage } from "./AboutPage"
import { useEffect, useState, Children } from "react"
import { RouteType, RouteParamsType } from "../assets/Lib/types"
import { match } from "path-to-regexp"

export function Router({routes = [], DefaultComponent = Error404Page, children}: {routes: RouteType[], DefaultComponent?: ({routeParams}: {routeParams?: RouteParamsType}) => JSX.Element, children?: React.ReactElement[]}) {
    // Estado que controla la ruta en la que estamos y en la que podemos establecer la nueva ruta 
     // currentPath --> Ruta en la que estamos
     // setCurrentPath --> Función que permite cambiar la ruta en la que estamos
     // window.location.pathname --> Obtiene la ruta actual del navegador
     const [currentPath, setCurrentPath] = useState(window.location.pathname) 
   
     // Creamos un useEffect para que cada vez que se cambie de pagina activemos el nuevo evento creado
     // Lo hacemos en un useEffect para que no se ejecute con cada renderizacion
     // Como no es necesario que el nuevo evento este creado y se que lo usare, hago ya el addEventListener
     useEffect(() => {
       // Funcion que se ejecuta en el addEventListener
       const onLocationChange = () => {
         setCurrentPath(window.location.pathname)
       }
   
       // Añadimos el evento aunque el personalizado no este creado ya que la llamada perdura
       window.addEventListener(Eventos.PUSHSTATE_EVENT, onLocationChange)
       window.addEventListener(Eventos.POPSTATE_EVENT, onLocationChange)
   
       console.log('se ha realizado el useEffect')
   
       // Luego ya realizado lo quitamos, pq siempre que navegamos creamos el evento
       return () => {
         window.removeEventListener(Eventos.PUSHSTATE_EVENT, onLocationChange)
         window.addEventListener(Eventos.POPSTATE_EVENT, onLocationChange)
       }
   
     }, [])

     let routeParams = {}

     const routesFromChildren = Children.map(children, (child) => {
      if(typeof child !== 'undefined'){
        const { props, type } = child
      const name = typeof type === 'string' ? type : type.name;
      const isRoute = name === 'Route'
      return (isRoute) ? props : null
      }
     })

     console.log(routesFromChildren)

     const routesToUse = (typeof children !== 'undefined') ? routes.concat(routesFromChildren as RouteType[]) : routes
     
     const Page = routesToUse.find(({path}) =>{
      if(path === currentPath)return true
      const matchedURL = match(path, {decode: decodeURIComponent})
      const matched = matchedURL(currentPath)
      if(!matched)return false
      routeParams = matched.params
      return true
    })?.component

     return Page ? <Page routeParams = {routeParams as RouteParamsType}/> : <DefaultComponent routeParams = {routeParams as RouteParamsType}/>
   }