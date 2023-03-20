import './index.css'

const DenominationItem = props => {
  const {denominationDetail, withdrawCash} = props
  const {value, id} = denominationDetail
  const onWithdraw = () => {
    withdrawCash(id)
  }

  return (
    <li className="list">
      <button type="button" className="denom-value" onClick={onWithdraw}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
