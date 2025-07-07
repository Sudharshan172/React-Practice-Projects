import { useState } from 'react'
import MoneyDetails from './MoneyDetails'
import TransactionItem from './TransactionItem'

const MoneyManager = () => {
  const [transactions, setTransactions] = useState([])

  const addTransaction = txn => {
    setTransactions(prev => [...prev, txn])
  }

  const deleteTransaction = id => {
    setTransactions(prev => prev.filter(txn => txn.id !== id))
  }

  const income = transactions
    .filter(txn => txn.type === 'Income')
    .reduce((acc, cur) => acc + parseInt(cur.amount), 0)

  const expenses = transactions
    .filter(txn => txn.type === 'Expenses')
    .reduce((acc, cur) => acc + parseInt(cur.amount), 0)

  const balance = income - expenses

  return (
    <div className="bg-white rounded-lg shadow-xl max-w-4xl mx-auto p-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-blue-600 mb-2">Hi, Sudharshan</h1>
          <p className="text-sm text-gray-600">Welcome back to your Money Manager</p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/money-manager-bg.png"
          alt="money manager"
          className="w-48 md:w-56"
        />
      </div>

      <MoneyDetails income={income} expenses={expenses} balance={balance} />
      <TransactionItem
        onAdd={addTransaction}
        onDelete={deleteTransaction}
        transactions={transactions}
      />
    </div>
  )
}

export default MoneyManager
