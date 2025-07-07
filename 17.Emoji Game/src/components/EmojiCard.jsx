const EmojiCard = ({ emoji, onClick }) => (
  <button
    onClick={onClick}
    className="bg-white hover:bg-gray-100 transition shadow rounded text-4xl flex items-center justify-center p-6"
  >
    <span role="img" aria-label={emoji.alt}>
      {emoji.emojiName}
    </span>
  </button>
)

export default EmojiCard
