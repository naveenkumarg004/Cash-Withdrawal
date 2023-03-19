import './index.css'

const DenominationItem = props => {
  const {denominationDetail} = props
  const {value} = denominationDetail
  return (
    <li className="list">
      <button type="button" className="denom-value">
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
