import React, { Component } from 'react'

import {
  clickable
} from '../../HOC/clickable'

const classNames = require('classnames')

import {
  btnPrimarySm
} from './style.scss'

@clickable
class BtnPrimarySm extends Component {

  constructor(props) {
    super(props)
  }

  render() {
  	const { className, children, onClick } = this.props
  	const btnClassName = classNames(className, btnPrimarySm)
  	return (<button className={btnClassName} onClick={onClick}>{children}</button>)
  }
}

export default BtnPrimarySm
