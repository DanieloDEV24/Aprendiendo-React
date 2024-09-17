import { SquareSelection } from "./SquareSelection";

export const WinnerCard = ({winner, resetGame}: {winner: string | boolean | null, resetGame: () => void}) => {
    return (<section className='winner'>
        <div className='text'>
            <h2>
                {
                    winner === false ? 'Empate' : 'Ganó:'
                }
            </h2>

            <header className='win'>
                {
                    <SquareSelection isSelected={false}>{winner}</SquareSelection>
                }
            </header>

            <footer>
                <button onClick={resetGame}>Reset</button>
            </footer>
        </div>
    </section>
    )
}