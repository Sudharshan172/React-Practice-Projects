const NavBar = ({ score, topScore, showScore }) => (
  <div className="bg-white shadow flex items-center justify-between px-6 py-3">
    <div className="flex items-center gap-2">
      <img
        src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
        alt="emoji logo"
        className="w-8 h-8"
      />
      <h1 className="text-xl font-bold text-purple-700">Emoji Game</h1>
    </div>
    {showScore && (
      <div className="flex gap-6 text-sm font-semibold text-gray-700">
        <p>Score: {score}</p>
        <p>Top Score: {topScore}</p>
      </div>
    )}
  </div>
)

export default NavBar
