import React, { Component } from 'react'

import {
  bubbleOperator
} from './style.scss'

class BubbleOperator extends Component {

  constructor(props) {
    super(props)
  }

  render() {
  	return (<li className={bubbleOperator}>{this.props.children}</li>)
  }
}

export default BubbleOperator

