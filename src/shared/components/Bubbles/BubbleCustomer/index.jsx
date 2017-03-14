import React, { Component } from 'react'

import {
  bubbleCustomer
} from './style.scss'

class BubbleCustomer extends Component {

  constructor(props) {
    super(props)
  }

  render() {
  	return (<li className={bubbleCustomer}>{this.props.children}</li>)
  }
}

export default BubbleCustomer