const URL_API_FACT = 'https://catfact.ninja/fact'
export const newFact = async () => { // ?? --> La hacemos asincona para poder usar el await en lugar de un then()
  const res = await fetch(URL_API_FACT) // ?? --> Como la guardamos en una constante, debemos esperar a que se realice el fetch, por lo que usamos el await
  const data = await res.json() // ?? --> Este es el mismo caso que arriba
  const fact = data.fact
  return fact
}

// ** --> otra manera de verlo <--

export const newFact2 = () => { // ?? --> Aqui ya no le añadimos la coletilla del async ya que realizamos un fetch normal
  return fetch(URL_API_FACT) // ?? --> Al ser un fetch (codigo asincrono), debemos de hacer el return a este pa que se realice
    .then(response => response.json()) // ?? --> Usamos concatenaciones de then
    .then(data => {
      return data.fact // ?? --> Devolvemos el resultado
    })
}
