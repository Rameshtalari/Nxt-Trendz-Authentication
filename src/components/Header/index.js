import {Link} from 'react-router-dom'

import {Component} from 'react'
import './index.css'

class Header extends Component {
  render() {
    return (
      <div>
        <div className="smallDevices">
          <div className="header">
            <img
              className="logo"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
            />
            <img
              className="logout"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
              alt="nav logout"
            />
          </div>
          <div className="navItems">
            <img
              className="icons"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
              alt="nav home"
            />
            <img
              className="icons"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
              alt="nav products"
            />
            <img
              className="icons"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
              alt="nav cart"
            />
          </div>
        </div>
        <div className="largeDevices">
          <div className="header">
            <div>
              <img
                className="logo"
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
                alt="website logo"
              />
            </div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/bad-path">Products</Link>
              </li>
              <li>Cart</li>
              <li>
                <button>Logout</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
