import { Link } from "./Link"

export const HomePage = () => {
    return (
      <>
        <h1>Home</h1>
        <p>Esta es una página de ejemplo para crear un React Router desde cero</p>
       <Link to={'/about'} props={[]}>Ir a Sobre Nosotros</Link>
      </>
    )
  }