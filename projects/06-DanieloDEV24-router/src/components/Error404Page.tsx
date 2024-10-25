import { Link } from "./Link"
import '../pagina_error.css'

export const Error404Page = () => {
    return (
        <>
            <h1>Página de error 404</h1>
            <h2>Se ha producido un problema.</h2>
            <section className="contenedor-error">
                <span><span>4</span></span>
                <span>0</span>
                <span><span>4</span></span>
            </section>
            <div className="link-vuelta">
                <Link to={'/'} props={[]}>Home</Link>
            </div>
        </>
    )
}