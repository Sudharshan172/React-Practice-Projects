import { useState } from 'react'

const LoginApp = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = () => setIsLoggedIn(true)
  const handleLogout = () => setIsLoggedIn(false)

  let content
  if (isLoggedIn) {
    content = (
      <>
        <h1 className="text-2xl font-bold text-white mb-4">Welcome</h1>
        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded cursor-pointer"
        >
          Logout
        </button>
      </>
    )
  } else {
    content = (
      <>
        <h1 className="text-2xl font-bold text-white mb-4">Please Login</h1>
        <button
          onClick={handleLogin}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded cursor-pointer"
        >
          Login
        </button>
      </>
    )
  }

  return (
    <div className="p-8 rounded-lg shadow-lg text-center w-[300px] bg-gradient-to-b from-blue-900 to-blue-300">
      {content}
    </div>
  )
}

export default LoginApp
