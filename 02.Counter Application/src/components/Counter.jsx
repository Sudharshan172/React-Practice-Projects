import { useState } from "react"

const Counter = () => {
  const [count, setCount] = useState(0)

  const onIncrement = () => setCount(prevCount => prevCount + 1)
  const onDecrement = () => setCount(prevCount => prevCount - 1)

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md text-center">
        <h1 className="text-3xl font-bold text-indigo-600 mb-6">Count: {count}</h1>
        <div className="space-x-4">
          <button
            onClick={onIncrement}
            className="bg-green-500 text-white font-bold px-4 py-2 rounded hover:bg-green-600 transition cursor-pointer"
          >
            Increase
          </button>
          <button
            onClick={onDecrement}
            className="bg-red-500 text-white font-bold px-4 py-2 rounded hover:bg-red-600 transition cursor-pointer"
          >
            Decrease
          </button>
        </div>
      </div>
    </div>
  )
}

export default Counter
