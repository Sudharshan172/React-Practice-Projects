const MoneyDetails = ({ income, expenses, balance }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <div className="bg-blue-100 flex items-center p-4 rounded">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="w-12 h-12 mr-4"
        />
        <div>
          <p className="text-sm text-gray-600">Your Balance</p>
          <p className="text-lg font-bold text-blue-800">₹{balance}</p>
        </div>
      </div>
      <div className="bg-green-100 flex items-center p-4 rounded">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="w-12 h-12 mr-4"
        />
        <div>
          <p className="text-sm text-gray-600">Your Income</p>
          <p className="text-lg font-bold text-green-800">₹{income}</p>
        </div>
      </div>
      <div className="bg-red-100 flex items-center p-4 rounded">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="w-12 h-12 mr-4"
        />
        <div>
          <p className="text-sm text-gray-600">Your Expenses</p>
          <p className="text-lg font-bold text-red-800">₹{expenses}</p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
