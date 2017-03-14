import React, { Component } from 'react'

import {
  header,
  headerUser,
  headerUserAvator,
  headerLogo,
  headerNav
} from './style.scss'

export default class Header extends Component {
  render(){
    const { children } = this.props
    return (
      <header className={header}>
      	<span className={headerUser}>
      	  <span className={headerUserAvator}>
      	    <img src="https://randomuser.me/api/portraits/men/83.jpg" />
      	  </span>
      	</span>
      	<span className={headerLogo}>
      	Logo
      	</span>
      	<span className={headerNav}>
      	Signout
      	</span>

      </header>
    )
  }
}