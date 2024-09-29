import './App.css'
import { FilmGrid } from './components/FilmGrid'
import { useFilms } from './hooks/useFilms'
import { FormEvent, useRef, useState } from 'react' // --> persiste el valor del elemento aunque cambie a diferencia del useState
import noSearch  from './posiblesCasos/noSearch.json'
import { useValidationInput } from './hooks/useValidationInput'

function App() {
  const [sort, setSort] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null); // --> de forma no controlada
  const { error, query, setQuery } = useValidationInput() // --> Custom Hook que se encarga  de la validación del campo del input
  const { films, getFilms } = useFilms({search: query, sort})  // --> Aquí tengo que hacer un hook para que me traiga los datos de los avengers
  const hasSearch = films?.length > 0 // --> de esta manera me da un verdadero o falso (hay que poner el ? por si me da null)
  // ** Forma no controlada
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const inputValue = inputRef.current?.value
    getFilms(query) // --> Aquí se llama al hook para traer los datos de la pelicula
    console.log('Search:', inputValue)

    // ?? Todo esto se puede hacer con vanilla JavaScript
  }
  

  // ** Forma controlada
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
    getFilms(query) // --> Aquí se llama al hook para traer los datos de la pelicula
    console.log(query)
  }
  // ** La mejor manera es la forma no controlada ya que al realizarse la forma controlada 
  // ** cada vez que se renderiza el componente, se vuelve muy lento.

  // ** Validación del campo del input (con useEffect) --> controlada 
  
  const handleSort = () => {
    setSort(!sort)
    getFilms(query) // --> Aquí se llama al hook para traer los datos de la pelicula
  }


  

  return (
    <div className='page'>
      <header>
        <h1>Buscador de películas</h1>
        <form action="" className='filmFrom' onSubmit={handleSubmit}>
          <input style={{border: '1px solid transparent', borderColor: error !== '' ? 'red' : 'transparent', borderRadius: '7px'}} onChange={handleChange} value={query} ref={inputRef} type="text" name="itFilmName" id="itFilmName" placeholder='Avatar, The Matrix...'/>
          <input type="checkbox" name="" id="" checked={sort} onClick={handleSort}/>
          <button >Search</button>
          
        </form>
        {error !== '' && <p style={{color: 'red'}}>{error}</p>}
      </header>
      <main>
        {
          hasSearch ? // ?? --> Aquí iriía un if en el que diferencio entre si hasSerarch es verdadero o no. Al estar entre {} no me deja usar if por ello uso esto
          (<FilmGrid films={films}/>) : (<p>{noSearch.Error}</p>)
        }
      </main>
    </div>
  )
}

export default App
