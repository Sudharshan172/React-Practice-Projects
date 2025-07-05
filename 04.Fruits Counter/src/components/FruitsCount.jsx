import { useState } from 'react'

const FruitsCount = () => {
  const [mangoCount, setMangoCount] = useState(0)
  const [bananaCount, setBananaCount] = useState(0)

  const eatMango = () => setMangoCount(prev => prev + 1)
  const eatBanana = () => setBananaCount(prev => prev + 1)

  return (
    <div className="bg-white rounded-lg shadow-xl p-6 w-[350px] text-center">
      <h1 className="text-xl font-bold text-gray-800 mb-6">
        Bob ate <span className="text-yellow-500">{mangoCount}</span> mangoes{' '}
        <span className="text-yellow-500">{bananaCount}</span> bananas
      </h1>
      <div className="flex justify-between items-center">
        <div className="flex flex-col items-center">
          <img
            src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
            alt="mango"
            className="w-24 mb-3"
          />
          <button
            onClick={eatMango}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 cursor-pointer font-semibold"
          >
            Eat Mango
          </button>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
            alt="banana"
            className="w-24 mb-3"
          />
          <button
            onClick={eatBanana}
            className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 cursor-pointer font-semibold"
          >
            Eat Banana
          </button>
        </div>
      </div>
    </div>
  )
}

export default FruitsCount
