import { useState } from 'react'
import DenominationItem from './DenominationItem'

const denominations = [50, 100, 200, 500]

const CashWithdrawal = () => {
  const [balance, setBalance] = useState(2000)

  const handleWithdraw = amount => {
    if (amount <= balance) {
      setBalance(prev => prev - amount)
    } else {
      alert('Insufficient Balance!')
    }
  }

  return (
    <div className="bg-black shadow-xl p-8 rounded-lg w-[320px] text-center">
      <h1 className="text-xl font-bold text-white mb-2">Sudharshan Reddy</h1>
      <p className="text-sm text-gray-200 mb-6">Your Balance</p>
      <h2 className="text-3xl font-bold text-indigo-600 mb-6">₹{balance}</h2>

      <p className="text-lg text-gray-200 mb-4">Withdraw</p>
      <p className="text-gray-600 mb-4">Choose Amount (In Rupees)</p>

      <ul className="grid grid-cols-2 gap-4">
        {denominations.map(value => (
          <DenominationItem key={value} amount={value} onWithdraw={handleWithdraw} />
        ))}
      </ul>
    </div>
  )
}

export default CashWithdrawal
