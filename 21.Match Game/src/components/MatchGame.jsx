import { useEffect, useState, useRef } from 'react'

// Tabs
const tabs = ['Fruits', 'Animals', 'Places']

// Images
const imagesList = [
  {
    id: '1',
    category: 'Fruits',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/match-game/orange-img.png',
    thumbnailUrl: 'https://assets.ccbp.in/frontend/react-js/match-game/orange-thumbnail-img.png',
  },
  {
    id: '2',
    category: 'Fruits',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/match-game/pineapple-img.png',
    thumbnailUrl: 'https://assets.ccbp.in/frontend/react-js/match-game/pineapple-thumbnail-img.png',
  },
  {
    id: '3',
    category: 'Fruits',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/match-game/strawberry-img.png',
    thumbnailUrl: 'https://assets.ccbp.in/frontend/react-js/match-game/strawberry-thumbnail-img.png',
  },
  {
    id: '4',
    category: 'Fruits',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/match-game/watermelon-img.png',
    thumbnailUrl: 'https://assets.ccbp.in/frontend/react-js/match-game/watermelon-thumbnail-img.png',
  },
  {
    id: '5',
    category: 'Fruits',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/match-game/kivi-img.png',
    thumbnailUrl: 'https://assets.ccbp.in/frontend/react-js/match-game/kivi-thumbnail-img.png',
  },
  {
    id: '6',
    category: 'Fruits',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/match-game/papaya-img.png',
    thumbnailUrl: 'https://assets.ccbp.in/frontend/react-js/match-game/papaya-thumbnail-img.png',
  },
  {
    id: '7',
    category: 'Fruits',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/match-game/apple-img.png',
    thumbnailUrl: 'https://assets.ccbp.in/frontend/react-js/match-game/apple-thumbnail-img.png',
  },
  {
    id: '8',
    category: 'Fruits',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/match-game/cherry-img.png',
    thumbnailUrl: 'https://assets.ccbp.in/frontend/react-js/match-game/cherry-thumbnail-img.png',
  },
  {
    id: '9',
    category: 'Animals',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/match-game/zebra-img.png',
    thumbnailUrl: 'https://assets.ccbp.in/frontend/react-js/match-game/zebra-thumbnail-img.png',
  },
  {
    id: '10',
    category: 'Animals',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/match-game/elephant-img.png',
    thumbnailUrl: 'https://assets.ccbp.in/frontend/react-js/match-game/elephant-thumbnail-img.png',
  },
  {
    id: '11',
    category: 'Animals',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/match-game/panda-img.png',
    thumbnailUrl: 'https://assets.ccbp.in/frontend/react-js/match-game/panda-thumbnail-img.png',
  },
  {
    id: '12',
    category: 'Animals',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/match-game/monkey-img.png',
    thumbnailUrl: 'https://assets.ccbp.in/frontend/react-js/match-game/monkey-thumbnail-img.png',
  },
  {
    id: '13',
    category: 'Animals',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/match-game/giraffe-img.png',
    thumbnailUrl: 'https://assets.ccbp.in/frontend/react-js/match-game/giraffe-thumbnail-img.png',
  },
  {
    id: '14',
    category: 'Animals',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/match-game/cheetah-img.png',
    thumbnailUrl: 'https://assets.ccbp.in/frontend/react-js/match-game/cheetah-thumbnail-img.png',
  },
  {
    id: '15',
    category: 'Animals',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/match-game/fox-img.png',
    thumbnailUrl: 'https://assets.ccbp.in/frontend/react-js/match-game/fox-thumbnail-img.png',
  },
  {
    id: '16',
    category: 'Animals',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/match-game/camel-img.png',
    thumbnailUrl: 'https://assets.ccbp.in/frontend/react-js/match-game/camel-thumbnail-img.png',
  },
  {
    id: '17',
    category: 'Places',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/match-game/paris-img.png',
    thumbnailUrl: 'https://assets.ccbp.in/frontend/react-js/match-game/paris-thumbnail-img.png',
  },
  {
    id: '18',
    category: 'Places',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/match-game/taj-mahal-img.png',
    thumbnailUrl: 'https://assets.ccbp.in/frontend/react-js/match-game/taj-mahal-thumbnail-img.png',
  },
]

