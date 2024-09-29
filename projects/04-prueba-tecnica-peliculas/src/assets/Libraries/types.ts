export type Film = {
    Title: string,
    Year: string,
    imdbID: string,
    Type: string,
    Poster: string,
}
  
export type ResponseFilm = {
    Search: Film[],
}
  
export type NoSearch = {
    Response: string,
    Error: string
}