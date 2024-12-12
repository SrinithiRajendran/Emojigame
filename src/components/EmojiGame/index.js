/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    topScore: 0,
    clickedEmojis: [],
    isGameRunning: true,
  }

  playAgain = () => {
    this.setState({
      clickedEmojis: [],
      isGameRunning: true,
    })
  }

  isEmojiClicked = id => {
    const {emojisList} = this.props
    const {clickedEmojis} = this.state
    const emojiClicked = clickedEmojis.includes(id)

    if (emojiClicked) {
      this.finishGameandGetTopScore(clickedEmojis.length)
    } else {
      if (clickedEmojis.length === emojisList.length - 1) {
        this.finishGameandGetTopScore(emojisList.length)
      }

      this.setState(prev => ({
        clickedEmojis: [...prev.clickedEmojis, id],
      }))
    }
  }

  finishGameandGetTopScore = currentScore => {
    const {topScore} = this.state

    let newTopScore = topScore

    if (currentScore > topScore) {
      newTopScore = currentScore
    }
    this.setState({
      topScore: newTopScore,
      isGameRunning: false,
    })
  }

  getShuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  renderGameRunning = () => {
    const shuffledEmojisList = this.getShuffledEmojisList()

    return (
      <ul className="emojis-list-container">
        {shuffledEmojisList.map(eachEmoji => (
          <EmojiCard
            key={eachEmoji.id}
            emojiDetails={eachEmoji}
            isEmojiClicked={this.isEmojiClicked}
          />
        ))}
      </ul>
    )
  }

  renderScoreCard = () => {
    const {emojisList} = this.props
    const {clickedEmojis} = this.state
    const isWon = clickedEmojis.length === emojisList.length

    return (
      <WinOrLoseCard
        isWon={isWon}
        score={clickedEmojis.length}
        onClickPlayAgain={this.playAgain}
      />
    )
  }

  render() {
    const {topScore, clickedEmojis, isGameRunning} = this.state

    return (
      <div className="emojigame-bg-container">
        <NavBar
          topScore={topScore}
          currentScore={clickedEmojis.length}
          isGameRunning={isGameRunning}
        />
        <div className="emoji-body-container">
          {isGameRunning ? this.renderGameRunning() : this.renderScoreCard()}
        </div>
      </div>
    )
  }
}
export default EmojiGame
