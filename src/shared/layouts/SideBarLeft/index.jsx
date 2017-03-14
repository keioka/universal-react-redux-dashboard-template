import React, { Component } from 'react'
import { Link } from 'react-router'

import {
  H6
} from '../../components'

import {
  sideBarLeft,
  sideBarLeftSection
}
from './style.scss'

export default class SideBarLeft extends Component {
  render(){
    const { children } = this.props
    return (
      <aside className={sideBarLeft}>
        <div className={sideBarLeftSection}>
          <H6>Menu</H6>
          <ul>
            <li><Link to="/">Main Panel</Link></li>
            <li><Link to="/customers">Customer Lists</Link></li>
            <li><Link to="/chats/pending">Pending Chat</Link></li>
            <li><Link to="/chats/history">Chat History</Link></li>
            <li><Link to="/transactions">Transaction Record</Link></li>
          </ul>
        </div>

        <div className={sideBarLeftSection}>
          <H6>Admin</H6>
          <ul>
            <li><Link to="/admin/operators">Operators</Link></li>
            <li><Link to="/customers">Add Plugin</Link></li>
          </ul>
        </div>

        <div className={sideBarLeftSection}>
          <H6>Current Operator</H6>
          <h5>Kei Oka</h5>
          <h5>Stars</h5>
          <ul>
            <li>Add Plugin</li>
          </ul>
        </div>
      </aside>
    )
  }
}


