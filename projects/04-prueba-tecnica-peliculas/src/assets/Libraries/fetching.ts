import { URL_FETCH } from './constant'
export const fetchFilms = async (search: string) => {
    const response = await fetch(URL_FETCH + search) 
    const data = await response.json();
    return data
}