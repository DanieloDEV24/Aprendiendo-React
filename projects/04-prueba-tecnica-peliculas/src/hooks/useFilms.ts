// import withResult  from '../posiblesCasos/withResult.json' // ?? --> Quiero inportar un archivo pero no tengo export ni nada en el archivo
import { useState, useMemo, useCallback } from'react'
import { fetchFilms } from '../assets/Libraries/fetching'
import { NoSearch, ResponseFilm } from '../assets/Libraries/types'

export function useFilms ({search, sort}: {search: string, sort: boolean}) {
  const [responseFilms, setResponseFilms] = useState <ResponseFilm | NoSearch | null> (null) // ?? --> Como me puede llegar un tipo de estos dos y no se cual, los inicializo a ambos
  const films = (responseFilms as ResponseFilm)?.Search || [] // ?? --> como no se puede acceder al elemento Search en caso de ser noSearch, le hago un casting a ResponseFilm y en el caso de que no exista search, pongo un array vacío
  const mapeo  = films?.map(film => ({ 
      title: film.Title,
      year: film.Year,
      id: film.imdbID,
      type: film.Type,
      poste: film.Poster,}))
    
      // ?? --> Actualización del estado
      const getFilms = useCallback( async (searchParam: string) => {
          // setResponseFilms(withResult)
          const filmsFromFetch : ResponseFilm = await fetchFilms(searchParam)
          const sortFilms = filmsFromFetch.Search;
          setResponseFilms({Search: sortFilms})
        }, [search])

      const sortedFilms = useMemo(() => {
        return sort ? [...mapeo].sort((a, b) => a.title.localeCompare(b.title)): mapeo 
      }, [sort, films])

      

      return {films: sortedFilms, getFilms}
  }