import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const TransactionItem = ({ onAdd, onDelete, transactions }) => {
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const [type, setType] = useState('Income')

  const handleSubmit = e => {
    e.preventDefault()
    if (title && amount) {
      onAdd({
        id: uuidv4(),
        title,
        amount,
        type,
      })
      setTitle('')
      setAmount('')
      setType('Income')
    }
  }

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* Form */}
      <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Add Transaction</h2>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          className="w-full mb-3 p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={e => setAmount(e.target.value)}
          className="w-full mb-3 p-2 border rounded"
        />
        <select
          value={type}
          onChange={e => setType(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
        >
          <option value="Income">Income</option>
          <option value="Expenses">Expenses</option>
        </select>
        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Add
        </button>
      </form>

      {/* History */}
      <div>
        <h2 className="text-lg font-semibold text-gray-800 mb-4">History</h2>
        <ul className="space-y-3">
          {transactions.map(({ id, title, amount, type }) => (
            <li key={id} className="flex justify-between items-center border-b pb-2">
              <div>
                <h4 className="text-gray-700 font-medium">{title}</h4>
                <p className="text-sm text-gray-500">
                  ₹{amount} · {type}
                </p>
              </div>
              <button onClick={() => onDelete(id)}>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
                  alt="delete"
                  className="w-5 h-5"
                />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default TransactionItem
