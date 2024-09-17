import './App.css'
import { TwitterFollowCard } from './Components/TwitterFollowCard';

export function App()
{ 
    // Funcion que enviamos como prop
    // const addAt = (userName: string) => `@${userName}`

    const users = 
    [
        {
            userName: 'DanieloDEV24', 
            name    : 'Daniel Ruiz Soto', 
        }, 
        {
            userName: 'TuMoni24', 
            name    : 'Mónica Hidalgo Hidalgo', 
        }
    ]
    
    return(
        <section className='App'>
          {
            users.map(user => {
                const {userName , name} = user
                return (
                    <TwitterFollowCard userName={userName} name={name}>

                    </TwitterFollowCard>
                )
            })
          }
        </section>
    )
}