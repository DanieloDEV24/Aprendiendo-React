import { useState, useEffect } from 'react'
import { newFact } from '../fetching'
export function useCatFact () {
  const [fact, setFact] = useState()
  const URL_API_FACT = 'https://catfact.ninja/fact'
  useEffect(() => {
    fetch(URL_API_FACT)
      .then((response) => {
        if (response.ok) {
          response.json().then((facts) => {
            setFact(facts.fact)
          })
        }
      })
  }, [])

  const getNewFact = async () => {
    const fact = await newFact()
    console.log(fact)
    setFact(fact)
  }

  return { fact, getNewFact }
}
