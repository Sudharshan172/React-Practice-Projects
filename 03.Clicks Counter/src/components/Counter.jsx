import { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  const handleClick = () => setCount(prev => prev + 1)

  return (
    <div className="bg-white text-center p-8 rounded-lg shadow-lg w-80">
      <h1 className="text-xl font-semibold text-gray-800 mb-2">
        The Button has been clicked{' '}
        <span className="text-blue-600 font-bold">{count}</span>{' '}
        {count === 1 ? 'time' : 'times'}
      </h1>
      <p className="text-sm text-gray-500 mb-4">
        Click the button to increase the count!
      </p>
      <button
        onClick={handleClick}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded transition duration-200 cursor-pointer font-bold"
      >
        Click Me!
      </button>
    </div>
  )
}

export default Counter
