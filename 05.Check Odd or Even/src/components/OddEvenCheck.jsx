import { useState } from 'react'

const OddEvenCheck = () => {
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    const random = Math.floor(Math.random() * 101) // 0 to 100
    setCount(random)
  }

  const isEven = count % 2 === 0

  return (
    <div className="bg-white rounded-lg shadow-xl px-8 py-6 text-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Count: {count}</h1>
      <p className="text-lg text-gray-600 mb-6">
        Count is <span className={isEven ? 'text-green-600' : 'text-red-600'}>
          {isEven ? 'Even' : 'Odd'}
        </span>
      </p>
      <button
        onClick={handleIncrement}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition cursor-pointer font-semibold"
      >
        Increment
      </button>
      <p className="mt-4 text-sm text-gray-500">
        Increases count randomly between 0 to 100
      </p>
    </div>
  )
}

export default OddEvenCheck
