import '../App.css'
import { useState } from "react";
export function TwitterFollowCard({userName, name}: {userName: string, name: string}){
    
    // Si quiero modificar el valor de una prop no debo mutarla, sino 
    // crear una constante con ese elemento
    // userName = userName + "@" --> MAL
    // const userName = userName + '@' --> BIEN

    // Esta bien así lo hace, pero lo suyo es generar un estado
    // const seguirText = isFollowing ? 'Siguiendo' : 'Seguir'
    // const buttonClassName = isFollowing ? 'drs-followCard-button is-following' : 'drs-followCard-button'

    // con estados 
    // Cuidado pq el estado inicial --> useState(false) : el estado inicial es falso, solo se inicia una vez
    const [isFollowing, setIsFollowing]  = useState(false);
    const seguirText = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'drs-followCard-button is-following' : 'drs-followCard-button'

    return (
        // Para añadir una clase en react aunque usemos "html", debemos de usar 
        // className ya que la palabra class es una palabra reservada
      <article className='drs-followCard'>
        <header className='drs-followCard-header'>
            <img className='drs-followCard-img' src="/src/assets/react.svg" alt="avatar-react" />
            <div className='drs-followCard-info'>
                <strong>{name}</strong>
                <span className='drs-followCard-infoUserName'>@{(userName)}</span>
            </div>
        </header>

        <aside>
            <button className={buttonClassName} onClick={() => {setIsFollowing(!isFollowing)}}>{seguirText}</button>
        </aside>
      </article>
    )
}