// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {isEmojiClicked, emojiDetails} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const onClickEmoji = () => {
    isEmojiClicked(id)
  }

  return (
    <li className="emoji-item">
      <button type="button" onClick={onClickEmoji} className="emoji-button">
        <img src={emojiUrl} alt={emojiName} className="emoji-img" />
      </button>
    </li>
  )
}

export default EmojiCard
