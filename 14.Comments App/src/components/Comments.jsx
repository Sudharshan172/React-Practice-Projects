import { useState } from 'react'
import CommentItem from './CommentItem'
import { v4 as uuidv4 } from 'uuid'

const Comments = () => {
  const [name, setName] = useState('')
  const [comment, setComment] = useState('')
  const [commentsList, setCommentsList] = useState([])

  const handleAddComment = () => {
    if (name.trim() && comment.trim()) {
      const newComment = {
        id: uuidv4(),
        name,
        message: comment,
        time: new Date().toLocaleTimeString(),
        liked: false,
      }
      setCommentsList(prev => [newComment, ...prev])
      setName('')
      setComment('')
    }
  }

  const toggleLike = id => {
    setCommentsList(prev =>
      prev.map(item =>
        item.id === id ? { ...item, liked: !item.liked } : item
      )
    )
  }

  const deleteComment = id => {
    setCommentsList(prev => prev.filter(item => item.id !== id))
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-3xl">
      <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-indigo-700 mb-4">
            Comments
          </h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
            className="w-full max-w-xs"
          />
        </div>

        <div className="flex-1 w-full">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full mb-4 px-4 py-2 border rounded focus:outline-none"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <textarea
            placeholder="Your Comment"
            className="w-full mb-4 px-4 py-2 border rounded focus:outline-none resize-none"
            rows={4}
            value={comment}
            onChange={e => setComment(e.target.value)}
          />
          <button
            onClick={handleAddComment}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded transition w-full"
          >
            Add Comment
          </button>
        </div>
      </div>

      <hr className="my-6" />
      <h2 className="text-lg font-medium text-gray-700 mb-4">
        {commentsList.length} Comments
      </h2>

      <ul className="space-y-4">
        {commentsList.map(item => (
          <CommentItem
            key={item.id}
            comment={item}
            onLike={toggleLike}
            onDelete={deleteComment}
          />
        ))}
      </ul>
    </div>
  )
}

export default Comments
