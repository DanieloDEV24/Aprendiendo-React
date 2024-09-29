import { useCatImage } from './Hooks/useCatImage'
import { useCatFact } from './Hooks/useCatFact'
const CAT_PREFIX = 'https://cataas.com'
export function App () {
  const { fact, getNewFact } = useCatFact()
  const imageURL = useCatImage(fact)

  // ** La forma más básica para realizar un fetch en react es con useEffect, ya que
  // ** como ya sabemos si lo hacemos fuera se ejecuta cada vez que el componente se renderiza

  // [] indica que este effect solo se ejecuta una vez al cargar la página
  return (
    <main>
      <h2>App de Gatitos</h2>
      {fact && <p>Fact: {fact}</p>}
      {imageURL && <img src={`${CAT_PREFIX}${imageURL}`} alt='cat' />}
      <button onClick={getNewFact}>Get new fact</button>
    </main>
  )
}
