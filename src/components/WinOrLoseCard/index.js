// Write your code here.

import './index.css'

const LOSE_IMAGE = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
const WON_IMAGE = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'

const WinOrLoseCard = props => {
  const {isWon, score, onClickPlayAgain} = props
  const imgUrl = isWon ? WON_IMAGE : LOSE_IMAGE
  const gameStatus = isWon ? 'You Won' : 'You Lose'
  const scoreLabel = isWon ? 'Best Score' : 'Score'

  return (
    <div className="win-lose-bg-container">
      <div className="win-lose-score-container">
        <h1 className="win-lose-gamestatus">{gameStatus}</h1>
        <p className="win-lose-scorelabel">{scoreLabel}</p>
        <p className="win-lose-score">{score}/12</p>
        <button
          type="button"
          onClick={onClickPlayAgain}
          className="playagain-btn"
        >
          Play Again
        </button>
      </div>
      <div className="win-lose-img-container">
        <img src={imgUrl} alt="win or lose" className="win-lose-img" />
      </div>
    </div>
  )
}
export default WinOrLoseCard
