const AppointmentItem = ({ data, onStar }) => {
  const { title, date, isStarred } = data

  const starIcon = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  return (
    <li className="flex justify-between items-center border-b pb-3">
      <div>
        <h3 className="font-semibold text-gray-700">{title}</h3>
        <p className="text-sm text-gray-500">{date}</p>
      </div>
      <button onClick={onStar}>
        <img src={starIcon} alt="star" className="w-6 h-6" />
      </button>
    </li>
  )
}

export default AppointmentItem
