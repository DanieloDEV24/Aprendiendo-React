import { Link } from "./Link"

export const AboutPage = () => {
    return (
      <>
        <h1>About</h1>
        <p>¡Hola👋! Me llamo Dani y estoy creando un react Router</p>
        <Link to={'/'} props={[]}>Ir a Sobre Nosotros</Link>
      </>
    )
  }