const MatchGame = () => {
  const [score, setScore] = useState(0)
  const [time, setTime] = useState(30)
  const [activeTab, setActiveTab] = useState('Fruits')
  const [targetImage, setTargetImage] = useState(imagesList[0])
  const [isGameOver, setIsGameOver] = useState(false)

  const timerRef = useRef(null)

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setTime(prev => {
        if (prev === 1) {
          clearInterval(timerRef.current)
          setIsGameOver(true)
        }
        return prev - 1
      })
    }, 1000)
  }

  useEffect(() => {
    startTimer()
    return () => clearInterval(timerRef.current)
  }, [])

  const resetGame = () => {
    setScore(0)
    setTime(30)
    setActiveTab('Fruits')
    setTargetImage(imagesList[0])
    setIsGameOver(false)
    startTimer()
  }

  const handleThumbnailClick = id => {
    if (id === targetImage.id) {
      const newScore = score + 1
      setScore(newScore)
      const newImage = imagesList[Math.floor(Math.random() * imagesList.length)]
      setTargetImage(newImage)
    } else {
      clearInterval(timerRef.current)
      setIsGameOver(true)
    }
  }

  const filteredThumbnails = imagesList.filter(img => img.category === activeTab)

  return (
    <div className="min-h-screen font-sans bg-[url('https://assets.ccbp.in/frontend/react-js/match-game-bg.png')] bg-cover text-white">
      {/* NAV */}
      <header className="bg-black bg-opacity-60 flex justify-between items-center p-4 px-6">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
          className="w-24 sm:w-32"
        />
        <div className="flex items-center gap-4 text-sm sm:text-base font-medium">
          <p>
            Score: <span className="text-yellow-400">{score}</span>
          </p>
          <div className="flex items-center gap-1">
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
              alt="timer"
              className="w-5 h-5"
            />
            <p>{time} sec</p>
          </div>
        </div>
      </header>

      {/* GAME */}
      <main className="max-w-5xl mx-auto px-4 py-8 text-center">
        {!isGameOver ? (
          <>
            <img
              src={targetImage.imageUrl}
              alt="match target"
              className="w-full max-w-sm mx-auto rounded-lg mb-6 border-4 border-white"
            />

            {/* Tabs */}
            <div className="flex justify-center gap-4 mb-4">
              {tabs.map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-1 rounded-full font-semibold text-sm sm:text-base cursor-pointer ${
                    activeTab === tab
                      ? 'bg-yellow-500 text-black'
                      : 'bg-white bg-opacity-80 text-gray-700 hover:bg-yellow-300'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
              {filteredThumbnails.map(item => (
                <button
                  key={item.id}
                  onClick={() => handleThumbnailClick(item.id)}
                  className="overflow-hidden rounded shadow-lg transition hover:scale-105 cursor-pointer"
                >
                  <img
                    src={item.thumbnailUrl}
                    alt="thumbnail"
                    className="w-full h-[80px] sm:h-[100px] object-cover"
                  />
                </button>
              ))}
            </div>
          </>
        ) : (
          <section className="bg-white flex flex-col justify-center items-center text-center max-w-md mx-auto p-6 rounded shadow-lg text-gray-700">
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
              alt="trophy"
              className="w-20 mx-auto mb-4"
            />
            <p className="text-lg font-bold mb-2">Your Score</p>
            <h2 className="text-4xl font-extrabold text-purple-700 mb-6">{score}</h2>
            <button
              onClick={resetGame}
              className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded font-semibold transition cursor-pointer"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
                alt="reset"
                className="w-5"
              />
              Play Again
            </button>
          </section>
        )}
      </main>
    </div>
  )
}

export default MatchGame
