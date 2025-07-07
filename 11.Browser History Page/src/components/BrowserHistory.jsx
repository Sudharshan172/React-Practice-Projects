import { useState } from 'react'
import { HiOutlineTrash } from 'react-icons/hi'

const initialHistoryList = [
  {
    id: 1,
    title: 'Instagram',
    domain: 'instagram.com',
    time: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
  },
  {
    id: 2,
    title: 'Twitter',
    domain: 'twitter.com',
    time: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
  },
  {
    id: 3,
    title: 'Facebook',
    domain: 'facebook.com',
    time: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
  },
  {
    id: 4,
    title: 'LinkedIn',
    domain: 'linkedin.com',
    time: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
  },
  {
    id: 5,
    title: 'GitHub',
    domain: 'github.com',
    time: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
  },
  {
    id: 6,
    title: 'Stack Overflow',
    domain: 'stackoverflow.com',
    time: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
  },
  {
    id: 7,
    title: 'Google',
    domain: 'google.com',
    time: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
  },
]

const BrowserHistory = () => {
  const [searchInput, setSearchInput] = useState('')
  const [historyList, setHistoryList] = useState(initialHistoryList)

  const handleSearch = event => {
    setSearchInput(event.target.value)
  }

  const handleDelete = id => {
    setHistoryList(prev => prev.filter(item => item.id !== id))
  }

  const filteredList = historyList.filter(item =>
    item.title.toLowerCase().includes(searchInput.toLowerCase()) ||
    item.domain.toLowerCase().includes(searchInput.toLowerCase())
  )

  return (
    <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold text-blue-700">Browser History</h1>
        <input
          type="search"
          placeholder="Search history..."
          value={searchInput}
          onChange={handleSearch}
          className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring focus:ring-blue-400"
        />
      </div>

      {filteredList.length === 0 ? (
        <p className="text-center text-gray-500">No history matches your search.</p>
      ) : (
        <ul className="space-y-4">
          {filteredList.map(item => (
            <li
              key={item.id}
              className="flex justify-between items-center border-b pb-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.logoUrl}
                  alt={`${item.title} logo`}
                  className="w-8 h-8"
                />
                <div>
                  <p className="text-sm text-gray-600">{item.time}</p>
                  <p className="font-medium text-gray-800">{item.title}</p>
                  <p className="text-xs text-gray-500">{item.domain}</p>
                </div>
              </div>
              <button
                onClick={() => handleDelete(item.id)}
                className="text-red-500 hover:text-red-700 text-xl"
              >
                <HiOutlineTrash />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default BrowserHistory
