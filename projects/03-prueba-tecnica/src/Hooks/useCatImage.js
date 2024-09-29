import { useState, useEffect } from 'react'

// ** --> CunstomHook <--
export function useCatImage (fact) {
  // En este, guardamos las partes del componente que queremos usar
  // --> En primer lugar guardamos el estado de la imagen
  const [imageURL, setImageURL] = useState()

  // --> Luego guardamos la lógica que deseamos, en este caso es el useEffect para actualizar la imagen
  useEffect(() => {
    if (!fact) return
    const firstWord = fact.split(' ')[0]
    const URL_API_IMAGE = `https://cataas.com/cat/says/${firstWord}?fontSize=16&size=50&fontColor=blue&json=true`
    fetch(URL_API_IMAGE)
      .then((resp) => {
        if (resp.ok) {
          resp.json().then((image) => {
            const url = image

            console.log(url)
            setImageURL(url)
            console.log(imageURL)
          })
        }
      })
  }, [fact])

  return imageURL
}
