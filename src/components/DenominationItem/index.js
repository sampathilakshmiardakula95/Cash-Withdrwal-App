// Write your code here
import './index.css'

const DenominationItem = props => {
  const {cash, cashBtm} = props
  const {value} = cash
  const onClickCash = () => {
    cashBtm(value)
  }
  return (
    <li className="cash-item">
      <button className="cash-btn" type="button" onClick={onClickCash}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
