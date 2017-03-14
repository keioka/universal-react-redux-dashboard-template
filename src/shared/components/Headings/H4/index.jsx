import React, { Component } from 'react'

import {
  h4
} from './style.scss'

export default class H4 extends Component {
  render(){
    return (
      <h4 className={h4}>{this.props.children}</h4>
    )
  }
}