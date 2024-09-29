import { useEffect, useState, useRef } from 'react'
export function useValidationInput() {
    const [error, setError] = useState('') // --> Si tenemos error en el formulario, este estado se actualiza. Lo guardamos en estado pq si es una variable el valor de esta cambia al renderizarse
    const [query, setQuery] = useState('') // --> Esta es la forma controlada por React
    const isFirstInput = useRef(true) // --> Otro uso del useRef es ver si es la primera vez
    useEffect(() => { // --> Esto es hace en un useEffect donde cambie el query en vez de el handleChange (funcion donde lo cambiamos) ya que el setQuery es asincrono y va con retardo
        if (isFirstInput.current) {
            isFirstInput.current = query === '';
            return
        }

        if (query === '') {
            setError('No se puede dejar el campo vacío');
            return;
        }

        if (query.match(/^\d+$/)) {
            setError('No se puede buscar por un número');
            return;
        }

        setError('');
    }, [query])

    return { error, query, setQuery }
}