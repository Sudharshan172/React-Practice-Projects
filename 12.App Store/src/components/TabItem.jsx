const TabItem = ({ category, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full font-medium transition ${
        isActive
          ? 'bg-indigo-600 text-white'
          : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
      }`}
    >
      {category}
    </button>
  )
}

export default TabItem
