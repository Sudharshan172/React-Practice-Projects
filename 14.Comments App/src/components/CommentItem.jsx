const CommentItem = ({ comment, onLike, onDelete }) => {
  const { id, name, message, time, liked } = comment
  const initial = name ? name[0].toUpperCase() : 'U'

  // Optional: assign a dynamic background from a set of Tailwind classes
  const bgColors = ['bg-red-400', 'bg-green-400', 'bg-blue-400', 'bg-purple-400', 'bg-pink-400', 'bg-orange-400']
  const bgColor = bgColors[id.charCodeAt(0) % bgColors.length]

  return (
    <li className="border-b pb-4">
      <div className="flex items-center gap-3 mb-1">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg ${bgColor}`}>
          {initial}
        </div>
        <div className="flex flex-col">
          <h3 className="font-semibold text-gray-800">{name}</h3>
          <p className="text-xs text-gray-500">{time}</p>
        </div>
      </div>
      <p className="text-gray-600 mb-2">{message}</p>
      <div className="flex items-center gap-4">
        <button onClick={() => onLike(id)} className="flex items-center gap-1">
          <img
            src={
              liked
                ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
            }
            alt={liked ? 'liked' : 'like'}
            className="w-5 h-5"
          />
          <span className={`text-sm ${liked ? 'text-blue-600 font-medium' : 'text-gray-500'}`}>
            Like
          </span>
        </button>
        <button onClick={() => onDelete(id)}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="w-5 h-5"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
