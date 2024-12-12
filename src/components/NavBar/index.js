// Write your code here.
import './index.css'

const NavBar = props => {
  const {topScore, currentScore, isGameRunning} = props

  return (
    <nav className="nav-container">
      <div className="nav-sub-container">
        <div className="nav-logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
            className="nav-logo"
          />
          <h1 className="nav-heading">EMOJI GAME</h1>
        </div>

        {isGameRunning && (
          <div className="nav-score-container">
            <p className="nav-score">Score: {currentScore}</p>
            <p className="nav-score">Top Score: {topScore}</p>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar
