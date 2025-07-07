import { useState } from 'react'
import TabItem from './components/TabItem'
import AppStore from './components/AppStore'

const tabs = ['Social', 'Games', 'News', 'Food']

const App = () => {
  const [searchInput, setSearchInput] = useState('')
  const [activeCategory, setActiveCategory] = useState('Social')

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-pink-300 p-6">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-lg p-6">
        <h1 className="text-4xl font-bold text-center text-purple-700 mb-6">App Store</h1>

        <div className="flex justify-center mb-6">
          <input
            type="search"
            placeholder="Search"
            value={searchInput}
            onChange={e => setSearchInput(e.target.value)}
            className="w-full max-w-md px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div className="flex justify-center gap-4 mb-6 flex-wrap">
          {tabs.map(tab => (
            <TabItem
              key={tab}
              category={tab}
              isActive={activeCategory === tab}
              onClick={() => setActiveCategory(tab)}
            />
          ))}
        </div>

        <AppStore category={activeCategory} searchInput={searchInput} />
      </div>
    </div>
  )
}

export default App
