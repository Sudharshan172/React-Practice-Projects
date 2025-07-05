const UserProfile = props => {
  const { userDetails } = props
  const { imageUrl, name, role } = userDetails

  return (
    <li className="flex items-center gap-8 bg-white shadow-md rounded-lg p-4">
      <img
        src={imageUrl}
        alt={`${name} avatar`}
        className="w-16 h-16 rounded-full mr-4"
      />
      <div>
        <h1 className="text-lg font-semibold text-gray-800">{name}</h1>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </li>
  )
}

export default UserProfile
