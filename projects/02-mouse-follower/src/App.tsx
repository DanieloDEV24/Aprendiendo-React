import { useEffect, useState } from "react";
const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({x: 0, y: 0})
  useEffect(()=>{
    const handleMove = (event: PointerEvent) => {
      const {clientX, clientY} = event;
      console.log(clientX + " y " + clientY)
      setPosition({x:clientX, y:clientY})
    }

    if(enabled)window.addEventListener('pointermove', handleMove) // !! No metemos el hook dentro de un condicional nunca. La lógica se realiza siempre dentro del hook

    // !! Ahora tenemos un problema y esque como ya hemos añadido el elemento, aunque deshabilitemos con el botón a este, 
    // !! simepre va a seguir, pq aun nos queda limpiar el efectio
    // ?? Y esto como lo hacemos ?? 
    // ** El useEffect puede devolver una función que lo limpie. Esta función se realiza cuando cambia la dependencia y cuando se 
    // ** desmonta el componente

    return () => {window.removeEventListener('pointermove', handleMove)}
  }, [enabled])
  return (
    <>
    <div style={{
        position: 'absolute', 
        backgroundColor: 'transparent', 
        border: '2px solid #09f',
        borderRadius: '50%', 
        opacity: 0.8, 
        pointerEvents: 'none', 
        left: -20, 
        top: -20, 
        width: 40, 
        height: 40, 
        transform: `translate(${position.x}px, ${position.y}px)`
      }}></div>
      <button onClick={()=>{setEnabled(!enabled)}}>{enabled ? 'Dejar de seguir' : 'Seguir'} puntero</button>
      </>
  )
}
function App() {
  // !! no podemos realizar un evento de js (window.addEventListener()) --> ya que se va a ejecutar siempre que se renderice el componente
  // !! Por eso lo hacemos dentro del useEffect

 // Queremos cambiar la posición de los estilos del transfor del div de abajo, para ello lo más lógico es crear un estado, ya que 
 // de esta manera es más comodo, pq en position guardamos siempre la posicion, y con el setPosition vamos actualizando la posición
  return (
    <FollowMouse />
  )
}

export default App
