import { useState, useEffect, useRef } from 'react'

const DigitalTimer = () => {
  const [isRunning, setIsRunning] = useState(false)
  const [elapsedTime, setElapsedTime] = useState(0)
  const [timeLimit, setTimeLimit] = useState(25)

  const timerRef = useRef(null)

  useEffect(() => {
    if (isRunning && elapsedTime < timeLimit * 60) {
      timerRef.current = setInterval(() => {
        setElapsedTime(prev => prev + 1)
      }, 1000)
    }

    return () => clearInterval(timerRef.current)
  }, [isRunning, elapsedTime, timeLimit])

  const handleStartPause = () => {
    if (elapsedTime === timeLimit * 60) {
      setElapsedTime(0)
    }
    setIsRunning(prev => !prev)
  }

  const handleReset = () => {
    clearInterval(timerRef.current)
    setElapsedTime(0)
    setIsRunning(false)
  }

  const handleIncrement = () => {
    if (!isRunning) setTimeLimit(prev => prev + 1)
  }

  const handleDecrement = () => {
    if (!isRunning && timeLimit > 1) setTimeLimit(prev => prev - 1)
  }

  const getTimeString = () => {
    const totalSeconds = timeLimit * 60 - elapsedTime
    const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, '0')
    const seconds = String(totalSeconds % 60).padStart(2, '0')
    return `${minutes}:${seconds}`
  }

  const timerStatus = isRunning ? 'Running' : 'Paused'
  const isOver = elapsedTime === timeLimit * 60

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-pink-300 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-white mb-8">Digital Timer</h1>
      <div className="bg-white shadow-xl rounded-lg p-6 w-full max-w-4xl flex flex-col md:flex-row items-center gap-8">
        {/* Timer display */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="relative">
            <img
              src="https://assets.ccbp.in/frontend/react-js/digital-timer-elapsed-bg.png"
              alt="timer background"
              className="w-48 h-48"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center">
              <h2 className="text-3xl font-bold text-black">{getTimeString()}</h2>
              <p className="text-sm text-gray-600">{isOver ? 'Completed' : timerStatus}</p>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex-1 space-y-6 w-full">
          {/* Play / Pause & Reset */}
          <div className="flex items-center gap-8 justify-center">
            <button
              onClick={handleStartPause}
              className="flex items-center gap-2 bg-transparent hover:scale-105 transition"
            >
              <img
                src={
                  isRunning
                    ? 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
                }
                alt={isRunning ? 'pause icon' : 'play icon'}
                className="w-6 h-6"
              />
              <span className="font-semibold text-gray-800 text-lg">
                {isRunning ? 'Pause' : 'Start'}
              </span>
            </button>

            <button
              onClick={handleReset}
              className="flex items-center gap-2 hover:scale-105 transition"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                alt="reset icon"
                className="w-6 h-6"
              />
              <span className="font-semibold text-gray-800 text-lg">Reset</span>
            </button>
          </div>

          {/* Timer Limit Setter */}
          <div className="text-center">
            <p className="text-sm text-gray-500 mb-2">Set Timer Limit</p>
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={handleDecrement}
                className="bg-gray-200 w-8 h-8 rounded font-bold text-xl hover:bg-gray-300"
              >
                −
              </button>
              <span className="text-2xl font-bold text-purple-700">
                {timeLimit} min
              </span>
              <button
                onClick={handleIncrement}
                className="bg-gray-200 w-8 h-8 rounded font-bold text-xl hover:bg-gray-300"
              >
                ＋
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DigitalTimer
