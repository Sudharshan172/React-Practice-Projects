import { useState, useEffect } from 'react'
import NavBar from './NavBar'
import EmojiCard from './EmojiCard'
import WinOrLoseCard from './WinOrLoseCard'

const emojisList = [
  { id: 1, emojiName: '😀', alt: 'grinning face' },
  { id: 2, emojiName: '😎', alt: 'cool face' },
  { id: 3, emojiName: '😢', alt: 'crying face' },
  { id: 4, emojiName: '🥳', alt: 'party face' },
  { id: 5, emojiName: '😡', alt: 'angry face' },
  { id: 6, emojiName: '😍', alt: 'heart eyes' },
  { id: 7, emojiName: '🤔', alt: 'thinking face' },
  { id: 8, emojiName: '😴', alt: 'sleeping face' },
  { id: 9, emojiName: '🤩', alt: 'star eyes' },
  { id: 10, emojiName: '😇', alt: 'innocent face' },
  { id: 11, emojiName: '🥶', alt: 'cold face' },
  { id: 12, emojiName: '😈', alt: 'smiling devil' },
]

const EmojiGame = () => {
  const [clickedIds, setClickedIds] = useState([])
  const [score, setScore] = useState(0)
  const [topScore, setTopScore] = useState(0)
  const [isGameOver, setIsGameOver] = useState(false)
  const [isWon, setIsWon] = useState(false)

  const shuffledEmojis = [...emojisList].sort(() => Math.random() - 0.5)

  const onEmojiClick = id => {
    if (clickedIds.includes(id)) {
      setIsGameOver(true)
      setIsWon(false)
    } else {
      const newClicks = [...clickedIds, id]
      setClickedIds(newClicks)
      setScore(prev => prev + 1)

      if (newClicks.length === emojisList.length) {
        setIsWon(true)
        setIsGameOver(true)
      }
    }
  }

  const resetGame = () => {
    if (score > topScore) setTopScore(score)
    setScore(0)
    setClickedIds([])
    setIsGameOver(false)
    setIsWon(false)
  }

  useEffect(() => {
    if (isGameOver && score > topScore) {
      setTopScore(score)
    }
  }, [isGameOver])

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-pink-300 font-sans">
      <NavBar score={score} topScore={topScore} showScore={!isGameOver} />
      <div className="max-w-4xl mx-auto px-4 py-8">
        {isGameOver ? (
          <WinOrLoseCard isWon={isWon} score={score} onPlayAgain={resetGame} />
        ) : (
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
            {shuffledEmojis.map(emoji => (
              <EmojiCard
                key={emoji.id}
                emoji={emoji}
                onClick={() => onEmojiClick(emoji.id)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default EmojiGame
