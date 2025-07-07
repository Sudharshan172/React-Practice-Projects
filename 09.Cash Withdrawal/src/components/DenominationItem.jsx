const DenominationItem = ({ amount, onWithdraw }) => {
  return (
    <li>
      <button
        onClick={() => onWithdraw(amount)}
        className="w-full py-2 bg-violet-500 text-white rounded hover:bg-violet-600 transition font-semibold cursor-pointer"
      >
        ₹{amount}
      </button>
    </li>
  )
}

export default DenominationItem
