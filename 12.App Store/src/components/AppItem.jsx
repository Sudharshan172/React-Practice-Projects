const AppItem = ({ appDetails }) => {
  const { name, logo } = appDetails

  return (
    <li className="flex flex-col items-center bg-gray-100 p-4 rounded shadow hover:bg-gray-200 transition">
      <img src={logo} alt={name} className="w-16 h-16 mb-2" />
      <p className="text-sm font-medium text-gray-800 text-center">{name}</p>
    </li>
  )
}

export default AppItem
