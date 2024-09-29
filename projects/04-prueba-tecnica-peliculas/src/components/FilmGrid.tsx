export type FilmType = {
    title: string,
    year: string,
    id: string,
    type: string,
    poste: string,
}
export function FilmGrid ({films}: {films:FilmType[]}){
    return (
        <ul className="movies">
            {
                films.map((film) => { // ?? array.map --> Igual que forEach.
                    return (
                        <li className="movie">
                            <h3>{film.title}</h3>
                            <p>{film.year}</p>
                            <img src={film.poste} alt="" />
                        </li>
                    )
                })
            }
        </ul>
    )
}