const DestinationItem = ({ destinationDetails }) => {
  const { name, imageUrl } = destinationDetails

  return (
    <li className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={imageUrl} alt={name} className="w-full h-40 object-cover" />
      <h2 className="text-center text-lg font-semibold p-3 text-gray-700">{name}</h2>
    </li>
  )
}

export default DestinationItem
