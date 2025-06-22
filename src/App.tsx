import {DiceGame, CoinTossGame, RouletteGame} from '@betswirl/ui'
import {useState} from 'react'
import './App.css'

type GameType = 'dice' | 'coin' | 'roulette'

function App() {
    const [activeGame, setActiveGame] = useState<GameType>('dice')
    
    const gameTheme = {
        "--primary": "rgb(74 41 24)",
        "--play-btn-font": "rgb(225 159 31)",
    } as React.CSSProperties
    
    const renderGame = () => {
        switch(activeGame) {
            case 'dice':
                return <DiceGame theme="dark" customTheme={gameTheme} backgroundImage="/game-bg.png" />
            case 'coin':
                return <CoinTossGame theme="dark" customTheme={gameTheme} backgroundImage="/game-bg.png" />
            case 'roulette':
                return <RouletteGame theme="dark" customTheme={gameTheme} backgroundImage="/game-bg.png" />
        }
    }
    
    return (
        <div className="app-container">
            <nav className="game-nav">
                <button 
                    className={`nav-button ${activeGame === 'dice' ? 'active' : ''}`}
                    onClick={() => setActiveGame('dice')}
                >
                    Dice
                </button>
                <button 
                    className={`nav-button ${activeGame === 'coin' ? 'active' : ''}`}
                    onClick={() => setActiveGame('coin')}
                >
                    Coin Flip
                </button>
                <button 
                    className={`nav-button ${activeGame === 'roulette' ? 'active' : ''}`}
                    onClick={() => setActiveGame('roulette')}
                >
                    Roulette
                </button>
            </nav>
            <div className="game-content">
                {renderGame()}
            </div>
        </div>
    )
}

export default App
