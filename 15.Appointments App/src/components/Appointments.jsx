import { useState } from 'react'
import AppointmentItem from './AppointmentItem'
import { v4 as uuidv4 } from 'uuid'

const Appointments = () => {
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [appointments, setAppointments] = useState([])
  const [showStarredOnly, setShowStarredOnly] = useState(false)

  const addAppointment = () => {
    if (title && date) {
      const newAppointment = {
        id: uuidv4(),
        title,
        date: new Date(date).toLocaleDateString('en-IN', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          weekday: 'long',
        }),
        isStarred: false,
      }
      setAppointments(prev => [newAppointment, ...prev])
      setTitle('')
      setDate('')
    }
  }

  const toggleStar = id => {
    setAppointments(prev =>
      prev.map(item =>
        item.id === id ? { ...item, isStarred: !item.isStarred } : item
      )
    )
  }

  const filteredAppointments = showStarredOnly
    ? appointments.filter(item => item.isStarred)
    : appointments

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-2xl">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-purple-700 mb-4">Add Appointment</h1>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="w-full mb-4 border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="date"
            value={date}
            onChange={e => setDate(e.target.value)}
            className="w-full mb-4 border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            onClick={addAppointment}
            className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition"
          >
            Add
          </button>
        </div>
        <div className="flex-1">
          <img
            src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
            alt="appointments"
            className="w-full max-w-sm mx-auto"
          />
        </div>
      </div>

      <hr className="my-6" />

      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-medium text-gray-800">Appointments</h2>
        <button
          onClick={() => setShowStarredOnly(prev => !prev)}
          className={`px-4 py-1 rounded-full font-medium ${
            showStarredOnly
              ? 'bg-purple-600 text-white'
              : 'bg-gray-200 text-gray-700'
          }`}
        >
          {showStarredOnly ? 'Show All' : 'Show Starred'}
        </button>
      </div>

      <ul className="space-y-4">
        {filteredAppointments.map(item => (
          <AppointmentItem key={item.id} data={item} onStar={() => toggleStar(item.id)} />
        ))}
      </ul>
    </div>
  )
}

export default Appointments
