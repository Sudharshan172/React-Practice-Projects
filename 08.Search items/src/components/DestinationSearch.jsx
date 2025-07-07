import { useState } from 'react'
import DestinationItem from './DestinationItem'

const destinationsList = [
  {
    id: 1,
    name: 'Melaka Mosque',
    imageUrl: 'https://img.freepik.com/premium-photo/melaka-straits-mosque-masjid-selat-melaka-sunset-light-melaka-malaysia_759575-5734.jpg',
  },
  {
    id: 2,
    name: 'Shrubland',
    imageUrl: 'https://tse4.mm.bing.net/th/id/OIP.CbujhT4IMcaD7AQb0eTFtgHaE8?rs=1&pid=ImgDetMain&o=7&rm=3',
  },
  {
    id: 3,
    name: 'New York',
    imageUrl: 'https://www.kayak.co.uk/news/wp-content/uploads/sites/5/2022/01/DEST_USA_NYC_EMPIRE_shutterstock_409606294-6.jpg',
  },
  {
    id: 4,
    name: 'Escarpment',
    imageUrl: 'https://i.redd.it/08hy0ln8obe31.jpg',
  },
  {
    id: 5,
    name: 'Westminster Abbey',
    imageUrl: 'https://th.bing.com/th/id/OSK.HEROtoSwZEsfK6DJzJdmh9QsM273iHYB76jmmoFnJGyQ4u0?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3',
  },
  {
    id: 6,
    name: 'South Downs National Park',
    imageUrl: 'https://www.nationalparks.uk/app/uploads/2020/09/Baloon-ride-over-the-South-Downs-Robert-Maynard.1800-x-1200-1024x683.png',
  },
]

const DestinationSearch = () => {
  const [searchInput, setSearchInput] = useState('')

  const filteredDestinations = destinationsList.filter(destination =>
    destination.name.toLowerCase().includes(searchInput.toLowerCase())
  )

  return (
    <div className="bg-white p-8 rounded-lg shadow-xl w-[90%] max-w-3xl">
      <h1 className="text-2xl font-bold mb-4 text-center text-blue-700">Destination Search</h1>
      <input
        type="search"
        placeholder="Search"
        className="w-full px-4 py-2 mb-6 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={searchInput}
        onChange={e => setSearchInput(e.target.value)}
      />
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredDestinations.map(item => (
          <DestinationItem key={item.id} destinationDetails={item} />
        ))}
      </ul>
    </div>
  )
}

export default DestinationSearch
