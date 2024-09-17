import './App.css'
import { useState } from "react";
import { Square } from "./components/Square";
import { SquareSelection } from "./components/SquareSelection";
import { WinnerCard } from "./components/WinnerCard";
import { TURNS } from "./Utils/constant";
import { checWinner, checkEndGame } from "./Utils/functions";


function App() {

  
  // Estado con el controlamos si la casilla se ha cklikeado o no
  // ?? Metemos aqui, en la funcion App el array pq necesitamos que se renderice, se actualice cada vez que usamos una casilla
  const [board, setBoard] = useState(Array(9).fill(null))

  // Estado para los turnos, para saber quien va
  const [turn, setTurn] = useState(TURNS.X)

  // Para saber quien si ha ganado alguien, podemos usar un estado. Usamos null como que no hay ganador y false como empate
  const [winner, setWinner] = useState<string | null | boolean>(null);

  
  // ** Reseteamos los estados para empezar de nuevo
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
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

    if(newWinner)
    {
      setWinner(newWinner); // !! Cuidado porque la actualización de estados es asíncrono
    }
    else if (checkEndGame(newBoard))
    {
      setWinner(false)
    }
  }

  // ** Por lo descrito anteriormente (asincronia), en funciones etc, no podemos trabajar con el valor del estado, 
  // ** ya que al ser asincrono no me asegura que esta cambiado o no, por ello debemos de usar una variable, como nuevo(lo que sea)
  // ** en la que guardemos el estado ya modificado (por nosotros), y trabajar con este, y además establecer el estado con esta variable
  // ** Ejemplo del newBoard  

  return(
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <section className='game'>
        {
          board.map((_, index) => {
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
