import { useState } from 'react'

const headsImage = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailsImage = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

const CoinToss = () => {
  const [count, setCount] = useState(0)
  const [headsCount, setHeadsCount] = useState(0)
  const [tailsCount, setTailsCount] = useState(0)
  const [coinImage, setCoinImage] = useState(headsImage)

  const tossCoin = () => {
    const tossResult = Math.random() < 0.5 ? 'heads' : 'tails'

    setCount(prev => prev + 1)
    if (tossResult === 'heads') {
      setHeadsCount(prev => prev + 1)
      setCoinImage(headsImage)
    } else {
      setTailsCount(prev => prev + 1)
      setCoinImage(tailsImage)
    }
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg w-[300px] text-center">
      <h1 className="text-2xl font-bold text-yellow-700 mb-2">Coin Toss Game</h1>
      <p className="text-sm text-gray-500 mb-6">Heads (or) Tails</p>
      <img src={coinImage} alt="coin" className="w-24 h-24 mx-auto mb-6" />
      <button
        onClick={tossCoin}
        className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded font-semibold transition"
      >
        Toss Coin
      </button>
      <div className="mt-6 grid grid-cols-3 gap-2 text-sm text-gray-700">
        <p><span className="font-semibold">Total:</span> {count}</p>
        <p><span className="font-semibold">Heads:</span> {headsCount}</p>
        <p><span className="font-semibold">Tails:</span> {tailsCount}</p>
      </div>
    </div>
  )
}

export default CoinToss
