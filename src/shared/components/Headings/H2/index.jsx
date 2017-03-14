import React, { Component } from 'react'

import {
  h2
} from './style.scss'

export default class H2 extends Component {
  render(){
    return (
      <h2 className={h2}>{this.props.children}</h2>
    )
  }
}