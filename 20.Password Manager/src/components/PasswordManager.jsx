import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const PasswordManager = () => {
  const [website, setWebsite] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passwordList, setPasswordList] = useState([])
  const [searchInput, setSearchInput] = useState('')
  const [showPasswords, setShowPasswords] = useState(false)

  const handleAdd = e => {
    e.preventDefault()
    const newEntry = {
      id: uuidv4(),
      website,
      username,
      password,
      isVisible: false,
    }
    setPasswordList(prev => [...prev, newEntry])
    setWebsite('')
    setUsername('')
    setPassword('')
  }

  const deleteItem = id => {
    setPasswordList(prev => prev.filter(item => item.id !== id))
  }

  const filteredList = passwordList.filter(item =>
    item.website.toLowerCase().includes(searchInput.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-400 to-purple-300 p-6 text-gray-800">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-xl p-6">
        {/* Header */}
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="w-40 mb-6"
        />

        {/* Add Password Section */}
        <div className="grid md:grid-cols-2 gap-6 items-center mb-10">
          <div className="p-4">
            <h1 className="text-2xl font-semibold text-indigo-700 mb-6">Add New Password</h1>
            <form onSubmit={handleAdd} className="space-y-4">
              <div className="flex items-center gap-3 border rounded px-3 py-2">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="w-5"
                />
                <input
                  type="text"
                  placeholder="Enter Website"
                  required
                  className="flex-1 focus:outline-none"
                  value={website}
                  onChange={e => setWebsite(e.target.value)}
                />
              </div>

              <div className="flex items-center gap-3 border rounded px-3 py-2">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  className="w-5"
                />
                <input
                  type="text"
                  placeholder="Enter Username/Email"
                  required
                  className="flex-1 focus:outline-none"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                />
              </div>

              <div className="flex items-center gap-3 border rounded px-3 py-2">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="w-5"
                />
                <input
                  type="password"
                  placeholder="Enter Password"
                  required
                  className="flex-1 focus:outline-none"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition cursor-pointer"
              >
                Add
              </button>
            </form>
          </div>

          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            alt="password manager"
            className="w-full hidden md:block"
          />
        </div>

        {/* Your Passwords Section */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex gap-2 items-center">
            <h2 className="text-xl font-semibold text-indigo-700">Your Passwords</h2>
            <span className="text-sm bg-indigo-100 text-indigo-700 px-2 py-1 rounded">
              {filteredList.length}
            </span>
          </div>

          <div className="flex items-center gap-2 border px-3 py-1 rounded">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
              alt="search"
              className="w-4"
            />
            <input
              type="search"
              placeholder="Search"
              value={searchInput}
              onChange={e => setSearchInput(e.target.value)}
              className="bg-transparent outline-none text-sm"
            />
          </div>
        </div>

        {/* Show Passwords Checkbox */}
        <div className="flex items-center mb-4">
          <input
            id="show"
            type="checkbox"
            checked={showPasswords}
            onChange={() => setShowPasswords(prev => !prev)}
            className="mr-2"
          />
          <label htmlFor="show" className="text-sm font-medium text-gray-700">
            Show Passwords
          </label>
        </div>

        {/* Passwords List */}
        {filteredList.length === 0 ? (
          <div className="text-center py-6">
            <img
              src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
              alt="no passwords"
              className="w-40 mx-auto mb-2"
            />
            <p className="text-gray-500">No Passwords</p>
          </div>
        ) : (
          <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {filteredList.map(({ id, website, username, password }) => (
              <li
                key={id}
                className="border rounded p-4 shadow-sm flex flex-col gap-2 relative"
              >
                <h4 className="text-sm text-gray-700 font-semibold">{website}</h4>
                <p className="text-sm text-gray-600">{username}</p>
                <p className="text-sm text-gray-500">
                  {showPasswords ? (
                    password
                  ) : (
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
                      alt="stars"
                      className="w-16"
                    />
                  )}
                </p>
                <button
                  onClick={() => deleteItem(id)}
                  className="absolute top-2 right-2 bg-red-600 p-1 rounded-full hover:bg-red-500 cursor-pointer"
                >
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
                    alt="delete"
                    className="w-5"
                  />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default PasswordManager
