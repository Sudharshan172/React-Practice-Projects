import { useState } from 'react'

const RandomNumberGenerator = () => {
  const [number, setNumber] = useState(0)

  const handleGenerate = () => {
    const random = Math.floor(Math.random() * 101)
    setNumber(random)
  }

  return (
    <div className="bg-white shadow-xl rounded-lg text-center px-6 py-8 w-[340px]">
      <h1 className="text-2xl font-bold text-blue-700 mb-4">Random Number</h1>
      <p className="text-gray-600 mb-6">Generate a random number in the range of 0 to 100</p>
      <button
        onClick={handleGenerate}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-300 mb-4"
      >
        Generate
      </button>
      <h2 className="text-3xl font-semibold text-indigo-600 mt-4">{number}</h2>
    </div>
  )
}

export default RandomNumberGenerator
