import { useState, useRef } from 'react'

const Stopwatch = () => {
  const [isRunning, setIsRunning] = useState(false)
  const [seconds, setSeconds] = useState(0)
  const timerRef = useRef(null)

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true)
      timerRef.current = setInterval(() => {
        setSeconds(prev => prev + 1)
      }, 1000)
    }
  }

  const stopTimer = () => {
    clearInterval(timerRef.current)
    setIsRunning(false)
  }

  const resetTimer = () => {
    clearInterval(timerRef.current)
    setIsRunning(false)
    setSeconds(0)
  }

  const formatTime = () => {
    const mins = String(Math.floor(seconds / 60)).padStart(2, '0')
    const secs = String(seconds % 60).padStart(2, '0')
    return `${mins}:${secs}`
  }

  return (
    <div className="bg-white rounded-xl shadow-xl p-6 ">

      {/* Right Timer Block */}
      <div className="flex-1 text-center">
        <h1 className="text-2xl font-bold text-purple-700 mb-4">Stopwatch</h1>
        <p className="text-gray-500 text-sm mb-1">Timer</p>
        <p className="text-4xl font-mono font-semibold text-gray-800 mb-6">
          {formatTime()}
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <button
            onClick={startTimer}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded shadow-md font-semibold"
          >
            Start
          </button>
          <button
            onClick={stopTimer}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded shadow-md font-semibold"
          >
            Stop
          </button>
          <button
            onClick={resetTimer}
            className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded shadow-md font-semibold"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}

export default Stopwatch
