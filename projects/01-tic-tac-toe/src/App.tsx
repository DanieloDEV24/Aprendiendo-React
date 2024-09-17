import './App.css'
import { useState, useEffect } from "react";
import { Square } from "./components/Square";
import { SquareSelection } from "./components/SquareSelection";
import { WinnerCard } from "./components/WinnerCard";
import { TURNS } from "./Utils/constant";
import { checWinner, checkEndGame } from "./Utils/functions";


function App() {

  console.log('Render')
  
  // Estado con el controlamos si la casilla se ha cklikeado o no
  // ?? Metemos aqui, en la funcion App el array pq necesitamos que se renderice, se actualice cada vez que usamos una casilla
  // Comprobamos si existe localstorage y en el caso de que si rellenamos por defecto
  // const boardString = window.localStorage.getItem('board');
  // Si boardString es null o no es una cadena, usamos un array de 9 elementos llenos de null
  // const defectBoard = boardString ? JSON.parse(boardString) : Array(9).fill(null);

  // const [board, setBoard] = useState(defectBoard)

  // !! No lo podemos hacer como arriba pq cada vez que clickeamos en la app, se renderiza toda la app (aunque no sea la explicación perfecta, se actualiza la app y realiza todos los paso de nuevo)
  // !! por lo que gastaría mucho tiempo que siempre este llamando al localStorage
  // !! El estado solo se inicializa una vez, por lo que podemos meterlo ahí en una pequeña funcion
  // !! Activar la consola del navegador y ver los console.log() de render e inicialización del estado del board

  const [board, setBoard] = useState(()=>{
    console.log('inicialización del estado del board')
      const boardString = window.localStorage.getItem('board');
      return boardString ? JSON.parse(boardString) : Array(9).fill(null);
  })

  // En este caso hacemos lo mismo que con el estado del board
  // Estado para los turnos, para saber quien va
  const [turn, setTurn] = useState(()=>{
    
      const defectTurn = window.localStorage.getItem('turn');
      return defectTurn ? defectTurn : TURNS.X;})

  // Para saber quien si ha ganado alguien, podemos usar un estado. Usamos null como que no hay ganador y false como empate
  const [winner, setWinner] = useState<string | null | boolean>(null);

  
  // ** Reseteamos los estados para empezar de nuevo
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);

    window.localStorage.clear();
  } 



  const updateBoard = (index: number) => {

    if(board[index] || winner) return;

    // !! Nunca se muta las props, estados...
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn);

    const newBoard = [... board]
    newBoard[index] = turn
    setBoard(newBoard)

    // Comprobamos si hay ganador
    const newWinner = checWinner(newBoard, index);

    // Guardado de partida con localstorage
    // ** Como ya sabemos el localstorage solo guarda strings, por lo que no le podemos pasar el array del board
    // ** Debemos de pasarlo con el JSON.stringify (ya que esto lo pasara en formato cadena pero luego lo podemos recuperar)
    window.localStorage.setItem('board', JSON.stringify(newBoard));
    window.localStorage.setItem('turn', newTurn);



    if(newWinner)
    {
      setWinner(newWinner); // !! Cuidado porque la actualización de estados es asíncrono
    }
    else if (checkEndGame(newBoard))
    {
      setWinner(false)
    }
  }

  // !! Otro Hook --> useEffects: Es un hook que se inicializa como una función (pq lo es como todos los hooks), y que como minimo
  // !! se ejecuta una vez
  // !! este se ejecuta cunado las dependencias del componente montado en el DOM cambian
  // !! Parametro 1            --> función en la que escribimos el codigo que queremos que se ejecute
  // !! Parametro 2 (opcional) --> Array con las depencias que deben cambiar para que este se ejecute. Sino añadimos ninguna lista de 
  // !! dependencias, se ejecutará cada vez que se renderice  
  // !! En definitiva, lo usamos cuando cambie un elemento o algo de nuestro componente (winner, turn,)

  // ?? En este caso se ejecuta siempre que juguemos 
  // useEffect(()=>{
  //   console.log('Ejecución de useEffect')
  // })

  // ?? En este caso se ejecuta solo una vez, cunado se renderiza por primera vez el componente
  // useEffect(()=>{
  //   console.log('Ejecución de useEffect')
  // }, [])


  // ?? En este caso se ejecuta siempre cada vez que se gane una partida o se acabe
  useEffect(()=>{
    console.log('Ejecución de useEffect')
  }, [winner])


  // ** Por lo descrito anteriormente (asincronia), en funciones etc, no podemos trabajar con el valor del estado, 
  // ** ya que al ser asincrono no me asegura que esta cambiado o no, por ello debemos de usar una variable, como nuevo(lo que sea)
  // ** en la que guardemos el estado ya modificado (por nosotros), y trabajar con este, y además establecer el estado con esta variable
  // ** Ejemplo del newBoard  

  return(
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Reset</button>
      <section className='game'>
        {
          board.map((_:string | null, index:number) => {  
            return (
              <Square key={index} index={index} updateBoard={updateBoard}>{board[index]}</Square>
            )
          })
        }
      </section>
      <section className='turn'>
        <SquareSelection isSelected={turn === TURNS.X}>{TURNS.X}</SquareSelection>
        <SquareSelection isSelected={turn === TURNS.O}>{TURNS.O}</SquareSelection>
      </section>

      {
        winner !== null && (
          <WinnerCard winner={winner} resetGame={resetGame}></WinnerCard>
        )
      }
    </main>
  )
  
}

export default App
