import { navigate } from "../assets/Lib/functions";
import { Botones } from "../assets/Lib/const";

export const Link = ({target, to, children, ...props}: {target?: string , to: string, props: string[], children: React.ReactNode}) => {
    
    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        // Activacion de comandos de teclado
        // Comprobamos que sea el evento principal --> click izquierdo
        const isMainEvent = event.button === Botones.PRIMARY_BUTTON // Click izquierdo
        console.log(isMainEvent)
        // Comporobamos si es un evento modificado 
        const isModifiedEvent = event.metaKey || event.altKey || event.ctrlKey || event.shiftKey
        console.log(isModifiedEvent)
        // Comprobamos si es un evento que se puede manejar (no es un evento externo)  --> target es undefined o es self
        const isManageableEvent = target === undefined || target === '_self'
        console.log(isManageableEvent)

        if(isMainEvent && isManageableEvent && !isModifiedEvent) {
           event.preventDefault()
            navigate(to)
        }   
    }
    return <a onClick={handleClick} href={to} target={target} {...props}>{children}</a>
}