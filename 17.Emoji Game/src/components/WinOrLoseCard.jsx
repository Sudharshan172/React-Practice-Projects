const WinOrLoseCard = ({ isWon, score, onPlayAgain }) => {
  const resultText = isWon ? 'You Won' : 'You Lose'
  const imageUrl = isWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  return (
    <div className="bg-white rounded-lg p-6 text-center shadow-lg max-w-md mx-auto">
      <img src={imageUrl} alt={resultText} className="w-32 h-32 mx-auto mb-4" />
      <h2 className="text-2xl font-bold text-purple-700 mb-2">{resultText}</h2>
      <p className="text-gray-600 mb-2">Score</p>
      <p className="text-3xl font-semibold text-blue-700 mb-6">{score}/12</p>
      <button
        onClick={onPlayAgain}
        className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition"
      >
        Play Again
      </button>
    </div>
  )
}

export default WinOrLoseCard
