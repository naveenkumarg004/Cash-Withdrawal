import {Component} from 'react'

import './index.css'

import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {cash: 2000}

  withdrawCash = id => {
    let amount
    switch (id) {
      case 1:
        amount = 50
        break
      case 2:
        amount = 100
        break
      case 3:
        amount = 200
        break
      case 4:
        amount = 500
        break
      default:
        break
    }
    this.setState(prevState => ({
      cash: prevState.cash - amount,
    }))
  }

  render() {
    const {denominationsList} = this.props
    const {cash} = this.state

    return (
      <div className="bg">
        <div className="blue-page">
          <div className="profile-cont">
            <img
              className="image"
              src="https://www.shutterstock.com/image-vector/man-icon-vector-600w-1040084344.jpg"
              alt="profile"
            />
            <h2 className="name">Sarah Williams</h2>
          </div>
          <div className="bal-cont">
            <p className="ur-bal">Your Balance</p>
            <div className="money-rupee">
              <p className="money">{cash}</p>
              <p className="in-rupees">In Rupees</p>
            </div>
          </div>
          <p className="wd-head">Withdraw</p>

          <p className="cs-para">CHOOSE SUM (IN RUPEES)</p>

          <ul className="denom-cont">
            {denominationsList.map(eachObj => (
              <DenominationItem
                denominationDetail={eachObj}
                key={eachObj.id}
                withdrawCash={this.withdrawCash}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
