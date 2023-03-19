import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  render() {
    const {denominationsList} = this.props
    return (
      <div className="bg">
        <div className="blue-page">
          <div className="profile-cont">
            <img
              src="https://www.shutterstock.com/image-vector/man-icon-vector-600w-1040084344.jpg"
              alt="profile"
            />
            <h2 className="name">Sarah Williams</h2>
          </div>
          <div className="bal-cont">
            <p className="ur-bal">Your Balance</p>
            <div className="money-rupee">
              <p className="money">2000</p>
              <p className="in-rupees">In Rupees</p>
            </div>
            <h1 className="wd-head">Withdraw</h1>

            <p className="cs-para">CHOOSE SUM (IN RUPEES)</p>

            <ul className="denom-cont">
              {denominationsList.map(eachObj => (
                <DenominationItem
                  denominationDetail={eachObj}
                  key={eachObj.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal

/* <ul className="items-holder">
            {denominationsList.map(eachObject => (
              <DenominationItem
                key={eachObject.id}
                value={eachObject.value}
                stateChange={this.stateChange}
              />
            ))}
          </ul>
          */
