import { Link } from "./Link"
import { RouteParamsType } from "../assets/Lib/types"
import { useEffect } from "react"

export const SearchPage = ({routeParams}: {routeParams?: RouteParamsType}) => {
    useEffect(() => {
     document.title = 'has buscado: ' + routeParams?.query
    }, [])
    return (
      <>
        <h1>Search</h1>
        <p>Has buscado: {routeParams?.query}</p>
       <Link to={'/'} props={[]}>Home</Link>
      </>
    )
  }