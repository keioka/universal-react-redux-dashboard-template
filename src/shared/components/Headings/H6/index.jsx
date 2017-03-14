import React, { Component } from 'react'

import {
  h6
} from './style.scss'

export default class H6 extends Component {
  render(){
    return (
      <h6 className={h6}>{this.props.children}</h6>
    )
  }
}