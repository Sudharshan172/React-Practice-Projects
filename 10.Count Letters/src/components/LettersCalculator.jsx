import { useState } from 'react'

const LettersCalculator = () => {
  const [inputText, setInputText] = useState('')

  const handleChange = e => setInputText(e.target.value)

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-300 to-green-100">
      <div className="bg-white rounded-xl shadow-xl p-8 flex flex-col md:flex-row items-center gap-8 w-[90%] max-w-4xl">
        {/* Left Section */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-green-700 mb-4 leading-snug">
            Calculate the <br />
            Letters you enter
          </h1>
          <label htmlFor="phrase" className="block text-gray-600 mb-2">
            Enter the phrase
          </label>
          <input
            type="text"
            id="phrase"
            value={inputText}
            onChange={handleChange}
            placeholder="Type something..."
            className="w-full border border-gray-300 rounded px-4 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <p className="bg-green-600 text-white px-6 py-2 rounded inline-block font-semibold">
            No. of letters: {inputText.length}
          </p>
        </div>

        {/* Right Section (Image) */}
        <div className="flex-1">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="w-full max-w-xs mx-auto"
          />
        </div>
      </div>
    </div>
  )
}

export default LettersCalculator
